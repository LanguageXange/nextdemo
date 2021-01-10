import Layout from "../components/layout";
import { getAllPostIds, getPostData } from "../../lib/blogpost";
import Head from "next/head";
import Date from "../components/dates";
import utilStyle from "../../styles/utils.module.css";
export default function Post({ postData }) {
  // postData is an object return from the function getPostData which takes an id

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyle.headingX1}>testing dynamic route</h1>
      post id: {postData.id}
      <br />
      post Title: {postData.title}
      <br />
      post Date: <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.htmlContent }}></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
