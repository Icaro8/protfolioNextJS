import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import styles from "../styles/Home.module.scss";
import { toast } from "react-toastify";

const Home: NextPage = () => {
  const [count, setCount] = useState<number>(1);
  const images: string[] = [
    "./assets/coding1.jpeg",
    "./assets/coding2.jpeg",
    "./assets/coding3.jpeg",
    "./assets/programing.png",
  ];
  function incrementCount() {
    if (count < 4) {
      setCount(count + 1);
    }
  }
  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  useEffect(() => {
    toast.success("hello 🥰");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Header />
      </div>
      <div className={styles.containerimage}>
        <div className={styles.containerButton}>
          <button onClick={incrementCount} className={styles.incr}>
            <AiOutlineArrowUp />
          </button>
          <p>{count}</p>
          <button onClick={decrementCount} className={styles.decr}>
            <AiOutlineArrowDown />
          </button>
        </div>
        <div className={styles.containerCotent}>
          <img
            src={
              count === 1
                ? images[0]
                : count === 2
                ? images[1]
                : count === 3
                ? images[2]
                : count === 4
                ? images[3]
                : ""
            }
            alt="programing"
            width={500}
            height={400}
          />
          <div className={styles.text}>
            <div>
              <h3>Hello I am</h3>
              <h1>Icaro Vieira</h1>
              <strong>Front-End developer</strong>
            </div>
            <button>Hire me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
/*
     
*/
