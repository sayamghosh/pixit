"use client";
import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import Loadmore from "./Loadmore";

export default function Cards({ type, query }) {
  const [curated, setCurated] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    type === "curated"
      ? `https://api.pexels.com/v1/curated?per_page=24`
      : `https://api.pexels.com/v1/search?query=${query}&per_page=24`
  );

  async function searchCurated() {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
        },
      });
      const data = await response.json();
      setCurated([...curated, ...data.photos]);
      setUrl(data.next_page);
      console.log("Response:", data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    setLoading(true);
    searchCurated(); //FIXME: It is called once or not
  }, []);
  return (
    <>
      <div className="mx-5 mt-4 sm:mx-10 lg:mx-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 select-none ">
        {curated.length > 0 &&
          curated.map((item, index) => <Card key={index} data={item} />)}
      </div>
      {curated.length > 0 && <Loadmore searchCurated={searchCurated} />}
      {loading && <p>Loading...</p>}
      {!loading && curated.length === 0 && (
        <h1 className="text-black max-w-screen-xl mx-auto font-bold font-serif text-2xl">
          No photos found...
        </h1>
      )}
    </>
  );
}
