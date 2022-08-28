import React from "react";
import Masonry from "react-masonry-css";
import { Article } from "components";
import { articlesProps } from "types";

const Articles = ({ articles }: articlesProps) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {articles.map((article: any, idx: number) => (
        <Article key={idx} article={article?.node} />
      ))}
    </Masonry>
  );
};

export default Articles;
