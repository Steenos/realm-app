import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { useConnection } from "@solana/wallet-adapter-react";
//import { walletToParsePublicKey} from "views/HomeView";
import { HomeView } from "views";
import Unity, { UnityContext } from "react-unity-webgl";
import {BsDiscord, BsTwitter} from "react-icons/bs"
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


  
  

export const GalleryView: FC = ({}) => {
  
  const { connection } = useConnection();

  const router = useRouter()
  const {
    query : {myValue},
  } = router
  
  // const { connection } = useConnection();
  //const [walletToParsePublicKey, setWalletToParsePublicKey] =
    //useState<string>(walletPublicKey);
    //useState<String>(publicKey);

  /* const [walletToParsePublicKey, setWalletToParsePublicKey] =
  useState<string>(walletPublicKey); */
   

  //const { walletToParsePublicKey } = useWallet();
    console.log("wallet address: ", router.query);
   const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: router.query.walletToParsePublicKey, connection
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
        
        {/* <div className="navbar mb-2 shadow-lg bg-neutral bg-black text-white text-neutral-content rounded-box">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl"></span>
            </button>
          </div>
          <div className="flex-1 px-2 mx-2 ">
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
          
          </div>
          
        </div> */}
        <div className="fixed  top-0  bg-black bg-opacity-70 backdrop-blur-lg  w-full h-16">
    <nav className="h-16">
 
  <div className="flex flex-row justify-center md:justify-between max-w-screen-xl px-20 h-16 container mx-auto items-center">
  <div className="text-4xl  items-center">
  <a href="/#" className="flex  flex-row">
  <img src={"/trans-glow-logo.png"} alt="logo" className="hidden w-16 cursor-pointer"/>
    
      <span className="font-extrabold whitespace-nowrap text-white ">Art Realms</span>
  </a>
  </div>
 
  <div className=" flex w-full md:flex md:w-auto md:order-1 justify-end" id="mobile-menu-4">
    <ul className="flex flex-row items-center justify-center space-x-4 text-3xl md:flex-row md:space-x-8 md:mt-0 md:text-xlg md:font-medium">
      <li>
        <a href="https://discord.gg/a3u8yJdw" className="text-white hover:text-purple-400 text-2xl md:text-5xl"><BsDiscord/></a>
      </li>
      <li>
        <a href="https://twitter.com/_realms_" className="text-white hover:text-blue-500 text-2xl md:text-5xl"><BsTwitter/></a>
      </li>
      <li>
        <div className="hidden flex-none">
            <WalletMultiButton className="btn btn-ghost" />
        </div>
      </li>
      
    </ul>
    </div>
  </div>
  </nav>
  </div>

       
        <div className="flex-1 min-h-screen py-16 px-6  bg-black">
          

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
       <div className="hidden">
        {setTimeout(() => {
      {sendNFTData()}
    }, 1000)}    
          </div>   
            
           
      </div>
      
       
    </div>
     
  );

 
};
