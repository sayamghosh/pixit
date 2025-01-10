import Search_Nav from "@/components/search_nav";
import Cards from "@/components/Cards";

export default async function page({ params }) {
  const { id } = await params;

  return (
    <div className="w-full h-full bg-slate-100 pb-5">
      <Search_Nav query={id} />
      <Cards type={"search"} query={id} />
    </div>
  );
}
