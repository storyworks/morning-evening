import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { getAllDevoIds, getDevo } from "../api/data";
import { GetStaticProps, GetStaticPaths } from "next";

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
  const [devo, setDevo] = useState(daily.devo[hour <= 14 ? 0 : 1]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return (
    <div style={{ background: "lightpink" }}>
      <svg
        viewBox="0 0 40 10"
        height={width / 4}
        width={width}
        style={{ background: "white" }}
      >
        <path
          d="M 0 0 C 2 1 3 5 4 6 C 6 8 7 6 10 8 C 13 10 16 8 19 7 C 23 6 23 8 28 6 C 33 4 35 4 40 6 L 40 10 L 0 10 L 0 0"
          fill="lightpink"
        />
      </svg>
      <Layout>
        <Head>
          <title>{`Day ${daily.day}`}</title>
        </Head>

        {devo.time}
        <p>{devo.keyVerse}</p>
        <p>{devo.verseRef}</p>
        <p>{devo.body}</p>
      </Layout>
    </div>
  );
}
