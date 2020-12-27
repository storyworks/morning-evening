import Head from "next/head";
import { useState, useEffect } from "react";
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import Link from "next/link";


import Layout from "../../components/layout";
import { getAllDevoIds, getDevo } from "../api/data";
import { GetStaticProps, GetStaticPaths } from "next";
import Toggle from "@components/DarkMode/Toggle";
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
  const date = new Date().toString();
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
     <Layout>
        <div style={{ margin: "0rem 1rem" }}>
      
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
      </div>
        
        <div className={styles.footer}>
          <Link href="/">
            <a>← Back to home</a>
        </Link>
        <Toggle
        check={isEvening}
          onClick={(value) => {
            setEvening(value.checked)
            window.scrollTo(0, 0);
          }}
      />
      </div>
      
      </Layout>
  );
}
