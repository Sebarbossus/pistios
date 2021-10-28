import Head from "next/head";
import Navbar from "../components/navbar";
import Main from "../components/main";

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
