import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutDoD from '@/components/AboutDoD'
import Domains from '@/components/Domains'

function index() {
  return (
    <div className='home-page '>
      {/* <Navbar /> */}
      <Hero />
      <AboutDoD />
      <Domains />
    </div>
  )
}

export default index