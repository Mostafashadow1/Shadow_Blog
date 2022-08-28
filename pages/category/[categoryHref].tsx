import React from "react";
import { Articles, Banner } from "components";
import {
  getArticlesSpecificCategory,
  getCategoriesNameAndHref,
} from "services/fetchData";
import image from "images/articles.png";
import { useRouter } from "next/router";
import { articlesProps } from "types";
import Head from "next/head";
const CategoryById = ({ articles }: articlesProps) => {
  const { query } = useRouter();
  return (
    <div>
      <Head>
        <title>Sdadow Blog | Category</title>
      </Head>
      <Banner
        title1={`Category : ${query?.categoryHref}`}
        title2="Discover Nice Articles Here"
        description="Note: All of these topics are from the Internet from trusted sites, and there is an idea for the site."
        image={image}
        buttonCategory
      />
      <Articles articles={articles} />
    </div>
  );
};

export default CategoryById;

export async function getStaticProps({ params }: any) {
  const articles = await getArticlesSpecificCategory(params.categoryHref);
  return {
    props: {
      articles,
    },
  };
}

type category = {
  name: string;
  href: string;
};
export async function getStaticPaths() {
  const categories = await getCategoriesNameAndHref();
  const paths = categories?.map((category: category) => ({
    params: { categoryHref: category.href },
  }));
  return {
    paths,
    fallback: true,
  };
}
