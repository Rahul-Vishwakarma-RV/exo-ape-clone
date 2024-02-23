import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-[220vh] relative bg-zinc-900 overflow-hidden'>
        <img data-scroll data-scroll-speed="-1.2" className='h-full w-full object-cover opacity-50' src="https://a.storyblok.com/f/133769/2500x2626/63a902ce2b/exo-ape-studio-hero.jpg/m/1920x2017/filters:format(webp):quality(70)" alt="" />
        <div className="container ml-32  absolute w-full h-full top-[18%] left-0">
          <div className="maintext">
          <h1 className='text-[10vw] leading-none tracking-tight font-regular'>Building</h1>
          <h1 className='text-[10vw] leading-none tracking-tight font-regular'>Digital</h1>
          <h1 className='text-[10vw] leading-none tracking-tight font-regular'>Presence</h1>
          <p className='mt-7 ml-3 opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <h1 className='w-[49%] text-[1.6vw] font-semibold absolute left-[43%] bottom-[42%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eos itaque, officiis aspernatur fuga excepturi! Nemo vitae accusantium </h1>
          <p className='text-[1.2vw] w-[30%] leading-[1.7vw] font-normal opacity-65 absolute right-[27%] bottom-[34%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sapiente, debitis eaque error nobis quae aliquam quam commodi qui asperiores alias aspernatur maxime quaerat dignissimos maiores repudiandae earum id eos</p>
          <button className='text-[1.2vw] absolute left-[43%] bottom-[31%]'>Our Story</button>
        </div>
    </div>
  )
}

export default LandingPage