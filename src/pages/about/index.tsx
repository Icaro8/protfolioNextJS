import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../../components/Header";

import styles from "./styles.module.scss";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default About;
