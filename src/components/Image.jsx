import { motion } from 'framer-motion'
import gsap, { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Image = () => {
    var imagediv = useRef(null)
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imagediv.current, {
        scrollTrigger: {
            trigger: imagediv.current,
            start: "0 90%",
            scrub: 1
        },
        ease: Power4,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    })
    })
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div ref={imagediv} style={{clipPath: "polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%)"}} className='w-[100vw] h-full bg-red-500'>
            <img className='w-full h-full object-cover'
             src="https://a.storyblok.com/f/133769/2500x1667/5224da023b/exo-ape-studio-mood.jpg/m/1920x1280/filters:format(webp):quality(70)" 
             alt=""
              />
        </div>
    </div>
  )
}

export default Image