import { useEffect } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index =()=>{
    useEffect(()=>{
        // gsap.fromTo('.text-right',{
        //     x:300,
        // }, {
        //     x:-500,
        //     scrollTrigger:{
        //         trigger:'.banner',
        //         toggleActions:'restart pause reverse none',
        //         start:'top center',
        //         end:'+=500',
        //         markers:true

        //     },
        // })

         gsap.fromTo('.from-right',{
            x:500,
            duration:4
         },{
            scrollTrigger:{
                trigger:'.from-right',
                start:'top center',
                end: '+=800',
                toggleActions:'restart pause reverse none',
                scrub:true,
                pin:'true',
                // markers:true
              },
              x:0,
              duration:4,
            
        })
        gsap.fromTo('.from-left',{
            x:-500,
            duration:4
         },{
            scrollTrigger:{
                trigger:'.from-left',
                start:'top center',
                end: '+=800',
                toggleActions:'restart pause reverse none',
                scrub:true,
                pin:'true',
                // markers:true
              },
              x:0,
              duration:4,
            
        })
    })

    return(
        <div className="banner w-full h-[150vh] bg-primary p-5 flex ">
        <div className="bg-blackLight rounded-[50px] w-full h-[90vh] overflow-hidden lg:leading-[7rem] md:leading-[10rem] leading-[7rem] flex flex-col justify-center items-center">
            <p className="from-right lg:text-[8vw] md:text-[20vw] text-[20vw] font-semibold text-white">HIRE ME</p>
            <p className="from-left lg:text-[8vw] md:text-[20vw] text-[20vw] font-semibold text-white">HIRE ME</p>
            <p className="from-right lg:text-[8vw] md:text-[20vw] text-[20vw] font-semibold text-white">HIRE ME</p>
            <p className="from-left lg:text-[8vw] md:text-[20vw] text-[20vw] font-semibold text-white">HIRE ME</p>
        </div>
    </div>

    )
}
export default Index