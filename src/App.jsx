import React from 'react'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import LocomotiveScroll from 'locomotive-scroll';
import About from './components/About';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Data from './components/Data';
import Image from './components/Image';

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    
    <div className='w-full min-h-screen bg-zinc-900 text-white font-["TWK Lausanne-400"]'>
    <Nav />
    <LandingPage />
    <About />
    <Page4 />
    <Page5 />
    <Data />
    <Image/>
    <div className='w-full h-[100vh] bg-zinc-900'></div>
    </div>
  )
}

export default App