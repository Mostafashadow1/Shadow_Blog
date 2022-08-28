import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { articleProps } from "types";

const Article = ({ article }: articleProps) => {
  return (
    <div className=" my-4 bg-white p-3 border border-mainBorder rounded-lg">
      <div className="rounded-lg bg-purple-400">
        <Image
          src={article?.image?.url}
          alt="category image"
          className="rounded-lg"
          layout="responsive"
          width="200"
          height="100"
        />
      </div>
      <div className="p-2">
        <div className="text-xl font-semibold">
          <h2 className=" capitalize text-purple-600 ">{article?.title}</h2>
          <p className="font-medium mt-2 text-secColor text-base">
            {article?.description}
          </p>
        </div>
        <div className="flex items-center mt-4 gap-3">
          <div>
            <Image
              src={article?.author?.avatar?.url}
              alt="avatar image"
              className="rounded-full"
              width="40"
              height="40"
            />
          </div>
          <div className="text-purple-500 text-sm capitalize  font-semibold">
            <h2>{article?.author?.name}</h2>
            <h2 className="text-secColor">
              {article?.createdAt &&
                moment(article?.createdAt).format("MMMM  YYYY, h:mm a")}
            </h2>
          </div>
        </div>
      </div>
      <Link href={`/article/${article.href}`}>
        <div className="px-2 my-1">
          <button className="  bg-purple-600 text-white  w-full py-3 rounded-lg  text-xl capitalize hover:bg-opacity-90  transition duration-150">
            go to post
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Article;
