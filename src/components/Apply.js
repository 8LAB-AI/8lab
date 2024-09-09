'use client';

import Image from "next/image";
import Humans from '../../public/images/humans.png';
import Text from '../../public/images/text.png';
import Earth from '../../public/images/Earth.gif';
import { Element} from 'react-scroll';
import CRTEffect from "./Overlay";
import ApplyPerson from '../../public/images/apply.png';
import Logo8 from '../../public/images/8lablogo.png';
import { useState, useRef } from 'react';


export default function Apply(){
    const [show, setShow] = useState(true);
    const scrollRef = useRef(null);

    const scrollToBottom = () => {
        if (scrollRef.current){
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    function applyClick() {
        setShow(false);
        window.voiceflow.chat.load({
            verify: { projectID: '66c4b2d71f814f3b5752966c' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            render: {
                mode: 'embedded',
                target: document.getElementById('chatTarget'),
            },
            autostart: true
        });
        setTimeout(scrollToBottom, 1000);
    }

    return(
        <Element name="apply">
            {show && <div className="[text-shadow:_0.5px_0.5px_0_#00c01d] relative z-[3] bg-black w-full h-full md:h-dvh overflow-hidden" >
                <div className="relative z-[100]">
                    <a className="block w-full h-full rounded-[100%] text-2xl relative hover:cursor-pointer" onClick={applyClick}>
                        <Image className="animate-rotate relative lg:w-[250px] lg:h-[250px] w-[150px] h-[150px] mx-auto" src={Logo8} width={250} height={250} alt="oops"/>
                    </a>
                </div>
            </div>}
            <div class="anchor-ref" ref={scrollRef}></div>
    
        </Element>
    )
}