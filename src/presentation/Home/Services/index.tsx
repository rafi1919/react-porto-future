import { useState, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge';
import Button from "../../UI/Components/Button"
import { FaArrowUp} from "react-icons/fa6";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from 'react-router-dom';
import CardModal from '../../UI/Components/CardModal';


gsap.registerPlugin(ScrollTrigger);


const serviceItems=[
  {
    title:'NFT Website',
    content:[{
      subTitle:'Mekaverse',
      image:'/image/porto-meka.png',
      link:'https://vue-mekaverse-mg89.vercel.app/',
      stack:'Vue, Bootstrap, Data Aos'
    }]
  },
  {
    title:'Game Website',
    content:[{
      subTitle:'Valorant',
      image:'/image/porto-valo.png',
      link:'https://next-rhino-valorant-psi.vercel.app/',
      stack:'Next, Typescript, Tailwind, Framer Motion'

    },
   ],
  },
  {
    title:'Admin Website',
    content:[{
      subTitle:'Warung Cell Admin',
      image:'/image/porto-warung.png',
      stack:'Laravel, Bootstrap, MySql'
    },
    {
      subTitle:'Digies Perpus Admin',
      image:'/image/porto-digies.png',
      stack:'Html, CSS, PHP, Bootstrap, MySql'
    },
    {
      subTitle:'Sistem Kepegawaian SD Aisyiyah',
      image:'/image/porto-pandes.png',
      stack:'Html, CSS, PHP, Bootstrap, MySql'
    }]
  },
  {
    title:'Random Website',
    content:[{
      subTitle:'Resto Friendo',
      image:'/image/porto-resto.png',
      link:'https://frontend-dev-reactjs-rafi-ihsan.vercel.app/',
      stack:'React, Bootstrap'
    },
    {
      subTitle:'CountryDex',
      image:'/image/porto-countrydex.png',
      link:'https://react-agile-test.vercel.app/',
      stack:'React, Gsap, Tailwind'
    },
    {
      subTitle:'Gread Blog',
      image:'/image/porto-gread.png',
      link:'https://next-synapsis-rafi.vercel.app/',
      stack:'Nextjs, Tailwind'
    },
    {
      subTitle:'Preets App',
      image:'/image/porto-preets.png',
      link:'https://vue-preets.vercel.app/',
      stack:'Vue, DaisyUi'
    },
    {
      subTitle:'Toucan Farm',
      image:'/image/porto-toucan.png',
      link:'https://react-toucan-farm.vercel.app/',
      stack:'React, Typescript, Tailwind'

    },
    {
      subTitle:'Portofolio 1',
      image:'/image/porto-porto1.png',
      link:'https://portofolio-chi-three.vercel.app/',
      stack:'React, MUI'

    },
    {
      subTitle:'Portofolio 2',
      image:'/image/porto-porto2.png',
      link:'https://react-porto-preets.vercel.app/',
      stack:'React, MUI'
    }]
  },
  


]

const Index =()=> {
  const [openIndex, setOpenIndex] = useState <number | null>(null);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  useEffect(() => {
    gsap.to('.parallax-container', {
      y: 70,
      duration: 2,
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top center", 
        end: "top 100px", 
        scrub: true,
        toggleActions:'restart pause reverse none',

      }
    });

    gsap.fromTo('.running-text', {
      x: -300,
    }, {
      x: 0,
      duration: 8,
      scrollTrigger: {
        trigger: ".running-text",
        start: "top 80%",
        end: "top 20%",
        scrub: 4,
      }
    });

    gsap.fromTo('.servicesText-section',{
      opacity: 0,
      y: 100
    }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".servicesText-section",
          start: "top 70%",
          end: "top center", 
          scrub: 4,
          // markers:true

        }
      });

  }, []);
  
  return (
    <>
      <div className='w-full min-h-screen bg-blackLight '>
        <div className="w-full bg-blackDark overflow-x-hidden flex justify-center">
            <h1 className='running-text text-[5vw] font-extrabold leading-[7rem] text-primary'>DISCUS YOUR IDEAS</h1>
        </div>

        <div className="px-7 md:px-3 max-w-[1200px] mx-auto ">

                {/* services */}
                <div className=' grid grid-cols-12 w-full pt-10 border-b-[1px] border-grayDark py-5'>
                    <div className="lg:col-span-7 md:col-span-12 col-span-12">
                            <h1 className='servicesText-section lg:text-[5vw] text-[8vw] font-extrabold leading-[7rem] text-grayLight'>OUR SERVICES <span className='text-primary'>.</span></h1>
                            <p className="text-grayDark font-bold text-lg text-justify	max-w-[550px]">I do translate UI design to code. Here is some of my work, many still on progress. I always try new code every project </p>
                    </div>
                    <div className="lg:col-span-5 md:col-span-12 col-span-12 mt-[60px]">
                        <div className="grid grid-cols-2 gap-4">
                            <Button 
                                text='Web Animation' 
                                variant="light"
                                />
                            <Button 
                                text='CRUD' 
                                variant="white"
                                />  
                            <Button 
                                text='Responsive Design' 
                                variant="white"
                                />
                            <Button 
                                text='4th Button' 
                                variant="white"
                                />  
                        </div>
                    </div>
                </div>

                {/* project */}
                <div className='pt-[80px]'>
                  {serviceItems && serviceItems.length !== 0 ? (
                    <>
                    {serviceItems.map((item, index) => (
                      <CardItem
                          key={index}
                          isOpen={openIndex === index} 
                          onToggle={()=> handleToggle(index)}
                          content={item.content}
                          title={item.title}
                          />          
                          ))}
                    </>
                  ) : (
                    <div className="flex items-center justify-center">
                      <p className="text-gray">Tidak ada serviceItem</p>
                    </div>
                  )}
                </div>

        </div>

      </div>
    </>
  )
}

