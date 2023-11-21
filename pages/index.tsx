import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutDoD from '@/components/AboutDoD'
import Domains from '@/components/Domains'

function index() {
  return (
    <div className='overflow-x-hidden bg-[#260441] h-full'>
      <div className='home-page '>
        {/* <Navbar /> */}
        <Hero />
        <AboutDoD />
      </div>
      <div className='below-bg'>
        <Domains />
      </div>
    </div>
  )
}

export default index