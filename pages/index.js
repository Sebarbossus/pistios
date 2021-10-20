import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pistios</title>
        <meta name="description" content="Pistios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </>
  );
}
