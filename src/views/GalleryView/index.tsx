import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
//import { walletToParsePublicKey} from "views/HomeView";
import { HomeView } from "views";
import Unity, { UnityContext } from "react-unity-webgl";
//import useSWR from "swr";
import { fetcher } from "utils/fetcher";
//import { UnityEvent } from "react-unity-webgl";
// import { useConnection } from "@solana/wallet-adapter-react";

//import {walletPublicKey} from "views/HomeView";

import { Loader, SolanaLogo, SelectAndConnectWalletButton } from "components";
//import { NftCard } from "./NftCard";
import styles from "./index.module.css";
import { publicKey} from "@project-serum/anchor/dist/cjs/utils";
//const walletPublicKey = publicKey;


import { useRouter } from "next/router";


const unityContext = new UnityContext({
  loaderUrl: "buildUnity/myunityapp.loader.js",
  dataUrl: "buildUnity/myunityapp.data",
  frameworkUrl: "buildUnity/myunityapp.framework.js",
  codeUrl: "buildUnity/myunityapp.wasm",
});

//const walletPublicKey = "";
const router = useRouter()
  const {
    query : {myValue},
  } = router

export const GalleryView: FC = ({}) => {

  
  // const { connection } = useConnection();
  //const [walletToParsePublicKey, setWalletToParsePublicKey] =
    //useState<string>(walletPublicKey);
    //useState<String>(publicKey);

  /* const [walletToParsePublicKey, setWalletToParsePublicKey] =
  useState<string>(walletPublicKey); */
   

  //const { walletToParsePublicKey } = useWallet();
    console.log("wallet address: ", router.query);
   const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: router.query.walletToParsePublicKey
  }); 

  //console.log("nfts", nfts);

/*     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWalletToParsePublicKey(value.trim());
  }; */

/*   const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };   */

  

  /* const onBtnClick = () => {
    //e.preventDefault()
    unityContext.send(
      "nftInputObject",
      "ReactToUnityMethod",
      JSON.stringify({
        "foo": "bar",
      }),
    )
  } */

  //const [isLoaded, setIsLoaded] = useState(false);

  
  //Button to send NFT uri to Unity
  const sendNFTData=()=> {
    
    for (var x in nfts){
      var myUri = nfts[x].data.uri;
    
    //console.log("myUri: ",myUri);
    
    //sends uri data to populate list in Unity
    unityContext.send("NftCanvasObject", "addNftToList", myUri);
    
    }
    
    //call loadNFTS function in unity
    unityContext.send("NftCanvasObject", "loadNfts");
    
    
  };
  
  

  

  /* useEffect(function () {
    unityContext.on("loaded", function () {
      
      setIsLoaded(true);
      console.log("loaded!");
      
      
      
      
    });
  }, []); */
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(function () {
    unityContext.on("loaded", function () {
      setIsLoaded(true);
      console.log("loaded = true");
    });
  }, []);
  
  
  
  return (
    
    
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl"><img src="/newlogo.png"/></span>
            </button>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="text-sm breadcrumbs">
              <ul className="text-xl">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <span className="opacity-40">NFT Gallery</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
           {/*  <WalletMultiButton className="btn btn-ghost" /> */}
          </div>
          
        </div>

       
        <div className="flex-1 px-6 mx-2">
          

           {publicKey ? <Unity style={{ visibility: isLoaded ? "visible" : "hidden" , width:"100%",height:"100%"}}
                unityContext={unityContext} matchWebGLToCanvasSize={true} 
                
                
          /> : <div className="alert">
          <div className="flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
            </svg> 
            <label>Please login to your wallet to view your NFT gallery!</label>
          </div>
        </div>} 
          
        {setTimeout(() => {
      {sendNFTData()}
    }, 1000)}    
          
            
           
      </div>
       
    </div>
     
  );

 
};
