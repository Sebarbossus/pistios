import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

export default function Community() {
  return (
    <>
      <Head>
        <title>Pistios community</title>
        <meta name="description" content="Pistios community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Main headline="Community" />
    </>
  );
}
