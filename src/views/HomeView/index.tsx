import Link from "next/link";
import { FC, useState } from "react";
//import {Link} from 'react-router';
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection } from "@solana/wallet-adapter-react";
import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { Loader, SolanaLogo, SelectAndConnectWalletButton } from "components";
import {BsDiscord, BsTwitter} from "react-icons/bs"
import Script from 'next/script'
import Image from 'next/image'
import { fetcher } from "utils/fetcher";

//import { SolanaLogo } from "components";

import styles from "./index.module.css";



const walletPublicKey = "";

export const HomeView: FC = ({}) => {

  const { connection } = useConnection();
  
   const [walletToParsePublicKey, setWalletToParsePublicKey] =
    useState<string>(walletPublicKey); 
  
  //const { publicKey } = useWallet();


  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: walletToParsePublicKey, 
    connection,
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
    
    <div className="fixed  top-0  bg-black bg-opacity-70 backdrop-blur-lg  w-full h-16">
    <nav className="h-16">
 
  <div className="flex flex-row justify-center md:justify-between max-w-screen-xl px-20 h-16 container mx-auto items-center">
  <div className="text-4xl  items-center">
  <a href="#" className="flex  flex-row">
  <img src={"/trans-glow-logo.png"} alt="logo" className="hidden w-16 cursor-pointer"/>
    
      <span className="  font-extrabold whitespace-nowrap text-white ">Art Realms</span>
  </a>
  </div>
 
  <div className=" flex w-full md:flex md:w-auto md:order-1 justify-end" id="mobile-menu-4">
    <ul className="flex flex-row items-center justify-center space-x-4 text-3xl md:flex-row md:space-x-8 md:mt-0 md:text-xlg md:font-medium">
      <li>
        <a href="https://discord.gg/a3u8yJdw" className="text-white hover:text-purple-400 text-2xl md:text-5xl"><BsDiscord/></a>
      </li>
      <li>
        <a href="https://twitter.com/art_realms" className="text-white hover:text-blue-500 text-2xl md:text-5xl"><BsTwitter/></a>
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
 
  


        <div className="bg-black py-16  lg:px-16 px-10 ">
          <div className="md:grid md:grid-cols-2 ">
            
            <div className=" flex justify-center md:order-last ">
             
              <iframe loading="lazy" src='https://my.spline.design/untitled-539f7e39fb49baf014476c8ebcf16f56/' className="lg:h-[600px] lg:w-[500px] h-[400px] w-[300px]" ></iframe> 
             
                {/*  <div className="flex-auto flex-row space-x-8 px-8"><img src="/isoview5.png" className="w-full"/></div> */}
            </div>
            <div className="md:flex md:flex-col md:space-y-4 text-center md:p-6">
              <h1 className = "text-5xl md:text-5xl lg:text-7xl xl:text-8xl sm:text-6xl mt-6 ml-6 sm:text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">Your Space in the Metaverse</h1>
              <p className="text-base md:text-base lg:text-xl md:text-left ml-6 font-extralight text-white">Create high-quality 3D exhibitions of your NFTs and share them with your friends. Getting started is as easy as searching your Solana wallet address.</p>
              <a href="#demo" className=" md:bg-black md:border md:border-white md:hover:bg-white md:hover:text-black md:ml-6 md:text-white md:items-center md:font-bold md:py-2 md:px-4 md:rounded-full md:w-32">Try Demo</a>
            </div>
          </div>
          
        </div>

        <section className="bg-black">
          <div className="container mx-auto">
            <img loading='lazy' src="/Realms2-1.png"></img>

          </div>


        </section>
        <section  id='demo'>
        <div className="bg-black p-10 text-center">
          <h1 className="text-5xl md:text-5xl md:ml-6 lg:text-7xl xl:text-8xl sm:text-6xl mt-6 ml-6 sm:text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">Turn your Wallet into an Art Gallery</h1>
          <p className="text-base md:text-base md:ml-6 lg:text-xl md:text-left ml-6 font-extralight text-white">Experience Art Realms by turning any Solana NFT wallet into a gallery. This is our first realm, and is free for anyone to use. Your wallet address is public and allows us to display your NFTs but doesn't give us access to your wallet.</p>
          <div>
            <form action="" className="md:w-1/2 mx-auto">
              <div className="">
                <label htmlFor="">wallet address
                <input type="text"
                        placeholder="Enter a public wallet adress..."
                        className="w-full md:w-full p-2  input text-gray-400 rounded-lg border border-gray-300 input-lg bg-gray-800 bg-opacity-40"
                        value={walletToParsePublicKey}
                        onChange={onChange}
                        style={{ }}
                  />

{!error ? <button className="bg-black text-white font-bold "><Link href={{
        pathname: "/gallery",
        query: {walletToParsePublicKey},
      }}>
                  <a className="text-md font-light text-transparent bg-clip-text bg-gradient-to-br bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                    Enter Art Realms 
                  </a>
                </Link></button>: <button className="select-none">
                  <a className="select-none text-md font-light text-gray-400">
                    Enter Art Realms 
                  </a></button>}

                </label>
               
              </div>
              {/* <button className="text-white">Submit</button> */}
            
            </form>
          </div>
          {/* <div className="md:flex md:flex-row border-2">
                      <label className=" md:flex ">
                      
                        <div className="flex m-2 space-x-2 ">
                          <input
                            type="text"
                            placeholder="Enter a public wallet adress..."
                            className="w-full md:w-full input text-gray-400 rounded-lg border border-gray-300 input-lg bg-gray-800 bg-opacity-40"
                            value={walletToParsePublicKey}
                            onChange={onChange}
                            style={{
                              
                            }}
                          />

                          
                        </div>
                        {!error ? <button className="bg-black border border-white hover:bg-white ml-6 text-white font-bold py-2 px-4 rounded-full "><Link href={{
        pathname: "/gallery",
        query: {walletToParsePublicKey},
      }}>
                  <a className="text-md font-bold text-white hover:text-black">
                    Enter the Metaverse
                  </a>
                </Link></button>: <button className="btn btn-ghost">
                  <a className=" hidden ">
                    Enter valid address
                  </a></button>}
                      </label>
                    </div> */}
        </div>
        </section>

       {/*  <div id="demo" className="bg-gray-200 md:flex flex-row  h-screen py-3 ">
          
          <div className="border-2 flex flex-col w-1/2 bg-white md:justify-center lg:px-16 md:px-6">
            <h1 className = "md:text-7xl lg:text-8xl sm:text-6xl mt-6 ml-6 sm:text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">Your Space in the Metaverse</h1>
            <p className="text-xl sm:text-md  text-black font-bold">Create high-quality 3D exhibitions of your NFTs and share it with your friends. Getting started is as easy as searching your Solana wallet address.</p>
            
          </div>
          <div className=" flex flex-row w-1/2 ">
            
            <iframe src='https://my.spline.design/untitled-539f7e39fb49baf014476c8ebcf16f56/' width="100%" height="100%"></iframe>
         
          

          </div>
          
        </div> */}
        
            {/* <div className="flex flex-auto flex-col md:mr-10">
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
            </div> */}
           
          
      {/* <section className="bg-gray-500 relative ">
        <div className=" flex flex-col items-center mx-8 w-full">
        
            
              <div className="flex flex-col justify-center md:justify-start max-w-xl ">
                <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl text-left md:text-left">Building Beautiful Metaverse Spaces</h1>
                <h2 className="text-black font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quas molestiae similique beatae temporibus laudantium et consequuntur maiores tempore? Laboriosam neque atque in velit eos provident tempore quae, quas perspiciatis?</h2>
              </div>

              

            
        </div>
        </section>
 */}

<section className="bg-black">
          <div className="container mx-auto bg-black">
            <img loading='lazy' src="/Realms8.png" className=""></img>

          </div>
          </section>

  

       <footer className="p-10 h-fit footer bg-black text-neutral-content text-sm text-gray-200">
  <div>
    
    <p className="">Built by @0xSteen and @crazysetting</p>
    
  </div> 
  
</footer> 

      </div>
    
    
  );
};



