import React from 'react'

const About = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-100 py-32'>
        <div className="images relative w-full h-[36vw]">
            <img data-scroll data-scroll-speed=".2" className='absolute h-full w-[32vw] object-cover left-[8%] -top-[20%] ' src="https://a.storyblok.com/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg/m/650x920/filters:format(webp):quality(70)" alt="" />
            <img className='h-[23vw] w-[40vw] absolute bottom-20 right-[10%] object-cover' src="https://a.storyblok.com/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg/m/450x301/filters:format(webp):quality(70)" alt="" />
            <img data-scroll data-scroll-speed="-.1" className='w-[15vw] absolute h-1/2 right-[1.5%] -bottom-[16%]' src="https://a.storyblok.com/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg/m/650x924/filters:format(webp):quality(70)" alt="" />
        </div>
        <div className='w-full py-10 px-20 mt-32 text-black'>
        <div className='w-[60vw] ml-[21%] pr-[6%] mb-[12%]'>
            <h1 className=' leading-tight text-[3.6vw] mb-16 tracking-tighter font-normal'>We partner with brands and businesses that create exceptional experiences where people live, work and unwind.</h1>
            <h4 className='text-[1.2vw] mb-1 opacity-40 font-semibold'>Interior Design & Furniture</h4>
            <h4 className='text-[1.2vw] mb-1 opacity-40 font-semibold'>Architecture & Real Estate</h4>
            <h4 className='text-[1.2vw] opacity-40 font-semibold'>Hospitality, Travel & Tourism</h4>
        </div>
        </div>
    </div>
  )
}

export default About