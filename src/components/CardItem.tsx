"use client";
import { DataType } from "@/(fetchData)/fetchData";
import Link from "next/link";

interface ICardInterface {
  post: DataType;
  deletePost: (id: number) => void;
}

const CardItem = ({ post, deletePost }: ICardInterface) => {
  return (
    <div className=" flex justify-between items-center  border w-full mb-2 border-teal-500 p-3">
      <div>
        <Link
          href={"post/" + post.id}
          className="text-xl hover:underline font-bold text-teal-500"
        >
          {post.title}.
        </Link>
        <p>{post.body}</p>
      </div>

      <button
        onClick={() => {
          deletePost(post.id);
        }}
        className="text-red-700 ml-3 border p-2 border-red-700 hover:text-red-300 hover:border-red-300 active:text-red-100 active:border-red-100"
      >
        Delete
      </button>
    </div>
  );
};

export default CardItem;

