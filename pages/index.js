import { fetchAPI } from "../lib/api";
import Main from "../components/Main";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const Home = ({ categories, homepage }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Layout categories={categories}>
        <Main
          headline="Homepage"
          text="Hello and welcome to Pistios! Pistios is a blog that was built with the goal to share some thoughts on life, explore faith and share it with others in case they are interested. Feel free to check out the articles and comment if you have any questions. Enjoy your stay here!"
        />
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
