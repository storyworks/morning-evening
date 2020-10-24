import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "@components/layout";
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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Morning & Evening</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Devotional</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key={0}>
            <Link href={`/day/1`}>
              <a>Start</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
