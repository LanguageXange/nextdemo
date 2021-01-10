import Head from "next/head";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "./components/layout";
import { getSortedPostsData } from "../lib/blogpost";
import Date from "./components/dates";
export default function Home({ postData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className={styles.main}>
        <Link href="/about" className={styles.title}>
          About
        </Link>
        <a href="http://localhost:3000/about">browser refresh</a>
      </main>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postData.map(({ id, date, title }) => (
            <Link href={`http://localhost:3000/posts/${id}`} key={id}>
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const postData = getSortedPostsData();
  return {
    props: { postData },
  };
}
