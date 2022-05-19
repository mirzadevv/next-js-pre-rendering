import Head from "next/head";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.indexContainer}>
      <Head>
        <title>Next Js </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Index Page</h1>
    </div>
  );
}
