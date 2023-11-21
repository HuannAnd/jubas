import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { MdOutlineProductionQuantityLimits, MdOutlinePermContactCalendar, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { FaQuestion } from 'react-icons/fa';

import './navmobile.scss';
import test from 'node:test';

export default function NavMobile() {
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);
  const el4 = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });

    tl.fromTo(el1.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'elastic.out(1, 0.3)' })
      .fromTo(el2.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'elastic.out(1, 0.3)' })
      .fromTo(el3.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'elastic.out(1, 0.3)' })
      .fromTo(el4.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: 'elastic.out(1, 0.3)' });
  }, []);

  const [elements, setElements] = useState({
    name1: '',
    name2: '',
    name3: '',
    name4: ''
  })

  const hand1 = () =>{
    setElements({
        name1: 'white',
        name2: '',
        name3: '',
        name4: ''
    })
  }
  const hand2 = () =>{
    setElements({
        name1: '',
        name2: 'white',
        name3: '',
        name4: ''
    })

  }
  const hand3 = () =>{
    setElements({
        name1: '',
        name2: '',
        name3: 'white',
        name4: ''
    })
   
  }
  const hand4 = () =>{
    setElements({
        name1: '',
        name2: '',
        name3: '',
        name4: 'white'
    })
  
  }

  return (
    <nav className='mobile'>
      <div className="container-nav_mobile">
        <i ref={el1} className={elements.name1} onClick={hand1}><MdOutlineProductionQuantityLimits/></i>
        <i ref={el2} className={elements.name2} onClick={hand2}><MdOutlinePermContactCalendar /></i>
        <i ref={el3} className={elements.name3} onClick={hand3}><MdOutlineTipsAndUpdates /></i>
        <i ref={el4} className={elements.name4} onClick={hand4}><FaQuestion /></i>
      </div>
    </nav>
  );
}