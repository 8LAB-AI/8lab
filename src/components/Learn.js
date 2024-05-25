'use client';

import React, { useRef,useState,useEffect } from "react";
import Image from "next/image";
import Human from '../../public/images/human2.png';
import Brain from '../../public/images/brain.png';
import { Parallax } from "react-scroll-parallax";
import useDetectScroll from '@smakss/react-scroll-direction';
import Tilt from 'react-parallax-tilt';

export default function Learn(){
    const { scrollDir, scrollPosition } = useDetectScroll();
    const [xDeg,setXDeg] = useState(0);
    const [yDeg,setYDeg] = useState(0);
    const [xPos, setXPos] = useState(0);
    const [top, setTop] = useState(0);
    const prevTop = useRef();
    const elRef = useRef(null);

    useEffect(() => {
        const options = { passive: true }; // options must match add/remove event

        const scroll = (event) => {
         const { pageYOffset, scrollY } = window;
         console.log('yOffset', pageYOffset, 'scrollY', scrollY);
         if(elRef.current){
            let elDimensions = elRef.current.getBoundingClientRect();
            let elHeight = elDimensions.bottom - elDimensions.top;
            let elIncrement = elHeight / 20;
            let windowWidth = window.innerWidth;
            let windowIncrement = windowWidth / 20;

            // prevTop.current = top;
            // setTop(elDimensions.top);
            // console.log('elDimensions', elPos, 'previous', previousVal);
            // console.log("window width:", elDimensions.top, elHeight, windowWidth, elHeight, windowIncrement);
            // let newX = xPos - windowIncrement;
            // let newX2 = xPos + windowIncrement;
            // let direction = elDimensions.top - prevTop.current;
            // let newWidth = windowWidth - (45 + (elDimensions.right - elDimensions.left)/2)
            // let newWidth2 = windowWidth - (45 + (elDimensions.right - elDimensions.left)/2)
            // console.log('direction', direction);
            // console.log('new PrevTop', prevTop.current);
            // if(newX < 0 && Math.abs(newX) <= (newWidth) && direction < 0 && elDimensions.top <= 0){
                
            //     setXPos(newX);
            //     console.log(xPos);
            // }
            // if(newX2 < 0 && Math.abs(newX2) >= newWidth2 && direction > 0 && elDimensions.top <= 0){
                
            //     setXPos(newX2);
            //     console.log('new2', xPos);
            //     console.log('window dith', newWidth2);
            // }
            console.log('elementPos', elRef.current.offsetTop);
            setTop(elRef.current.offsetTop);
        }
        //  let newPos = (elDimensions.top - scrollY)
        };
        document.addEventListener("scroll", scroll, options);
        // remove event on unmount to prevent a memory leak
        () => document.removeEventListener("scroll", scroll, options);
       }, [xPos]);

    const tiltRectange = (e) =>{
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let middleX = (rect.right - rect.left) / 2;
        let middleY = (rect.bottom - rect.top) / 2;

        let offsetX = (e.clientX - middleX) / middleX;
        let offsetY = (middleY - e.clientY) / middleY;
        setXDeg(offsetX);
        setYDeg(offsetY);

        
    }

    const handleScroll = () => {
        if (elRef.current) {
            console.log('window width: ', window.innerWidth);
            setXPos(window.innerWidth)
        }
        
    }

    return(
        <div className="relative z-[4] bg-black w-full h-[200dvh]" ref={elRef} onScroll={handleScroll}>
            
            <div 
            
                className="sticky z-[1] top-0 pt-[100px] w-full px-[45px] h-dvh"
                >
                <Tilt className="w-[30%] h-[75%] bg-blue sticky left-[100%] rounded-lg z-[1]">
                    <div>

                    </div>
                </Tilt>
                {/* <div 
                    style={{
                            transform: `perspective(1000px) translateX(${xPos}px) rotateY(${yDeg * 5}deg) rotateX(${xDeg * 5}deg) scale3d(1,1,1)`
                        }} 
                    className="w-[30%] h-[75%] bg-blue sticky left-[100%] rounded-lg z-[1]"
                    onMouseMove={tiltRectange}
                    
                >
                </div> */}
                <Parallax className="absolute top-[15%] left-[60%] rounded-lg z-[1] pointer-events-none" opacity={[1,0]} startScroll={top} endScroll={top + 400}>
                    <Image src={Human} width={220} alt="oops"/>
                </Parallax>
                <Parallax className="absolute top-[30%] left-[60%] rounded-lg z-[1] pointer-events-none" opacity={[0,1]} startScroll={top + 400} endScroll={top + 700}>
                    <Image src={Brain} width={364} alt="oops"/>
                </Parallax>
            </div>
            
            <div className="absolute z-[0] w-full h-[100dvh] top-[0px]">
                <Parallax className="w-[50%] relative left-[45px] top-[50%] translate-y-[-50%]" opacity={[1,0]} startScroll={top} endScroll={top + 350}>
                    <div>
                        <h2 className="text-2xl mb-[5px] font-kl uppercase">At 8lab, we care a lot about people.</h2>
                        <h3 className="text-xl mb-[25px] font-kl font-[500]">Even though we use a lot of AI lol.</h3>
                        <span className="text-lg font-kl font-[500]">
                        As creatives ourselves, we’ve been through it all. That’s why we’re building what we wish we had when we started. We want to help our community to grow, create, and collaborate. The commitment to people will always be the heart of what we do. Because at the end of the day, we build tech to help us do better, not to take our place. 
                        </span>
                    </div>
                </Parallax>
                
            </div>

            <div className="absolute z-[0] w-full h-[100dvh] top-[100dvh]">
                <Parallax className="w-[50%] relative left-[45px] top-[50%] translate-y-[-50%]" opacity={[0,1]} startScroll={top + 350} endScroll={top + 700}>
                    <div>
                        <h2 className="text-2xl mb-[25px] font-kl">We serve the people who like to think of new ideas and make them real.</h2>
                        {/* <h3 className="text-xl mb-[25px]">Even though we use a lot of AI lol.</h3> */}
                        <span className="text-lg font-kl font-[500]">
                        They love to create things like art, fashion, tech, films, and new kinds of cool businesses and experiences. they are curious, always learning, and they enjoy collaborating with others to make their ideas even better. They use their creativity to solve problems, bring joy, and make the world a more interesting place. we help them with the support they need so they can keep creating amazing things. 

                        </span>
                    </div>
                </Parallax>
                
            </div>
        </div>
    )
}