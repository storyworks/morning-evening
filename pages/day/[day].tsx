import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/layout";
import { getAllDevoIds, getDevo } from "../api/data";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDevoIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daily = getDevo(+params.day);
  return { props: { daily } };
};

export default function Devo({ daily }) {
  // console.log(daily);
  const hour = new Date().getHours();
  const [devo, setDevo] = useState(daily.devo[hour <= 14 ? 0 : 1]);

  return (
    <Layout>
      <Head>
        <title>{`Day ${daily.day}`}</title>
      </Head>
      {devo.time}
      <p>{devo.keyVerse}</p>
      <p>{devo.verseRef}</p>
      <p>{devo.body}</p>
    </Layout>
  );
}
