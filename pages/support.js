import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

export default function Support() {
  return (
    <>
      <Head>
        <title>Support Pistios</title>
        <meta name="description" content="Support Pistios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Main headline="Support us" />
    </>
  );
}
