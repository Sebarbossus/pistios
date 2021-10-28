import Head from "next/head";
import Layout from "../components/Layout";
import Main from "../components/Main";
import styled from "styled-components";

const Content = styled.div`
  text-align: center;
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

export default function Contact() {
  return (
    <>
      <Head>
        <title>Pistios contact</title>
        <meta name="description" content="Pistios contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Main headline="Contact" />
        <Content>
          <p>
            You can contact us by sending an e-mail to{" "}
            <a href="mailto:rafaelamoning@gmail.com">rafaelamoning@gmail.com</a>
          </p>
          <p>
            Impressum: Nicolás and Rafaela Álvarez-Moning. Von-Humboldt-Straße
            2, 42549 Velbert (Germany)
          </p>
        </Content>
      </Layout>
    </>
  );
}
