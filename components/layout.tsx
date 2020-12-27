import Head from "next/head";
import Link from "next/link";
import Toggle from "@components/DarkMode/Toggle";

import styles from "./layout.module.scss";
import utilStyles from "@styles/utils.module.css";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

const Layout = ({ home = false, children, isDark = false, setDark = undefined}) => {
  return (
    <div className={`${isDark ? styles.containerDark : styles.container}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,300;0,400;1,300;1,400&family=Lora:ital,wght@0,500;1,500&display=swap" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        {/* {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )} */}
      </header>
      <main>{children}</main>
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
