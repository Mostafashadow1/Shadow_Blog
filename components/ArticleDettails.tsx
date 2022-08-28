import moment from "moment";
import Image from "next/image";
import React from "react";
import { articleDetailsProps } from "types";
import parse from "html-react-parser";
const ArticleDettails = ({ articleDetails }: articleDetailsProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 ">
      <div className="relative  overflow-hidden shadow-md mb-6">
        <Image
          src={articleDetails?.image?.url}
          placeholder="blur"
          blurDataURL="small"
          alt="category image"
          layout="responsive"
          width="200"
          height="70"
          className="object-center h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex  items-center  w-full border-b border-mainBorder">
          <div>
            <Image
              alt={articleDetails?.author?.name}
              placeholder="blur"
              blurDataURL="base64"
              height="50px"
              width="50px"
              className=" rounded-full"
              src={articleDetails?.author?.avatar?.url}
            />
          </div>
          <div className="flex flex-col justify-center p-2">
            <h2 className=" text-gray-700  font-medium text-lg">
              {articleDetails?.author?.name}
            </h2>
            <h2 className="text-secColor">
              {articleDetails?.createdAt &&
                moment(articleDetails?.createdAt).format("MMMM  YYYY, h:mm a")}
            </h2>
          </div>
        </div>
        <div className=" font-semibold mt-4">
          <h2 className="text-3xl  capitalize ">{articleDetails?.title}</h2>
          <div className=" mt-2 text-secColor  word-wrap">
            {articleDetails?.content.html &&
              parse(articleDetails?.content.html)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDettails;
