import React from "react";
import Image from "next/image";
import { BannerProps } from "types";
import Link from "next/link";
const Banner = ({
  title1,
  title2,
  description,
  image,
  buttonCategory,
}: BannerProps) => {
  return (
    <div className=" flex flex-wrap md:justify-between items-center  border-b border-mainBorder px-1">
      <div className=" md:flex-[0.6] ">
        <div className="mt-4 capitalize font-semibold space-y-2">
          <h3 className="text-2xl md:text-3xl  w-fit ">{title1}</h3>
          <h3 className="text-2xl md:text-3xl bg-gradient-to-r from-purple-500 to-pink-500  bg-clip-text text-transparent w-fit ">
            {title2}
          </h3>
        </div>
        <div className="mt-3 w-full md:w-[80%]">
          <p className="text-sm text-secColor">{description}</p>
        </div>
        {buttonCategory && (
          <Link href="/">
            <button className=" my-3 bg-purple-500 text-white  px-4 py-2 rounded-lg  capitalize mt-4  font-base hover:translate-y-1 transition duration-150">
              all categories
            </button>
          </Link>
        )}
      </div>
      <div className="flex  mx-auto md:mx-0 md:flex-[0.3]">
        <Image src={image} alt="image" width={"600"} height={"400"} />
      </div>
    </div>
  );
};

export default Banner;
