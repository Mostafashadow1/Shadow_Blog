import { ArticleDettails } from "components";
import Head from "next/head";
import React from "react";
import { getDetailsArticle, getHrefArticles } from "services/fetchData";
import { articleDetailsProps } from "types";

const articleSpecific = ({ articleDetails }: articleDetailsProps) => {
  return (
    <div className="mt-4">
      <Head>
        <title>Sdadow Blog | Article</title>
      </Head>
      <ArticleDettails articleDetails={articleDetails} />
    </div>
  );
};

export default articleSpecific;

export async function getStaticProps({ params }: any) {
  const articleDetails = await getDetailsArticle(params.articleHref);
  return {
    props: {
      articleDetails,
    },
  };
}

export async function getStaticPaths() {
  const articles = await getHrefArticles();
  const paths = articles?.map((article: any) => ({
    params: { articleHref: article.href },
  }));
  return {
    paths,
    fallback: false,
  };
}
