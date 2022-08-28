import { Banner, Categories } from "components";
import Head from "next/head";
import { getCategories } from "services/fetchData";
import { CategoriesProps } from "types";

import imageBanner from "images/banner.png";

const Home = ({ categories }: CategoriesProps) => {
  return (
    <div>
      <Head>
        <title>Sdadow Blog | Home</title>
      </Head>
      <Banner
        title1="welcome to shadow blog"
        title2="discover all categories"
        description=" Note: All of these topics are from the Internet from trusted sites, and there is an idea for the site.
        "
        image={imageBanner}
      />
      <Categories categories={categories} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const categories = (await getCategories()) || [];
  return {
    props: { categories },
  };
}
