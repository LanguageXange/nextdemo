import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Layout from "./components/layout";
import Alert from "./components/alert";
const Test = () => {
  return (
    <Layout>
      <Head>
        <title>Testing Page</title>
      </Head>
      this is test page! woohoo
      <Alert type="success"> alert Success</Alert>
      <Alert type="error"> alert Error</Alert>
      <h1>
        <Link href="/"> Home client side navigation</Link>
      </h1>
      <h2>
        if you want to add attribute add it to the anchor link rather than link
        component
      </h2>
      <Link href="/">
        <a className={styles.foo} target="_blank" rel="noopener noreferrer">
          styled link this works
        </a>
      </Link>
      <Link href="/" className={styles.foo}>
        styled link2 this won't
      </Link>
    </Layout>
  );
};

export default Test;
