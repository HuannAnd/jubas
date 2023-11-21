'use client'

import { useLayoutEffect , useRef } from 'react';
import { gsap } from 'gsap';
import './FirstSection.scss'
import image from '../../../../../../public/abstract.png'
import Image from 'next/image';

export default function FirstSection(){

        // Elementos da animação (section)
        const el1 = useRef(null);
        const el2 = useRef(null);
        const el3 = useRef(null);
        const el4 = useRef(null);
        
        // Animação da section
        useLayoutEffect(() => {
            const tl = gsap.timeline({ defaults: { duration: 1 } });
    
            tl.fromTo(el1.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0 })
              .fromTo(el2.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0 })
              .fromTo(el3.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0 })
              .fromTo(el4.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
        }, []); 


    return(
        <section className="first">
            <div className="controler-first_section">

                <div className='text-first'>
                    <h1 ref={el3}>Juba's <br /> <span>At<span>eliê</span></span></h1>
                    <p ref={el4}>Seja bem vindo</p>

                </div>


                <div className="radius-products">

                </div>
                
                <div ref={el2} className="image">
                    <Image src={image} alt="image" />
                </div>

                <div className="bg" ref={el1}></div>
            </div>
        </section>
    )
}