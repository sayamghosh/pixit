import Navbar from "@/components/Navbar";
import Searchform from "@/components/Searchform";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Midbar from "@/components/Midbar";
import Midbar2 from "@/components/Midbar2";
// import Modal from "./components/modal"

export default function Home() {
  return (
    <div className="bg-[#f0f8ff]">
      <div className="w-full h-screen bg-center bg-[url('https://i.pinimg.com/originals/69/0c/c2/690cc2d6eaf6681afabe130aa2f87195.jpg')]">
        <Navbar />
        <Searchform />
      </div>
      <Midbar />
      <Midbar2 />
      <Cards type={"curated"} />
      <Footer />
    </div>
  );
}
