import { fetchAPI } from "../lib/api";
import Main from "../components/Main";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Home = ({ categories, homepage }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Layout categories={categories}>
        <Main headline="Homepage" />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
