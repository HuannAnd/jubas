'use client'

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap'

import Image from 'next/image'

import './FirstSection.scss'

export default function FirstSection() {
    // Elementos da animação (section)
    // Números imaginários, se liga, isso aqui não é matemática, usa verbalização, melhora a descrição das duas coisas
    const el1 = useRef(null)
    const el2 = useRef(null)
    const el3 = useRef(null)
    const el4 = useRef(null)

    // Animação da section
    useLayoutEffect(() => {
        const timeline = gsap.timeline({ defaults: { duration: 1 } });

        timeline
            .fromTo(el1.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0 })
            .fromTo(el2.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0 })
            .fromTo(el3.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0 })
            .fromTo(el4.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
    }, [])


    return (
        <section className="first">
            <div className="controler-first_section">
                <div className="text-first">
                    <h1 ref={el3}>Juba's <br /> <span>At<span>eliê</span></span></h1>
                    <p ref={el4}>Seja bem vindo</p>
                </div>
                <div className="radius-products">
                </div>
                <div ref={el2} className="image">
                    
                    <img src="/abstract.png" alt="Imagem abstrata" />
                </div>
                <div className="bg" ref={el1}></div>
            </div>
        </section>
    )
}