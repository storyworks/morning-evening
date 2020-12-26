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
    <div style={{ background: "#fff" }}>
      <Toggle
        check={isEvening}
        onClick={(value) => setEvening(value.checked)}
      />
      <Layout>
        <Head>
          <title>{`Day ${daily.day}`}</title>
        </Head>

        <p>{devo.keyVerse}</p>
        <p>{devo.verseRef}</p>
        <p>{devo.body}</p>
      </Layout>
    </div>
  );
}