export default Index


type CardProps = {
  title: string;
  content:any;
  image?:any;
  isOpen: boolean;
  onToggle: ()=> void;
};

const CardItem: React.FC<CardProps> = ({ title, content, isOpen, onToggle, }) => {
  const [height, setHeight] = useState<string>('0px');
  const contentElement = useRef<HTMLDivElement>(null);
  const [isOpenModal, setisOpenModal] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleModalOpen=(subTitle:string)=>{
    setisOpenModal(!isOpenModal)
    setSelectedCardId(subTitle)
  }

  const handleModalClose = () => {
    setisOpenModal(false);
  };

 

  useEffect(()=>{
    if(contentElement.current) {
      setHeight(isOpen ? `${contentElement.current.scrollHeight}px`: '0px')
    }
  }, [isOpen])


  return (
    <div
      onClick={onToggle} 
    >
      <div
        className={twMerge(
          'transition-500',
          isOpen ? 'gap-y-4' : 'gap-y-0',
        )}
      >
        <div className={twMerge('border-b-[1px] border-grayDark flex  justify-between items-center p-3 transition-500', isOpen ? 'bg-grayDark text-grayLight' : 'bg-none text-grayDark')}>
            <p className="lg:text-[3vw] text-[5vw] items-center font-semibold">{title} <span className={twMerge(' text-primary transition-300 font-bold', isOpen ? 'opacity-1' : 'opacity-0')}>. </span></p>
            <div className={twMerge('p-3  transition-500',isOpen ? 'bg-primary text-blackDark' : 'bg-none text-grayDark' )}>
              <FaArrowUp className="rotate-45 text-[5vw]"  />
            </div>
        </div>
        <div
          ref={contentElement}
          style={{ height: height }}
          className= "overflow-hidden transition-500">
          <div
            className={twMerge(
              ' transition-all duration-300 ',
              isOpen ? 'opacity-1' : 'opacity-0',
            )}
          ></div>
          <div className='py-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:items-baseline md:items-center items-center gap-5'>
          {content.map((item:any, index:any) => (
              <div key={index} className="py-7 max-w-[300px]" onClick={()=>handleModalOpen(item.subTitle)} >
                <img src={item.image} className='w-full  object-cover'  alt={item.subTitle} />
                <p className="font-semibold text-grayLight text-xl">{item.subTitle}</p>
              {selectedCardId === item.subTitle && (
                <CardModal isOpen={isOpenModal} onClose={handleModalClose} image={item.image} subTitle={item.subTitle} link={item.link} stack={item.stack} />     
              )}
        
              </div>
          ))}
          </div>
        
        </div>
      </div>
    </div>
  );
};
