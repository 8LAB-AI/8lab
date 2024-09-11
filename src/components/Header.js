'use client';

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Mail from '../../public/images/email.png';
import Ig from '../../public/images/instagram.png';
import Twitter from '../../public/images/twitter-2.png';
import { Link } from 'react-scroll';
import Burger from '../../public/images/burger.png';
import Logo from '../../public/images/8lab.png';
import CRTEffect from "./OverlayBlue";

export default function Header(){
    const [width, setWidth] = useState(0);
    const [open, setOpen] = useState(false);

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

    const toggleMenu = (e) => {
        e.preventDefault();
        setOpen(!open);
    }
    return(
        width >= 1024 ? 
        <div className='fixed z-[100] top-0 px-[45px] py-[30px] flex justify-between w-full'>
            <div className='flex self-center gap-[15px] drop-shadow-[1px_1px_0_#000000]'>
                <a href="mailto:hello@8lab.ai"><Image src={Mail} height={15} alt="oops"/></a>
                <a href="https://www.instagram.com/8lab.ai/"><Image src={Ig} height={15} alt="oops"/></a>
                <a href="https://x.com/8labhq"><Image src={Twitter} height={15} alt="oops"/></a>
            </div>
            <div className='flex gap-[15px] text-base text-white font-kl weight-[700] non-italic'>
                <Link className="hover:cursor-pointer" to="breakdown" smooth='easeIn' delay={150} duration={2500}>ABOUT</Link>
                <Link className="block hover:cursor-pointer mb-[10px]" to="join" smooth='easeIn' delay={150} duration={2500} onClick={toggleMenu}>JOIN</Link>
            </div>
        </div>
        :
        <div className={open ? 'fixed z-[255] top-0 px-[45px] py-[30px] flex justify-between w-full text-white' : 'fixed z-[255] top-0 px-[45px] py-[30px] flex justify-between w-full text-white'}>
            <Image className="hover:cursor-pointer relative z-[300]" src={Burger} width={20} alt="oops" onClick={toggleMenu}/>
            <div className={open ? 'absolute top-0 left-0 bg-blue w-full h-dvh transition-[left] ease-in duration-[500ms]' : "absolute top-0 bg-blue w-full h-dvh left-[-100vw] transition-[left] ease-in duration-[500ms]"}>
                <div className='absolute z-[5] px-[45px] md:bottom-[30px] bottom-[40px] text-2xl text-white font-kl weight-[700] non-italic'>
                    
                    <Link className="block hover:cursor-pointer mb-[20px]" to="home" smooth='easeIn' delay={150} duration={2500} onClick={toggleMenu}><Image src={Logo} height={40} alt="logo"/></Link>
                    <Link className="block hover:cursor-pointer mb-[10px]" to="breakdown" smooth='easeIn' delay={150} duration={2500} onClick={toggleMenu}>ABOUT</Link>
                    <Link className="block hover:cursor-pointer mb-[10px]" to="join" smooth='easeIn' delay={150} duration={2500} onClick={toggleMenu}>JOIN</Link>
                    <div className='flex self-center gap-[15px] ml-[5px]'>
                        <a href="mailto:hello@8lab.ai"><Image src={Mail} height={20} alt="oops"/></a>
                        <a href="https://www.instagram.com/8lab.ai/"><Image src={Ig} height={20} alt="oops"/></a>
                        <a href="https://x.com/join8lab"><Image src={Twitter} height={20} alt="oops"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}