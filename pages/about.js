import Link from "next/link";
import styles from "../styles/Home.module.css";
const About = ({ users }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/" className={styles.title}>
          Home
        </Link>
        <Link href="/test">Test Link</Link>
        <h2>this is about page</h2>

        <h2>Users Name:</h2>
        {users.map((user) => {
          return <li key={user.id}> {user.name}</li>;
        })}
      </main>
    </div>
  );
};

// fetching data from json placeholder with getStaticProps
// what's the difference between getStaticProps and getServerSideProps

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}

// errror  DO NOT WRITE THE FOLLOWING below is WRONG below is outdated
// getStaticProps can not be attached to a page's component and must be exported from the page.
// About.getStaticProps = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   return {
//     props: {
//       users,
//     },
//   };
// };

export default About;
