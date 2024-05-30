'use client';

import Image from "next/image";
import Humans from '../../public/images/humans.png';
import Text from '../../public/images/text.png';
import Earth from '../../public/images/Earth.gif';
import { Element} from 'react-scroll';
import CRTEffect from "./Overlay";

export default function Apply(){
    return(
        <Element name="apply">
            
            <div className="relative z-[3] bg-black w-full h-full lg:h-dvh overflow-x-hidden">
                {/* <CRTEffect></CRTEffect> */}
                <div className="absolute z-[100] top-[45%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    <a href="mailto:nana@8lab.ai" className="block rounded-[100%] text-2xl relative hover:cursor-pointer">
                        <Image className="lg:w-[300px] lg:h-[300px] w-[200px] h-[200px]" src={Earth} width={300} height={300} alt="oops"/>
                        <div className="absolute flex align-middle self-center items-center justify-center w-full h-full font-kl font-bold lg:top-0 top-[-5px] hover:cursor-pointer">APPLY</div>
                    </a>
                </div>
                <div className="absolute block w-max top-[45%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    <Image className="animate-spin lg:w-[450px] w-[300px]" src={Humans} width={450} height={450} alt="oops"/>
                </div>
                <div className="absolute block w-max top-[45%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    <Image className="animate-reverseSpin lg:w-[500px] w-[325px]" src={Text} width={500} height={500} alt="oops"/>
                </div>
                
            </div>
    
        </Element>
    )
}