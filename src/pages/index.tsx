import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Realms</title>
        <meta
          name="description"
          content="3D Metaverse Gallery for your NFTS"
        />
      </Head>
      
      <HomeView />
    </div>
  );
};

export default Home;
