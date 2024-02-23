import { motion } from 'framer-motion'
import React from 'react'

const Data = () => {
  return (
    <div className='w-full py-32  bg-[#FFFFFF] text-black'>
      <div className='w-1/2 mx-auto'>
      {['Data', 'Informs', 'Emotion', 'Converts'].map((i, index) => {
        return <div className='masker overflow-hidden'>
      <motion.h1 
       initial={{ y: "100%", rotate: "7deg", opacity: 0 }}
       whileInView={{ y: "0", rotate: "0deg", opacity: 1 }} 
       transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} 
       className='text-[10.1vw] leading-[9vw] origin-right tracking-tighter flex items-center'>
      {index === 2 && (<span className='inline-block w-28 h-4 mt-10 bg-zinc-900'></span>)}
      {i}
      </motion.h1>
      </div>
      })}
      
      </div>
    </div>
  )
}

export default Data