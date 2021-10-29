import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { getStrapiMedia } from "../../lib/media";
import Link from "next/link";
import styled from "styled-components";

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    background: url(${({ article }) => getStrapiMedia(article.image)});
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.15;
  }
`;

const Title = styled.h1`
  position: relative;
  color: ${({ theme }) => theme.palette.darkPrimary};
  font-size: 2.5rem;
  line-height: 0.9;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title};
`;

const Content = styled.div`
  text-align: justify;
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.text};
  margin: 10px 50px;

  @media (max-width: 982px) {
    margin: 10px 30px;
  }

  @media (max-width: 768px) {
    margin: 10px 15px;
  }
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.palette.darkPrimary};
`;

const TitleLink = styled.a`
  color: ${({ theme }) => theme.palette.darkPrimary};
`;

const Article = ({ article, categories }) => {
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <Banner article={article}>
        <Title>{article.title}</Title>
      </Banner>
      <Content>
        <ReactMarkdown>{article.content}</ReactMarkdown>
        <p>
          If you liked this article, check out our other articles{" "}
          <Link href="/blog" passHref>
            <TitleLink>here</TitleLink>
          </Link>
        </p>
        <hr />
        <div>
          <p>
            Written by {article.author.name} under{" "}
            <Tag>#{article.category.name}</Tag>
          </p>
          <p>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </p>
        </div>
      </Content>
      {/* TODO: Add comments with Isso */}
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
