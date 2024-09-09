'use client';

import Image from "next/image";
import Humans from '../../public/images/humans.png';
import Text from '../../public/images/text.png';
import Earth from '../../public/images/Earth.gif';
import { Element} from 'react-scroll';
import CRTEffect from "./Overlay";
import ApplyPerson from '../../public/images/apply.png';
import Logo8 from '../../public/images/8lablogo.png';

export default function Apply(){
    return(
        <Element name="apply">
            
            <div className="[text-shadow:_0.5px_0.5px_0_#00c01d] relative z-[3] bg-black w-full h-full md:h-dvh overflow-hidden" >
                
                <div className="relative w-full my-[100px] z-[3] lg:text-2xl text-mobile2xl font-kl uppercase text-white text-center">
                    <h2 className="mb-[25px] mx-[20px]">IF THIS SOUNDS LIKE YOU…</h2>
                    <a href="mailto:hello@8lab.ai"><h2>APPLY</h2></a>
                </div>
                <div className="relative z-[100]">
                    <a href="mailto:hello@8lab.ai" className="block w-full h-full rounded-[100%] text-2xl relative hover:cursor-pointer">
                        <Image className="animate-rotate relative lg:w-[250px] lg:h-[250px] w-[150px] h-[150px] mx-auto" src={Logo8} width={250} height={250} alt="oops"/>
                        {/* <Image className="absolute w-[60px] h-[60px] flex align-middle self-center items-center justify-center font-kl font-bold top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] hover:cursor-pointer" src={ApplyPerson} width={64} height={64} alt="oops"/> */}
                    </a>
                </div>
                {/* <div className="absolute block w-max top-[55%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    <Image className="animate-spin lg:w-[450px] w-[300px]" src={Humans} width={450} height={450} alt="oops"/>
                </div> */}
                {/* <div className="absolute block w-max top-[50%] lg:top-[55%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    <Image className="animate-reverseSpin lg:w-[275px] w-[200px]" src={Text} width={500} height={500} alt="oops"/>
                </div> */}
                <h2 className="block w-full relative px-[45px] py-[100px] z-[3] lg:text-sm text-mobilesm mb-[15px] font-kl uppercase text-white text-center">Annual membership starts at $999. Learn more and apply now.</h2>
            </div>
    
        </Element>
    )
}