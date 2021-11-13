import React from "react";
import Card from "./Card";
import styled from "styled-components";

const ArticleWrapper = styled.div`
  max-width: 100vw;
  margin: 0 200px;

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

const ArticleColumn = styled.div``;
const ArticlesLeft = styled(ArticleColumn)``;

const ArticlesRight = styled(ArticleColumn)``;

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <ArticleWrapper>
      <ArticlesLeft>
        {leftArticles.map((article, i) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          );
        })}
      </ArticlesLeft>
      <ArticlesRight>
        {rightArticles.map((article, i) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          );
        })}
      </ArticlesRight>
    </ArticleWrapper>
  );
};

export default Articles;
