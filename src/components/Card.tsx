import {FC} from "react"

type Props = {
    title: string;
    address: string;
    card_img?: string;
    twitter: string;
}

export const Card: FC<Props> = ({title="My Title", address="My Address", card_img="", twitter}) => {

    return (
        <div className="container overflow-hidden group relative items-center bg-none rounded-3xl aspect-w-3 aspect-h-3 border border-white/40 ">
           
          
           <a href={"/gallery?walletToParsePublicKey=" + address}>
           
             
                    <img src={card_img} className=" shrink-0 w-full h-full pb-1  object-center object-cover rounded-2xl  absolute    " />
                    {/*  <div className="absolute w-full h-1/4 bg-black/20 rounded-b-2xl backdrop-blur-xl border border-white/20 border-t-0 z-10 bottom-0"></div>  */}

                    <div className="absolute flex right-4 top-4 max-w-12 h-fit bg-gray-500/30 backdrop-blur-3xl  rounded-full border border-white/30">
                        <div className="object-fit text-gray-100 p-2">
                            <h2 className="  text-center items-center justify-center">{twitter}</h2>
                        </div>
                        
                    </div>
                   <div className="absolute flex flex-col shrink bottom-0  bg-gray-800 w-full h-2/6 z-10 ">
                   <h1 className="pt-4 px-5 z-20 font-bold text-left text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl  truncate tracking-wide ">{title}</h1>
                    

                   {/*  <hr className="relative mt-4 border-black/20"/> */}
            <div className="hidden md:flex md:flex-auto md:grid px-5 pb-5 md:pb-2 bg-none  md:grid-cols-2 md:gap-1  items-end">
                <div className="cols-span-1  text-gray-400">
                    <h3 className="text-sm font-bold">address</h3>
                    <p className="mt-0.5 text-sm text-gray-500 truncate">{address}</p>
                </div>
                <div className="flex flex-row-reverse px-5">
               {/*  <button className="bg-indigo-400 text-white rounded-full px-3 hidden group-hover:block">
                    <a href={"/gallery?walletToParsePublicKey=" + address}>Enter</a>
                </button> */}
                </div>
            </div>
                   </div>
                   {/*  <div className="  absolute bottom-0 h-2/6  w-full bg-white/10 backdrop-blur-sm rounded-b-2xl z-10">
                     <h1 className=" relative pt-4 px-5 z-20 font-bold text-left text-white text-2xl xl:text-3xl  bg-clip-text bg-gradient-to-br bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400  tracking-wide ">{title}</h1>
                        <p className="px-5 text-md text-gray-100">{address}</p>
                    </div>    */}
            
                   
             
                
                
            
           {/*  <hr className="relative mt-2 border-black/20"/>
            <div className="mt-3 grid grid-cols-2 gap-1 items-end">
                <div className="cols-span-2 text-gray-400">
                    <h3 className="text-sm font-bold">address</h3>
                    <p className="mt-0.5 text-xs text-gray-500">{address}</p>
                </div>
                <div className="flex flex-row-reverse">
                <button>
                    <a href={"/gallery?walletToParsePublicKey=" + address}>Enter {'>'}</a>
                </button>
                </div>
            </div> */}
           
           
           
            
            
           
            </a>
            
            
        </div>
        
        /* <div className="mt-4 relative overflow-hidden">
        <div className="h-max w-72 2xl:w-96 bg-white/40 backdrop-blur-lg rounded-3xl border hover:bg-white/50 border-white/10 p-4">
        <h1 className="font-bold text-gray-300 text-center text-xl tracking-widest">{title}</h1>
            <div className="md:shrink-0">
                <img src={card_img} className=" h-48 w-full object-cover md:h-72 md:w-full rounded-md " />
                
                
            </div>
            <hr className="relative mt-4 border-black/20"/>
            <div className="mt-3 grid grid-cols-2 gap-1 items-end">
                <div className="cols-span-2 text-gray-400">
                    <h3 className="text-sm font-bold">address</h3>
                    <p className="mt-0.5 text-xs text-gray-500">{address}</p>
                </div>
                <div className="flex flex-row-reverse">
                <button>
                    <a href={"/gallery?walletToParsePublicKey=" + address}>Enter {'>'}</a>
                </button>
                </div>
            </div>

        </div>
    </div> 
         <div className="border border-white opacity-20 rounded">
        <div className="bg-white opacity-20 rounded">
            <div className="text-white ">
            <img src={card_img} />
            <h1 className="font-bold ">{title}</h1>
            <p>{address}</p>
            <button>
                <a href={"/gallery?walletToParsePublicKey=" + address}>Enter {'>'}</a>
            </button>
            </div>
            </div>
</div> */
    );
};