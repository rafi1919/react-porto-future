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

         gsap.fromTo('.text-right',{
            x:500,
            duration:4
         },{
            scrollTrigger:{
                trigger:'.text-right',
                start:'top center',
                end: '+=800',
                toggleActions:'restart pause reverse none',
                scrub:true,
                pin:'true',
                // markers:true
              },
              x: -500,
              duration:4,
            
        })
        gsap.fromTo('.text-left',{
            x:-500,
            duration:4
         },{
            scrollTrigger:{
                trigger:'.text-left',
                start:'top center',
                end: '+=800',
                toggleActions:'restart pause reverse none',
                scrub:true,
                pin:'true',
                // markers:true
              },
              x:500,
              duration:4,
            
        })
    })

    return(
        <div className="banner w-full h-[100vh] bg-primary p-5">
            <div className="bg-blackLight rounded-[50px] w-full h-full overflow-hidden flex flex-col">
                <p className="text-right text-[100px] font-semibold text-white">HIRE ME</p>
                <p className="text-left text-[100px] font-semibold text-white">HIRE ME</p>
                <p className="text-right text-[100px] font-semibold text-white">HIRE ME</p>
                <p className="text-left text-[100px] font-semibold text-white">HIRE ME</p>

            </div>
        </div>

    )
}
export default Index