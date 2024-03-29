import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  let component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".page", {
        scrollTrigger: {
          trigger: ".page2",
          start: "top top",
          pin: true,
          pinSpacing: false,
          markers: true,
          scrub: true // Smooth animation while scrolling
        }
      });

      gsap.to(".squareA", {
        x: 400,
        rotate:360,
        duration:4
      });

      gsap.to(".squareB", {
        scrollTrigger:{
          trigger:'.squareB',
          start:'top center',
          // end: '+=300',
          end: 'top 100px',
          toggleActions:'restart pause reverse none',
          scrub:true,
          pin:'true',
          // markers:true
        },
        x: 400,
        rotate:360,
        duration:4,
      });

      // gsap.to('.intro', {
      //   scrollTrigger: {
      //       trigger: '.header',
      //       start: "top top",
      //       scrub: true,
      //       end: "+=1000px"
      //   },
      //   y:'-100vh',
      //   ease: "none"
      //   })

        ScrollTrigger.create({
          trigger: ".header",
          pin: true,
          start: "top top",
          end: "+=2000",
          pinSpacing: false,
        });

    }, component); // <- selector scoping
    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={component}>
      <div className="page h-[100vh] w-full bg-blackLight mt-4 flex justify-center items-center">
        <h1 className="w-9 h-9 bg-primary squareA">Demo</h1>
      </div>
    
      {/* <div className="header">
        <div className="intro h-[100%] w-full bg-red-500 flex justify-center items-center">
          <h1 className="text-[70px] font-bold ">Demo 2</h1>
        </div>
        <div className="panel h-[100%] w-full bg-blue-500 flex justify-center items-center">
          <h1 className="text-[70px] font-bold ">Demo 2</h1>
        </div>
        <div className="panel h-[100%] w-full bg-green-500 flex justify-center items-center">
          <h1 className="text-[70px] font-bold">Demo 2</h1>
        </div>
      </div>  */}
      <div className="page h-[100vh] w-full bg-blackLight mt-4 flex justify-center items-center">
        <h1 className="w-9 h-9 bg-primary squareB">Demo</h1>
        <h1 className="w-9 h-9 bg-red-600 squareC">Demo</h1>
      </div>
      <div className="page2 h-[100vh] w-full bg-blackLight mt-4">
        <h1 className="text-[70px] font-bold demo1">Demo 1</h1>
        <h1 className="text-[70px] font-bold demo2">Demo 2</h1>
      </div>
      <div className="page h-[100vh] w-full bg-blackLight mt-4">
        <h1>Demo3</h1>
      </div>
    </div>
  );
}
