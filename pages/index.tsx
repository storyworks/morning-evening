import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "@components/index";
import Sun from "@components/Animate/Sun"
import { getAllDevoIds } from "./api/data";
import utilStyles from "@styles/utils.module.scss";

export const getStaticProps: GetStaticProps = async () => {
  const devotionals = getAllDevoIds();
  return {
    props: {
      devotionals,
    },
  };
};

export default function Home() {
  const date: any = new Date();
  const startOfYear: any = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.round((date - startOfYear) / (1000 * 60 * 60 * 24)+1);

  return (
    <Layout home>
      <Head>
        <title>Morning & Evening</title>
      </Head>
      <h1 className={utilStyles.headingMega}>Morning & Evening</h1>
      <Sun size={80} stroke={utilStyles.yellow}/>
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
