"use client";

import { DataType } from "@/(fetchData)/fetchData";
import CardItem from "./CardItem";
import { useMemo, useState } from "react";

const CardList = ({ posts }: { posts: DataType[] }) => {
  const [postsList, setPostsList] = useState<DataType[]>(posts);
  // const [search, setSearch] = useState<string>();

  function deletePost(postId: number) {
    setPostsList((prev) => prev.filter((post) => post.id !== postId));
  }

  // useMemo(() => {
  //   setPostsList((posts) =>
  //     posts.filter((post) => post.title == search || post.body == search)
  //   );
  // }, [search]);

  return (
    <div>
      {/* <input
        className="text-indigo-600 mb-6"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      /> */}
      {postsList.map((post) => (
        <CardItem deletePost={deletePost} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default CardList;

