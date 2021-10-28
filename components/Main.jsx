import styled from "styled-components";

const MainContent = styled.div`
  text-align: center;
  justify-content: center;
  padding: 20px 0;
  margin: 0 40px;

  @media (max-width: 768px) {
    margin: 0 20px;
  }
`;

const Headline = styled.h1`
  display: inline-block;
  padding-top: 7px;
  padding-bottom: 7px;
  font-family: ${({ theme }) => theme.fonts.title}, cursive;
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.accent};
  border-bottom: 10px solid ${({ theme }) => theme.palette.darkPrimary};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const TextContent = styled.p`
  max-width: 800px;
  margin-top: 20px;
  font-size: 1.5rem;
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.text}, sans-serif;
`;

const Main = ({ headline, text }) => {
  return (
    <MainContent>
      <Headline>{headline}</Headline>
      <Content>
        <TextContent>{text}</TextContent>
      </Content>
    </MainContent>
  );
};

export default Main;
