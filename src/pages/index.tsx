import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  getStaticPropsMsg: string;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      getStaticPropsMsg: 'Hello "getStaticProps"',
    },
  };
};

const Home: NextPage<Props> = (props) => {
  const [msg] = useState('Hello "useState"');
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("increment");
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>{props.getStaticPropsMsg}</div>
      <div>{msg}</div>
      <button
        onClick={() => {
          increment();
        }}
      >
        increment
      </button>
      <h1>{count}</h1>
    </>
  );
};

export default Home;
