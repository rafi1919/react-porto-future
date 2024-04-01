// import { useState } from 'react'
import Button from "../../UI/Components/Button"
// import Navbar from "../../UI/Components/Navbar"

const Index =()=> {

  return (
    <>
      <div className='w-full h-full bg-primary px-5 md:px-3'>
        <div className='mx-auto lg:grid md:flex flex lg:grid-cols-12 md:flex-col-reverse flex-col-reverse w-full pt-20'>
          <div className="lg:col-span-7 md:col-span-12 col-span-12">
              <div className=' w-full'>
                <h1 className='lg:text-[13vw] md:text-[20vw] text-[20vw] font-extrabold lg:leading-[10rem] md:leading-[10rem] leading-[7rem] text-green'>DIGITIZE IDEAS</h1>
              </div>
            
          </div>
          <div className="lg:col-span-5 md:col-span-12 col-span-1">
            <div className="w-full h-[300px] rounded-lg bg-grayDark my-3">

            </div>
            <p className="text-blackLight">Hi, im <span className="font-bold">Rafi</span> a content creator and front-end developer who like to animate website. I can use React, Next, Vue but react in daily basis. I Learn by project and aiming to travel the world through my code</p>
          </div>
        </div>
        <div className='flex flex-row gap-7 mt-4 items-center'>
          <div className="flex flex-row gap-7 lg:w-2/6 md:w-full w-full">
              <Button 
                  text='Frontend Developer' 
                  variant="white"
                  />
              <Button 
                text='Content Creator' 
                variant="white"
                />
          </div>
                <div className="lg:w-4/6 md:w-full w-[100px] h-[1px] bg-grayDark"/>
          </div>
      </div>
    </>
  )
}

export default Index
