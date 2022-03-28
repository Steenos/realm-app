
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";

//import Unity, { UnityContext } from "react-unity-webgl";

import "tailwindcss/tailwind.css";

import "../styles/globals.css";
import "../styles/App.css";


//const SOLANA_NETWORK = WalletAdapterNetwork.Mainnet;
//const SOLANA_NETWORK = WalletAdapterNetwork.Devnet;
//const network = SOLANA_NETWORK;

// set custom RPC server endpoint for the final website

//const endpoint = "https://explorer-api.devnet.solana.com";
const endpoint = "https://solana-api.projectserum.com";

const WalletProvider = dynamic(
  () => import("../contexts/ClientWalletProvider"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  //const endpoint = useMemo(() => clusterApiUrl(rpc), []);
  //const endpoint = "https://ssc-dao.genesysgo.net/";

  return (
    <div className="min-h-screen">
      <div className="bg-black h-full">
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider>
            <Component {...pageProps} />
          </WalletProvider>
        </ConnectionProvider>
      
      </div>
    
    </div>
  );
}

export default MyApp;
