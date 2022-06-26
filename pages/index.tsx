import type { NextPage } from "next";
import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Code } from "../components/Code";
import styles from "../styles/Home.module.css";

const Colors = {
  primary: "#3592ff",
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Griinem</title>
        <meta
          name="description"
          content="We are a software development and technical challenges taking team"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I am <Text color={Colors.primary}>Andrew Nguyen</Text>
        </h1>

        <p className={styles.description}>
          Contact me at <Code>andrew@griinem.com</Code>
        </p>
      </main>
    </div>
  );
};

export default Home;

const Text: FC<PropsWithChildren<{ color: string }>> = ({
  color,
  children,
}) => {
  return <span style={{ color }}>{children}</span>;
};
