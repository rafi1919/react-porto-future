import { useEffect, useRef } from 'react';
import Button from "../../UI/Components/Button";
import LayoutDark from "../../UI/Components/LayoutDark";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const randomTextRef = useRef(null);

  useEffect(() => {
    const randomTextElement = randomTextRef.current;
    if (!randomTextElement) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: randomTextElement,
        start: "top 70%",
        end: "top center",
        scrub: 4,
      }
    });

    tl.fromTo(randomTextElement, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
    });
  }, []);

  return (
    <LayoutDark>
      <div className='grid w-full justify-between grid-cols-12'>
        <div className='lg:col-span-8 md:col-span-12 col-span-12'>
          <h1 ref={randomTextRef} className='randomText-section w-full flex items-center lg:gap-4 gap-2 lg:text-[5vw] text-[8vw] font-extrabold text-grayLight'>OUR STACK<span className='text-primary'>.</span></h1>
        </div>
        <div className='lg:col-span-4 md:col-span-12 col-span-12'>
          <p className='w-full text-grayDark font-bold text-lg py-5'>Mostly about front end stuff *couse i am. My focus is on design and animation, and if i had more oportunity, i would like to learn mobile</p>
        </div>
      </div>
      <div className='gap-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-3'>
        <Button text='React' variant="light" />
        <Button text='Next' variant="white" />
        <Button text='Vue' variant="white" />
        <Button text='Bootstrap' variant="white" />
        <Button text='Tailwind' variant="white" />
        <Button text='Framer Motion' variant="white" />
        <Button text='Gsap' variant="white" />
      </div>
    </LayoutDark>
  )
}

export default Index;
