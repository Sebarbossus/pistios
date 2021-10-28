import Head from "next/head";
import Navbar from "../components/navbar";
import Main from "../components/main";

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
