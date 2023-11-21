'use client'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import NavMobile from './navMobile'
import './nav.scss'
import Image from 'next/image';
import logo from '../../../public/logo.jpg'

export default function Nav() {

    // Elementos da animação (ul)
    const el1 = useRef(null);
    const el2 = useRef(null);
    const el3 = useRef(null);
    const el4 = useRef(null);
    
    // Animação da ul
    useLayoutEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: .7 } });

        tl.fromTo(el1.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'elastic.out(1, 0.3)' })
          .fromTo(el2.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'elastic.out(1, 0.3)' })
          .fromTo(el3.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'elastic.out(1, 0.3)' })
          .fromTo(el4.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'elastic.out(1, 0.3)' });
    }, []);  // Adicionado dependências aos refs para evitar warnings

    return (
        <>
            <nav className='desktop'>
                <div className='controlador-nav'>
                    <div className='div-imagem'>
                        <Image src={logo} alt='logo'/>
                    </div>

                    <ul>
                        <li ref={el1}><a className='item' href="">Produtos</a></li>
                        <li ref={el2}><a className='item' href="">Contato</a></li>
                        <li ref={el3}><a className='item' href="">Dicas</a></li>
                        <li ref={el4}><a className='item' href="">Sobre</a></li>
                    </ul>
                </div>
            </nav>

            <NavMobile/>
        </>
    )
}
