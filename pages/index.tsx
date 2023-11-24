// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutDoD from '@/components/AboutDoD';
import Domains from '@/components/Domains';
import PastSpons from '@/components/PastSpons';
import Image from 'next/image';
import PreloaderAnimation from '@/components/Preloader';
import AboutFYI from '@/components/AboutFYI';
import Glipmses from '@/components/Glipmses';

function Index() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {

    const fontsToLoad = [
      { name: 'MuseoModerno-Regular', url: 'url(/fonts/MuseoModerno/MuseoModerno-Regular.ttf)' },
      { name: 'MuseoModerno-Bold', url: 'url(/fonts/MuseoModerno/MuseoModerno-Bold.ttf)' },
      { name: 'MuseoModerno-Light', url: 'url(/fonts/MuseoModerno/MuseoModerno-Light.ttf)' },
      { name: 'MuseoModerno-SemiBold', url: 'url(/fonts/MuseoModerno/MuseoModerno-SemiBold.ttf)' },
      { name: 'MuseoModerno-ExtraBold', url: 'url(/fonts/MuseoModerno/MuseoModerno-ExtraBold.ttf)' },
      { name: 'SpaceGrotesk-Regular', url: 'url(/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf)' },
      { name: 'SpaceGrotesk-Bold', url: 'url(/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf)' },
    ];



    // Function to load a font
    //@ts-ignore
    function loadFont(fontInfo) {
      const font = new FontFace(fontInfo.name, fontInfo.url);
      return font.load().then(() => {
        document.fonts.add(font);
        return true;
      }).catch((error) => {
        console.error('Font loading error:', error);
        return false;
      });
    }

    // Load all fonts and check if they are loaded
    Promise.all(fontsToLoad.map(loadFont))
      .then((results) => {
        // Check if all fonts are successfully loaded
        const allFontsLoaded = results.every((loaded) => loaded);
        // Display the loader for at least 1 second
        setTimeout(() => {
          setFontsLoaded(allFontsLoaded);
        }, 1000); // 1000 milliseconds (1 second)
      });

  }, []);

  return (
    <div className={` w-full h-full `}>
      {
        fontsLoaded ? (
          <div className='overflow-x-hidden bg-[#260441] h-full'>
            <div className='home-page'>
              {/* <Navbar /> */}
              <Hero />
              <AboutDoD />
            </div>
            <div className='below-bg'>
              <Domains />
              <PastSpons />
              <AboutFYI />
              <Glipmses />
            </div>
          </div>
        ) : (
          <PreloaderAnimation />
        )
      }

    </div>
  );
}

export default Index;
