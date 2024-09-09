'use client';

import React from 'react';
import { Element} from 'react-scroll';
import CRTEffect from './Overlay';
import { Parallax } from "react-scroll-parallax";

export default function About(){
    return(
            <Element name="about">
                
                <div className='relative z-[3] w-full [text-shadow:_0.5px_0.5px_0_#00c01d]'>
                
                <div className="relative h-full lg:h-dvh bg-black z-[3]">
                <div className="px-[45px] flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[100px] py-[150px] relative z-[3]">
                
                <div className='lg:flex-1'>
                    <h2 className="font-kl lg:text-2xl text-mobile2xl mb-[5px] uppercase">
                        ok, so... wtf is 8lab? 
                    </h2>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        Want to know? Apply below.
                    </span>
                </div>
                </div>
            </div>
                </div>
                
            </Element>
        
        
    )
}