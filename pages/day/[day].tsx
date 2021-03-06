import Head from "next/head";
import { useState, useEffect } from "react";
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

import Layout from "@components/Layout/layout";
import { getAllDevoIds, getDevo } from "../api/data";
import { GetStaticProps, GetStaticPaths } from "next";
import styles from "./day.module.scss";


declare const window: any;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDevoIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daily = getDevo(+params.day);
  return { props: { daily } };
};

export default function Devo({ daily }) {
  const hour = new Date().getHours();
  const [isEvening, setEvening] = useState(hour >= 15)
  const [devo, setDevo] = useState(daily.devo.content[isEvening ? 1 : 0]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    setDevo(daily.devo.content[isEvening ? 1 : 0])
  }, [isEvening])

  return (
     <Layout isDark={isEvening} setDark={setEvening}>      
        <Head>
          <title>{`Day ${daily.day}`}</title>
        </Head>
        {/* <span className={styles.date}>Day {daily.day}</span> */}
        <div className={styles.passage}>
        <p className={styles.verse}>{devo.keyVerse}</p>
        <span className={styles.verseRef}>{devo.verseRef}</span>
        </div>
        <div className={styles.content}>
          {unified()
              .use(parse)
              .use(remark2react)
              .processSync(devo.body).result
            }
        </div>
      </Layout>
  );
}
