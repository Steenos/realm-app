import type { NextPage } from "next";
import Head from "next/head";
import { LoginView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Login to your wallet</title>
        <meta name="description" content="This site will fly high 🦤" />
      </Head>
      <LoginView/>
    </div>
  );
};

export default Home;
