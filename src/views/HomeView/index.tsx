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

import {Card} from "components";


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
    <section className="container mx-auto top-0 ">
    <div className="fixed container bg-black bg-opacity-70 backdrop-blur-lg h-16 z-50">
    <nav className="h-16 ">
 
  <div className="flex flex-row items-center px-16 md:justify-between  h-16 ">
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
      
    </ul>
    </div>
  </div>
  </nav>
  </div>
  </section>
  <section className="relative overflow-hidden container mx-auto">
  


        <div className="bg-black py-16 md:px-16  lg:px-0 px-10 ">
        {/* <iframe loading="lazy" src='https://my.spline.design/artrealmslanding1-2e5b20e2e0b0efd4968ac3a1fcd5ac36/'  className=" absolute w-[100%] h-[900px] border border-green-500 " ></iframe>  */}
          
          <div className="md:grid md:grid-cols-2 ">
            
            <div className="md:flex justify-center md:order-last md:right-0 md:top-0 ">
             
              {/* <iframe loading="lazy" src='https://my.spline.design/untitled-539f7e39fb49baf014476c8ebcf16f56/' className="lg:h-[600px] lg:w-[500px] h-[400px] w-[300px] rounded-2xl" ></iframe>  */}
              <iframe loading="lazy" src='https://my.spline.design/artrealmslanding1-2e5b20e2e0b0efd4968ac3a1fcd5ac36/' className=" md:absolute -top-16 md:w-full md:h-screen w-96 h-96  md:scale-125 aspect-square" ></iframe> 
                {/*  <div className="flex-auto flex-row space-x-8 px-8"><img src="/isoview5.png" className="w-full"/></div> */}
            </div>
            <div className="md:flex md:flex-col md:space-y-4 mt-20 text-center md:p-6 z-40">
              <h1 className = "text-5xl md:text-5xl lg:text-7xl xl:text-8xl sm:text-6xl mt-6 ml-6 sm:text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">Your Web3 Art Gallery</h1>
              <p className="text-base md:text-base lg:text-xl md:text-left ml-6 font-extralight text-white">Create high-quality 3D exhibitions of your NFTs and share them with your friends. Getting started is as easy as searching your Solana wallet address.</p>
              <a href="#demo" className=" md:bg-black md:border md:border-white md:hover:bg-white md:hover:text-black md:ml-6 md:text-white md:items-center md:font-bold md:py-2 md:px-4 md:rounded-full md:w-32">Try Demo</a>
            </div>
          </div>
          
        </div>
  </section>

        {/* <section className="bg-black">
          <div className="container mx-auto">
            <img loading='lazy' src="/Realms2-1.png"></img>

          </div>


        </section> */}

        <section className="container mx-auto relative h-max px-16 space-x-4 py-3 z-30">
          <h1 className="font-extrabold text-white text-center text-5xl md:text-7xl ">Realms Galleries</h1>
         
        {/* <div className=" relative w-full h-full max-w-xlg ">
            <div className="absolute  right-5 w-[700px] h-[700px] bg-purple-400 opacity-20 filter blur-2xl rounded-full mix-blend-multiply"></div>
            <div className="absolute  left-4 w-[550px] h-[550px] bg-blue-400 opacity-20 filter blur-2xl rounded-full mix-blend-multiply"></div>
          </div> */}
          
          <div className="relative mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1 ">
            
            <div className="" >
              <Card title={"Bird Girl"} twitter={'@BirdGirlNFT'} address={"4ACjn4Zryg5czy1m7esMGG2JcBpBKZyWUhdbVcPa4yoN"} card_img="/birdgirl.jpeg" />
            </div>
            <div>
              <Card title={"Chimpe"} twitter={'@seminal_digital'} address={"4uKsaLy4yZFC3fcazwwjxbKPS89qPRY4xZFM3qESrddd"} card_img="/chimpe.png" />
            </div>
            <div>
              <Card title={"HFP"} twitter={'@degenHFP'} address={"HFPaT6WKk9SkwtYVZ5m5Sqw7ZbyehGu9GHjsctigm49S"} card_img="/hfp.jpeg" />
            </div>
            {/* <div>
              <Card title={"Morpho"} twitter={'@morpho_genesis'} address={"CQj8qzodJYfGMHjuof6yPgUW5yXwLeAcY23rNezu4F8a"} card_img="/morpho.jpeg" />
            </div> */}
            <div>
              <Card title={"Steve Aoki"} twitter={'@steveaoki'} address={"94qM9awvQiW35vmS5m86sHeJp1JZAQWkW7w3vYwHZeor"} card_img="/steveaoki.jpeg" />
            </div>
            <div>
              <Card title={"dude.sol ◎"} twitter={'@fordudesake'} address={"3anukDBEijov9oVBNNbvCYsUkBc7yYioiCZiGvuWw61e"} card_img="/fordudesake.jpeg" />
            </div>
            
            <div>
              <Card title={"Demon Collector"} twitter={'@DemonColIector'} address={"2tn4ToRyMT8Mnh29AHcrixZr8GmDBUjBcSqpYdEuWoAU"} card_img="/demoncollector.jpeg" />
            </div> 
            
          </div>
        </section>
        <section  id='demo' className="container mx-auto">
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
             
            
            </form>
          </div>
          
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
          
        </div> 
        
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
           
          
       <section className="bg-gray-500 relative ">
        <div className=" flex flex-col items-center mx-8 w-full">
        
            
              <div className="flex flex-col justify-center md:justify-start max-w-xl ">
                <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl text-left md:text-left">Building Beautiful Metaverse Spaces</h1>
                <h2 className="text-black font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quas molestiae similique beatae temporibus laudantium et consequuntur maiores tempore? Laboriosam neque atque in velit eos provident tempore quae, quas perspiciatis?</h2>
              </div>

              

            
        </div>
        </section>
 */}

<section className="bg-black container mx-auto">
          <div className=" bg-black">
            <img loading='lazy' src="/Realms8.png" className=""></img>

          </div>
          </section>

  

       <footer className="container mx-auto p-10 h-fit footer bg-black text-neutral-content text-sm text-gray-200">
  <div>
    
    
    
  </div> 
  
</footer> 

      </div>
    
    
  );
};



