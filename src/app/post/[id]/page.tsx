import { getPostById } from "@/(fetchData)/fetchData";
import PostInfo from "@/components/PostInfo";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);

  return <PostInfo post={post} />;
}

