import { getAllPosts } from "@/(fetchData)/fetchData";
import CardsList from "@/components/CardsList";
export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="flex flex-col items-center justify-between mx-10">
      <h1 className="text-3xl m-3">Main Page</h1>
      <CardsList posts={posts} />
    </main>
  );
}

