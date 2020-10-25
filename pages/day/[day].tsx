import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { getAllDevoIds, getDevo } from "../api/data";
import { GetStaticProps, GetStaticPaths } from "next";
import Toggle from "@components/Toggle";

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
    <div style={{ background: "#8a9ebf" }}>
      <svg
        viewBox="0 0 40 16"
        height={width / 2.5}
        width={width}
        style={{ background: "white" }}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{
                stopColor: "#347993",
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#6aabcc", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{
                stopColor: "#425691",
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#8a9ebf", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M 0 0 C 2 1 3 5 4 6 C 6 8 7 6 10 8 C 13 11 14 11 16 11 C 20 11 22 9 27 9 C 33 9 31 5 40 4 L 40 15 L 0 15 L 0 0"
          fill="url(#grad1)"
        />
        <path
          d="M 0 6 C 3 8 3 10 6 11 C 10 12 12 9 17 9 C 21 9 23 11 26 11 C 34 11 33 7 40 7 L 40 16 L 0 16 L 0 6"
          fill="url(#grad2)"
        />
      </svg>
      <Layout>
        <Head>
          <title>{`Day ${daily.day}`}</title>
        </Head>
        <Toggle
          check={devo.time === "pm"}
          onClick={(value) => setDevo(daily.devo[value.checked ? 1 : 0])}
        />
        <p>{devo.keyVerse}</p>
        <p>{devo.verseRef}</p>
        <p>{devo.body}</p>
      </Layout>
    </div>
  );
}
