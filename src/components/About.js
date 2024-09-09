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
                    <h2 className="font-kl lg:text-2xl text-mobile2xl mb-[25px] uppercase">
                        ok, so... wtf is 8lab? 
                    </h2>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        If you didn&apos;t quite catch it yet, we&apos;re here to help you make great things happen. 
                    </span>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        Or better yet, to help make great ideas happen. 
                    </span>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        We are a space for dreamers, and we are a place that pushes them to foster those dreams. 
                    </span>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        If you want to know how to merge your creativity with tech; 
                    </span>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        If your goal is to grow to the highest level;
                    </span>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        If you want to be part of a global creative community that holds each other accountable;
                    </span>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        If you want to find new and improved solutions to bring your imagination to life;
                    </span>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        If you want to better your work, yourself, and the world around you;
                    </span>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        And if you know that these things can no longer wait—
                    </span>
                    <span className="block lg:text-lg text-mobilebase mb-[10px]">
                        Then welcome home to 8LAB.
                    </span>
                    {/* <span className="block lg:text-lg text-mobilebase">
                        Consectetur lorem donec massa sapien faucibus. Amet luctus venenatis lectus magna fringilla urna porttitor. Mi quis hendrerit dolor magna eget est lorem ipsum. Vel facilisis volutpat est velit. Et 
                    </span> */}
                </div>
                {/* <div className="lg:flex-1 bg-white h-[40vh] lg:full rounded-xl relative z-[3]">

                </div> */}
                </div>
            </div>
                </div>
                
            </Element>
        
        
    )
}