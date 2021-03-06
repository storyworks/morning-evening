import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import {Layout, siteTitle } from "@components/index";
import Sun from "@components/Animate/Sun"
import { getAllDevoIds } from "./api/data";
import utilStyles from "@styles/utils.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const devotionals = getAllDevoIds();
  return {
    props: {
      devotionals,
    },
  };
};

export default function Home({ devotionals }) {
  const date: any = new Date();
  const startOfYear: any = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.round((date - startOfYear) / (1000 * 60 * 60 * 24)+1);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Morning & Evening</h1>
      </section>
      <Sun className={utilStyles.sun} size={80} stroke={"#e5d895" }/>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Devotional</h2>
        <p className={utilStyles.headingMd}>
        <Link href={`/day/${dayOfYear}`}>
          Start
        </Link>
        </p>
      </section>
    </Layout>
  );
}
