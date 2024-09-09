'use client';

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Innovate from '../../public/images/global-network.png';
import Achieve from '../../public/images/metaverse.png';
import Impact from '../../public/images/plant.png';
import Money from '../../public/images/money.png';
import { Parallax } from "react-scroll-parallax";
import CRTEffect from "./OverlayBlue";

export default function Info(){
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        };
        document.addEventListener("resize", resize);
        () => document.removeEventListener("resize", resize);
    }, [width])

    return(
        <Parallax className="h-full md:h-dvh bg-blue relative z-[3]">
            <CRTEffect></CRTEffect>
            <div className="relative z-[3] pt-[100px] pb-[25px] lg:pb-[100px] px-[45px] [text-shadow:_0.5px_0.5px_0_#00c01d]">
            
                    <div>
                        <h2 className="text-mobile2xl text-white lg:text-2xl font-kl mb-[25px] uppercase pointer-events-none">The 8LAB BR8KDOWN</h2>
                    </div>

                
                <div className="flex flex-col lg:flex-row lg:gap-[25px] mt-[50px]">
                    
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Achieve} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Find</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Connections and resources to take your community to the next level.</span>
                    </div>
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Innovate} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Be found</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Increase your visibility to brands, creators and new members.</span>
                    </div>
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Impact} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">Grow</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Leverage Agent 8, your AI partner + industry leaders, for personalized growth and expansion.</span>
                    </div>
                    <div className="flex-1 mb-[100px] lg:mb-0">
                        <Image className="lg:mb-[20px] mb-[10px] h-[50px] lg:h-auto w-auto" src={Money} height={40} alt="oops"/>
                        <h3 className="text-xl mb-[20px] font-kl uppercase">The 8PASS</h3>
                        <span className="lg:text-lg text-mobilelg block mb-[15px]">Unlock early access to experiences, products, apps, special deals, and other 8LAB benefits.</span>
                    </div>
                </div>
            </div>
        </Parallax>
        
    )
}