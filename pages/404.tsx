import React from "react";
import image from "images/error.jpg";
import Image from "next/image";
import Link from "next/link";
const PageError = () => {
  return (
    <div className="flex justify-center">
      <div>
        <Image
          priority
          src={image}
          alt="image"
          height="300"
          width="400"
          objectFit="contain"
        />
        <div className="flex items-center justify-center gap-2">
          <p className=" text-center capitalize text-xl">
            this page not found got to
          </p>
          <Link href="/">
            <button className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageError;
