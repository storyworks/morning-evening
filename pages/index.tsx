import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { Layout } from "@components/index";
import Sun from "@components/Animate/Sun"
import { getAllDevoIds } from "./api/data";
import utilStyles from "@styles/utils.module.scss";
import styles from "./home.module.scss"

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
      <section>
        <h1 className={styles.coverTitle}>Morning & Evening</h1>
        {/* <h2 className={styles.coverSubtitle}>Devotional</h2> */}
      </section>
        <Sun size={200} stroke={utilStyles.yellow} />
      <section>
        <h2 className={styles.coverSubtitle}>Charles Spurgeon</h2>
        <p className={styles.coverStart}>
        <Link href={`/day/${dayOfYear}`}>
          Start
        </Link>
        </p>
      </section>
    </Layout>
  );
}
