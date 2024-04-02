import { useEffect, useRef } from 'react';
import Header from './Header';
import Banner from './Banner';
import Services from './Services';
import SkillBox from './SkillBox'
import Random from './Random';
import Contact from './Contact'
import Footer from '../UI/Components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {

  let component = useRef(null);
  useEffect(() => {
    
    let ctx = gsap.context(() => {
     
        ScrollTrigger.create ({
          trigger: ".banner-section",
          pin: true,
          start: "top top",
          end: "+=1000",
          pinSpacing:false
        }
      );

      ScrollTrigger.create({
        trigger: ".service-section",
        pin: true,
        start: "top top",
        end: "top center",
        pinSpacing: false,
      });

    }, component);   
    return () => ctx.revert();
    
}, []);



  return (
    <>
      <div>
        <div ref={component}>
            <Header />
            <div className='banner-section'>
              <Banner/>
            </div>
            <div className='service-section ' >
              <Services />
              <SkillBox />
              <Random />
              <Contact />
              <Footer />
              <div className='circle w-6 h-6 border-red-100 border-2 rounded-full'>

              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
