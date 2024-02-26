"use client";

import { DataType } from "@/(fetchData)/fetchData";

const PostInfo = ({ post }: { post: DataType }) => {
  return (
    <div className="flex m-auto mt-5 w-8/12 ">
      <div>
        <h1 className="text-3xl font-bold text-teal-600 text-center">
          {post.title}.
        </h1>
        <p>{post.body}</p>

        <p className="text-center mt-2 text-green-600">
          By user with id: {post.userId}
        </p>
      </div>
    </div>
  );
};

export default PostInfo;

