import { fetchAPI } from "../lib/api";
import Main from "../components/Main";
import Articles from "../components/Articles";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

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
    fetchAPI("/articles?_sort=published_at:DESC"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, blog },
    revalidate: 1,
  };
}
