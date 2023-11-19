import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutDoD from '@/components/AboutDoD'

function index() {
  return (
    <div className='home-page '>
      {/* <Navbar /> */}
      <Hero />
      <AboutDoD />
    </div>
  )
}

export default index