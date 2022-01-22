import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Loader, SelectAndConnectWalletButton } from "components";
import Router from 'next/router';


import { SolanaLogo } from "components";
import styles from "./index.module.css";

export const LoginView: FC = ({}) => {
  const { publicKey } = useWallet();

  //const onClick = () => {};

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl"><img src="/newlogo.png"/></span>
            </button>
          </div>
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">Realms</span>
          </div>
          
        </div>
        
        <div className="text-center pt-2">
          <div className="hero min-h-16 py-4">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                
                <p className="mb-5">
                <ul className="w-full steps">
  <li className="step step-primary">Connect to wallet</li> 
  <li className="step">Enter Metaverse</li> 
  
</ul>
                  
                </p>
                <p className="mb-5">
                <SelectAndConnectWalletButton onUseWalletClick={() => {}} />
                </p>
                <p>
                
                   {/* {publicKey ? Router.push('/gallery') : null}  */}
                                        
                </p>

                
              </div>
            </div>
          </div>

         
        </div> 
      </div>
    </div>
  );
};
