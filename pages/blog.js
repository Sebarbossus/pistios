import { fetchAPI } from "../lib/api";
import Main from "../components/main";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Blog({ articles, categories, blog }) {
  return (
    <>
      <Seo seo={blog.seo} />
      <Layout categories={categories}>
        <Main headline="Our Blog" />
        <Articles articles={articles} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, blog] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, blog },
    revalidate: 1,
  };
}
