import {useEffect} from 'react'
import { Link } from 'react-router-dom';
import LayoutDark from '../../UI/Components/LayoutDark';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index=()=>{

    useEffect(() => {
        gsap.to('.parallax-container', {
          y: 70,
          duration: 2,
          scrollTrigger: {
            trigger: ".parallax-container",
            start: "top 80%", 
            end: "top center",
            scrub: 3,
            toggleActions:'restart pause reverse none',
            // markers:true
          }
        });
    
      }, []);
    return(
            <LayoutDark>
                    <div className='w-full flex text-center justify-center h-[50vh] bg-primary rounded-b-[50px]'>
                      <div className='parallax-container'>
                        <h1 className='lg:text-[5vw] text-[9vw]  lg:leading-[5rem]  md:leading-[5rem]  leading-[3rem] text-blackDark font-bold'>LETS DISCUSS <br/>YOUR IDEAS </h1>
                        <div className='flex flex-row gap-4 items-center justify-center font-medium mt-7'>
                          <p className='py-2 px-5 lg:text-base md:text-[11px] text-[8px] rounded-full border-[1px] border-blackDark text-primary w-fit bg-blackDark'>CONTACT NOW</p>
                          <p className='py-2 px-5 lg:text-base md:text-[11px] text-[8px] rounded-full border-[1px] border-blackDark text-blackDark w-fit'><Link to="https://www.linkedin.com/in/rafi-alifianto-818877245/">HIRE ME</Link></p>
                        </div>
                      </div>
                    </div>
            </LayoutDark>
            

    )
}
export default Index