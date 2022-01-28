import Link from "next/link";
import { FC, useState } from "react";
//import {Link} from 'react-router';
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection } from "@solana/wallet-adapter-react";
import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { Loader, SolanaLogo, SelectAndConnectWalletButton } from "components";

//import { SolanaLogo } from "components";

import styles from "./index.module.css";





export const HomeView: FC = ({}) => {

  const { connection } = useConnection();
  const walletPublicKey = "";
  

  //const onClick = () => {};
   const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey); 
  
  //const { walletPublicKey } = useWallet();


  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: walletToParsePublicKey, connection
    // connection,
  }); 

  //console.log("nfts", nfts);

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    
    setWalletToParsePublicKey(value.trim());
    //console.log(walletToParsePublicKey);
  };

  /* const onUseWalletClick = () => {
    if (publicKey) {
      setWalletToParsePublicKey(publicKey?.toBase58());
    }
  };  */

  return (
    
    
    //<div className="container mx-auto max-w-6xl p-8 2xl:px-0">
    <div className={styles.container}>
       {/*  <header className="fixed flex w-full justify-between items-center"> */}
     {/*  <nav className="px-2 sm:px-4 py-2.5 rounded "> */}
  <div className="py-16 h-full">
  <nav className="fixed p-5 top-0 flex w-full flex-wrap justify-between items-center mx-auto right-0 left-0
  bg-white  bg-transparent backdrop-filter backdrop-blur-lg">
  <a href="#" className="flex">
  <img src={"/trans-glow-logo.png"} alt="logo" className="w-16 cursor-pointer"/>
    
      <span className="self-center text-5xl font-bold whitespace-nowrap dark:text-white ">Art Realms</span>
  </a>
  {/* <div className="flex md:order-2">
      <button type="button" className=" hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div> */}
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
    <ul className="hidden flex flex-col text-3xl mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xlg md:font-medium">
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Mission</a>
      </li>
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Roadmap</a>
      </li>
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
      </li>
    </ul>
  </div>
  </nav>
  </div>
{/* </nav> */}
{/* </header> */}
        {/* <nav className="w-full flex md:justify-center justify-between items-center p-4">
          <div className="md:flex-[0.5] flex-initial justify-center items-center ">
            <img src={"/trans-glow-logo.png"} alt="logo" className="w-32 cursor-pointer"/>
            <h1>Art Realms</h1>
          </div>
          <div className="flex-1 px-2 mx-2">
          
          </div>
        </nav> */}
       {/*  <div className="hero min-h-fit bg-base-200">
        
          <div className="flex-col hero-content lg:flex-row-reverse">
            <img src="/hero-img.png" className="max-w-lg rounded-lg shadow-2xl"/> 
              <div>
          <h1 className="mb-5 text-5xl font-bold">
          Jump into a 3D gallery to view your <SolanaLogo/> NFTs.
          </h1> 
      <p className="mb-5">
            Just connect your wallet 
          </p> 
      <button className="btn btn-primary">Login to the Metaverse!</button>
            </div>
          </div>
        </div> */}

        <div className="flex w-full py-8">
          <div className="flex md:flex-row flex-col">
          <div className="flex-auto flex-row space-x-8 px-8"><img src="/isoview5.png" className="w-full"/></div>
            <div className="flex flex-auto flex-col md:mr-10">
              <h1 className = "text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-400">Make your Own NFT Gallery</h1>
              <p className="text-white">Create high-quality 3D exhibitions of your NFTs and share it with your friends. Getting started is as easy as searching your Solana wallet address.</p>
              <div className="form-control mt-8">
                      <label className="input-group input-group-vertical input-group-lg">
                      
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            placeholder="Enter a Solana Wallet Address.."
                            className="w-full input text-gray-400 rounded-none input-lg bg-gray-800 bg-opacity-40"
                            value={walletToParsePublicKey}
                            onChange={onChange}
                            style={{
                              
                            }}
                          />

                          
                        </div>
                        {!error ? <button className="btn glass"><Link href={{
        pathname: "/gallery",
        query: {walletToParsePublicKey},
      }}>
                  <a className="text-lg font-bold hover:underline">
                    Enter Gallery
                  </a>
                </Link></button>: <button className="btn btn-ghost">
                  <a className="text-lg text-gray-500 font-bold hover:underline">
                    Enter the Metaverse
                  </a></button>}
                      </label>
                    </div>
            </div>
           
          </div>
        </div>



  

       <footer className="p-10 h-fit footer bg-neutral justify-left text-neutral-content text-gray-200">
  <div>
    
    <p>Built by @0xSteen and @crazysetting
      
    </p>
    <p>twitter.com/_realms_</p>
  </div> 
  
</footer> 

      </div>
    
    
  );
};



