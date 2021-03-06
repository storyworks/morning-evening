import Head from "next/head";
import Link from "next/link";
import Toggle from "@components/DarkMode/Toggle";

import styles from "./Layout.module.scss";

export const siteTitle = "Morning & Evening Devotional";

const Layout = ({ home = false, children, isDark = false, setDark = undefined }) => {

  return (
    <div className={`${home ? styles.containerHome : isDark ? styles.containerNight : styles.containerDay}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Morning & Evening ESV Devotional"
          content="Charles Spurgeon Morning and Evening Devotional, edited by Alistair Begg. Crossway ESV."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,300;0,400;1,300;1,400&family=Lora:ital,wght@0,500;1,500&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>{children}</main>
      {!home && 
        <div className={styles.footer}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
          <Toggle
          check={isDark}
          onClick={(value) => {
            setDark(value.checked)
            window.scrollTo(0, 0);
          }}
          />
      </div>
      }
    </div>
  );
}

export default Layout;
