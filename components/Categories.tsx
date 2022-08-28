import Image from "next/image";
import React from "react";
import image from "images/categ_image.png";
import Masonry from "react-masonry-css";
import { Category } from "components";
import { CategoriesProps } from "types";

const Categories = ({ categories }: CategoriesProps) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  };
  return (
    <div className="mt-6">
      <div className="flex items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500  bg-clip-text text-transparent w-fit ">
          All Categories
        </h2>
        <Image
          src={image}
          alt="image"
          width="70"
          height="70"
          className=" scale-125"
        />
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {categories?.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </Masonry>
    </div>
  );
};

export default Categories;
