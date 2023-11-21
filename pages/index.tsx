import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutDoD from '@/components/AboutDoD';
import Domains from '@/components/Domains';
import Image from 'next/image';
import Preloader from '@/public/images/preloader2.gif'

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className={`overflow-x-hidden bg-[#260441] h-full ${loading ? 'hidden' : ''}`}>
      {loading ? (
        // Your preloader component here
        <div className="preloader h-screen w-screen bg-primary">
          <div className="flex flex-col items-center justify-center h-full">
            <Image src={Preloader} alt="Loading..." />
          </div>
        </div>
      ) : (
        <div className='home-page'>
          {/* <Navbar /> */}
          <Hero />
          <AboutDoD />
        </div>
      )}
      {!loading && (
        <div className='below-bg'>
          <Domains />
        </div>
      )}
    </div>
  );
}

export default Index;
