import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "./image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  border-bottom: 3px solid ${({ theme }) => theme.palette.divider};
  border-left: 3px solid ${({ theme }) => theme.palette.divider};
  background: ${({ theme }) => theme.palette.background};
  margin-bottom: 50px;
  transition: transform 0.3s, border-top 0.1s, border-right 0.3s,
    box-shadow 0.1s;
  transition-timing-function: ease-in;
  box-shadow: -5px 5px 5px 0px ${({ theme }) => theme.palette.darkPrimary};
  font-family: ${({ theme }) => theme.fonts.text};

  &:hover {
    transform: scale(1.05);
    border: 0;
    border-top: 3px solid ${({ theme }) => theme.palette.divider};
    border-right: 3px solid ${({ theme }) => theme.palette.divider};
    background: ${({ theme }) => theme.palette.darkPrimary};
    box-shadow: 5px -5px 5px 0px ${({ theme }) => theme.palette.divider};
    cursor: pointer;
  }

  &&&:hover > div:nth-child(2) {
    color: ${({ theme }) => theme.palette.background};
    border-left: 12px solid ${({ theme }) => theme.palette.background};
  }

  @media (max-width: 982px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;

    &&&:hover > div:nth-child(2) {
      border: 0;
      border-top: 12px solid ${({ theme }) => theme.palette.background};
    }
  }
`;

const TextWrapper = styled.div`
  padding-left: 25px;
  margin: 5px 10px 35px 30px;
  border-left: 10px solid ${({ theme }) => theme.palette.accent};
  color: ${({ theme }) => theme.palette.accent};

  @media (max-width: 982px) {
    margin: 30px 0 0 0;
    padding: 0;
    border: 0;
    border-top: 5px solid ${({ theme }) => theme.palette.accent};
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title}, cursive;
  font-size: 2.2rem;
  margin-top: 0;
`;

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[slug]">
      <a>
        <Wrapper>
          <div>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image image={article.image} maxWidth="500px" borderRadius="10px" />
          </div>
          <TextWrapper>
            <Title>{article.title}</Title>
            <p>#{article.category.name}</p>
            <p>{article.description}</p>
          </TextWrapper>
        </Wrapper>
      </a>
    </Link>
  );
};

export default Card;
