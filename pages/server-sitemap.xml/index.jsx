import { GetServerSideProps } from "next";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const fields = [];

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
