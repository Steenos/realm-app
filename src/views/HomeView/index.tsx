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
    
    
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl"><img src="/newlogo.png"/></span>
            </button>
          </div>

          <div className="flex-3 px-6 mx-2">
            <span className="text-lg font-bold">Realms</span>
          </div>

          {/* <div className="flex-3 px-6 mx-0">
            <li className="mb-0">
            <Link href="/gallery">
                  <a className="text-lg font-bold hover:underline">
                    NFT Gallery
                  </a>
                </Link>
                </li>
          </div> */}

          <div className="flex-3 px-6 mx-0">
          <div data-tip="coming soon" className="tooltip">
            <span className="text-lg font-bold">Roadmap</span>
            </div>
          </div>

          <div className="flex-1 px-6 mx-0">
            <span className="text-lg font-bold">About Us</span>
          </div>


          <div className="flex-none">
           {/*  <WalletMultiButton className="btn btn-secondary" /> */}
            </div>
          </div>
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

<div className="hero min-h-screen rounded-box" style={{backgroundImage: `url(/hero-img.png)`}}>
  <div className="hero-overlay bg-opacity-40 rounded-box"></div> 
  <div className="text-center hero-content text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">
      Jump into your NFT Gallery
          </h1> 
      <p className="mb-5">
            Enter a <SolanaLogo/> wallet address to get started.
          </p> 

          <div>
                    <div className="form-control mt-8">
                      <label className="input-group input-group-vertical input-group-lg">
                        <span>Search</span>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            placeholder="Enter Wallet Address"
                            className="w-full input input-bordered input-lg"
                            value={walletToParsePublicKey}
                            onChange={onChange}
                            style={{
                              borderRadius:
                                "0 0 var(--rounded-btn,.5rem) var(--rounded-btn,.5rem)",
                            }}
                          />

                          
                        </div>
                      </label>
                    </div>
                  </div>
          {!error ? <button className="btn glass"><Link href={{
        pathname: "/gallery",
        query: {walletToParsePublicKey},
      }}>
                  <a className="text-lg font-bold hover:underline">
                    Enter Gallery
                  </a>
                </Link></button>: <button className="btn btn-ghost">
                  <a className="text-lg font-bold hover:underline">
                    Enter a valid address
                  </a></button>}
                  
    </div>
  </div>
</div>
{/* <div className="my-10">
                  {error ? (
                    <div>
                      <h1>Error Occures</h1>
                      {(error as any)?.message}
                    </div>
                  ) : null}

                  
                </div> */}
              </div>

  

       <footer className="p-10 footer bg-neutral text-neutral-content rounded-box">
  <div>
    
    <p>Built by @0xSteen and @crazysetting
      
    </p>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a> 
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a> 
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </div>
</footer> 




        

        {/* <div className="text-center pt-2">
          <div className="hero min-h-16 py-4">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                
                <h1 className="mb-5 text-5xl font-bold">
                  Hello Solana <SolanaLogo /> World!
                </h1>
                <p className="mb-5">
                  Show off your awesome NFT collection in this #D gallery
                </p>
                <p className="mb-5">
                  Sollana wallet adapter is connected and ready to use.
                </p>
                <p>
                  {publicKey ? <>Your address: {publicKey.toBase58()}</> : null}
                </p>

                
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="mb-5 pb-8 text-5xl">Templates:</h1>
            <ul className="text-left leading-10">
              <li className="mb-5">
                <Link href="/gallery">
                  <a className="text-4xl font-bold hover:underline">
                    🏞 -- NFT Gallery
                  </a>
                </Link>
              </li>
              
              
            </ul>
          </div>
        </div> */}
      </div>
    
    
  );
};



