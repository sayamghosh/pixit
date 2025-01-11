import Search_Nav from "@/components/search_nav";
import Cards from "@/components/Cards";

export default async function page({ params }) {
  const { id } = await params;

  return (
    <div className="w-full min-h-screen h-full bg-slate-100 pb-5 relative">
      <Search_Nav query={id} />
      <Cards type={"search"} query={id} />
    </div>
  );
}
