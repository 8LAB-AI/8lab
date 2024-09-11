'use client';

import Image from "next/image";
import Humans from '../../public/images/humans.png';
import Text from '../../public/images/text.png';
import Earth from '../../public/images/Earth.gif';
import { Element} from 'react-scroll';
import CRTEffect from "./Overlay";
import ApplyPerson from '../../public/images/apply.png';
import Logo8 from '../../public/images/8lablogo.png';
import { useState } from 'react';




// component that renders an email input and submits that email to the backend service /api/subscribe
export default function Apply(){
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: email
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const { error } = await res.json();

        if (error) {
            console.log(error);
        } else {
            setEmail('');
            setSubmitted(true);
        }
    }


    return(
        <Element name="join">
            <div className="[text-shadow:_0.5px_0.5px_0_#00c01d] relative z-[3] bg-black w-full h-full md:h-dvh overflow-hidden" >
                <div className="relative z-[100]">
                <div className="flex flex-col items-center justify-center h-full px-4 py-8">
                    {!submitted &&

                    <form onSubmit={handleSubmit} className="w-full max-w-md">
                        <div className="flex items-center border-b border-white py-2">
                            <input 
                                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" 
                                type="email" 
                                placeholder="Enter your email" 
                                aria-label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button 
                                className="flex-shrink-0 bg-white hover:bg-gray-200 border-white hover:border-gray-200 text-sm border-4 text-black py-1 px-2 rounded" 
                                type="submit"
                            >
                                Join
                            </button>
                        </div>
                    </form>
                    }
                    {submitted &&
                        <p>We will be in touch.</p>
                    }
                </div>
                        <Image className="animate-rotate relative lg:w-[250px] lg:h-[250px] w-[150px] h-[150px] mx-auto mt-[50px]" src={Logo8} width={250} height={250} alt="oops"/>
                </div>
            </div>
    
        </Element>
    )
}