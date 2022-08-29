import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { CategoryProps } from "types";
const Category = ({ category }: CategoryProps) => {
  return (
    <div className="group transition  duration-300 ease-in-out  my-10 bg-white p-3 border border-mainBorder rounded-lg cursor-pointer">
      <div className=" relative ">
        <Image
          placeholder="blur"
          blurDataURL={category?.image?.url}
          src={category?.image?.url}
          alt="category image"
          className="rounded-lg"
          layout="responsive"
          width="200"
          height="100"
        />
        <Link href={`/category/${category.href}`}>
          <div className=" flex items-center   translate-x-[-50%] translate-y-[-50%] bg-purple-500 h-16 w-16 rounded-full  justify-center absolute top-[100%] left-[50%] opacity-0  group-hover:top-[50%]    group-hover:opacity-100  hover:bg-purple-800 ">
            <BsArrowUpRightSquare className=" text-white  text-3xl " />
          </div>
        </Link>
      </div>
      <div className="p-2">
        <div className="text-xl font-semibold">
          <h2 className=" capitalize text-purple-600 ">{category?.name}</h2>
          <p className="font-medium mt-4">{category?.description}</p>
        </div>
        <div className="flex items-center mt-6 gap-3">
          <div className="p-1">
            <Image
              src={category?.author?.avatar?.url}
              placeholder="blur"
              blurDataURL={category?.author?.avatar?.url}
              alt="avatar image"
              className="rounded-full"
              width="40"
              height="40"
            />
          </div>
          <div className="text-purple-500 text-sm capitalize  font-semibold">
            <h2>{category?.author?.name}</h2>
            <h2 className="text-secColor">
              {category?.createdAt &&
                moment(category?.createdAt).format("MMMM  YYYY, h:mm a")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
