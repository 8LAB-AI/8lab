'use client';

import { useRef, useState, useEffect } from "react";
import React from 'react';
import Image from "next/image";
import Logo from '../../public/images/8lab.png';
import Tilt from 'react-parallax-tilt';
import Card from '../../public/images/card.png';
import CardBack from '../../public/images/cardBack.png';
import { Parallax } from "react-scroll-parallax";
import { Link, Element} from 'react-scroll';
import CRTEffect from "@/components/Overlay";

export default function Home(){
    const [xDeg,setXDeg] = useState(0);
    const [yDeg,setYDeg] = useState(0);
    const [bottom, setBottom] = useState(0);
    const [width, setWidth] = useState(0);
    const [imgLoaded, setImgLoaded] = useState(false);
    const elRef = useRef(null);
    useEffect(() => {
        if(elRef.current){
            let elDimensions = elRef.current.getBoundingClientRect();
            console.log(elDimensions);
            let elHeight = elDimensions.bottom - elDimensions.top;
            setBottom(elHeight);
            console.log(bottom);
        }
        setWidth(window.innerWidth);
    }, [])
    useEffect(() => {
        const resize = () => {
            setWidth(window.innerWidth);
        };
        document.addEventListener("resize", resize);
        () => document.removeEventListener("resize", resize);
    }, [width])
    useEffect(()=>{
        const resize = () => {
            if(elRef.current){
                let elDimensions = elRef.current.getBoundingClientRect();
                let elHeight = elDimensions.bottom - elDimensions.top;
                setBottom(elHeight);
                console.log(bottom);
            }
        }
        
        document.addEventListener("resize", resize);
        // remove event on unmount to prevent a memory leak
        () => document.removeEventListener("resize", resize);
      }, []);
    const tiltRectange = (e) =>{
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let middleX = (rect.left - rect.right) / 2;
        let middleY = (rect.top -rect.bottom) / 2;

        let offsetX = (e.clientX - middleX) / middleX;
        let offsetY = (middleY - e.clientY) / middleY;
        console.log("offset X: ", offsetX, "ofset Y: ", offsetY);
        setXDeg(offsetX);
        // setYDeg(offsetY);

    }

    return(
        
        <Element name="home">   
        <CRTEffect></CRTEffect>
        <div className="[text-shadow:_2px_2px_0_#000000] px-[45px] relative bg-black">
            
            <div>
            <Tilt className="lg:w-[30%] w-[85%] lg:h-[75%] md:h-[85%] h-[575px] fixed lg:top-[15%] top-[15%] lg:left-[38%] left-[7.5%] translate-x-[-7.7%] z-[1] animate-fadeIn opacity-0">
                <div>
                <Parallax rotateY={[0, -180]} startScroll={0} endScroll={bottom} className={width >= 1024 ? `origin-[40%_0]` : "origin-[50%_0]"}
                    style ={{
                        transform: `perspective(1000px)`,
                        transformStyle: 'preserve-3d'
                    }}
                    
                    // onMouseMove={tiltRectange}
                    // className="w-[30%] h-[75%] bg-blue fixed top-[15%] left-[50%] translate-x-[-50%] rounded-lg z-[1]"
                    >
                        
                
                
                <Image style={{transform: `rotateY(-180deg)`, backfaceVisibility: 'hidden'}} className="absolute top-0 z-[1] w-full lg:w-[80%] rounded-lg" src={Card} width={400} alt="oops"/>
                <Image style={{backfaceVisibility: 'hidden'}} className="absolute top-0 z-[1] w-full lg:w-[80%] rounded-lg" src={CardBack} width={400} alt="oops"/>
                </Parallax>
                </div>
            </Tilt>
            </div>

            
            
            
            <div className="h-lvh relative" ref={elRef}>
                <div className="absolute w-full lg:w-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[3]">
                    
                    <Parallax className="relative left-[50%] translate-x-[-50%] mt-[250px] lg:mt-[325px] lg:w-auto w-full" opacity={[1,0]} startScroll={0} endScroll={bottom/2}>
                    <h2 className="relative block text-mobilexl lg:text-xl text-center font-kl uppercase pointer-events-none mb-[15px]">The Members-Only Hub Where Creatives Find, Be Found, and Grow With Agent 8 + Humans.</h2>
                    </Parallax>
                    
                </div>
                <div className="fixed w-full h-fit lg:w-auto lg:h-auto top-[45%] lg:top-[50%] left-[51%] lg:left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]">
                {width >= 1024 ?
                    <Parallax translateY={['0px', `-${(bottom / 2) - 37.5}px`]} scale={[1, 0.2]} startScroll={0} endScroll={bottom}>
                        <Link className="hover:cursor-pointer w-full" to="home" smooth="easeIn" delay={150} duration={2500}><Image className="mx-auto" src={Logo} height={65} alt="logo"/></Link>
                    </Parallax>
                    :
                    <Parallax className='sticky top-0' translateY={['0px', `-${(bottom / 2) - 85}px`]} scale={[1, 0.25]} startScroll={0} endScroll={bottom}>
                        <Link className="hover:cursor-pointer w-full" to="home" smooth="easeIn" delay={150} duration={2500}><Image className="mx-auto" src={Logo} height={65} alt="logo"/></Link>
                    </Parallax>
                }
                
                </div>

            </div>
            <Element name="learn">
                <div className="h-lvh relative z-[3] pointer-events-none">
                    <h2 className="text-2xl text-center font-kl uppercase pointer-events-none"></h2>
                </div>
            </Element>
            
            

        </div>
        </Element>
       
    )
}