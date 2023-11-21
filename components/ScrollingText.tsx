// // // components/ScrollingText.js
// @ts-nocheck
// import { useEffect, useState } from 'react';

// const ScrollingText = () => {


//     return (
//         <div className=' flex items-center justify-center pb-40 px-12  md:px-40'>
//             <div className=' flex items-start justify-center  mt-24'>
//                 <div className='absolute -left-12 md:left-0 '>
//                     <div className='mt-20 md:mt-28 underline font-museoModernoMedium text-xs md:text-lg -rotate-90 text-white/50 flex-shrink-0'>
//                         ABOUT THIS HACKATHON
//                     </div>
//                 </div>
//                 <p className={` text-white transition-opacity duration-300 font-spaceGroteskMedium text-xl md:text-5xl leading-relaxed md:leading-snug text-justify`}>
//                     As the most significant event in VITC, FYI brings a 2 day hackathon for students of 1st, 2nd, and 3rd years belonging to any branch of study. The proposed event will enable students to demonstrate their splendor in solving real-world problems and introduce them to doing so in competitive environments dictated by the limitations of the clock. As most hackathons do, it calls forth the need for virtues such as patience, perseverance, and cooperation in return for eminence and modest opulence.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default ScrollingText;


import { useEffect } from 'react';

const ScrollingText = () => {
  useEffect(() => {
    let paragraphs = document.querySelectorAll('.scrolling-text p');
    let spans = [];

    paragraphs.forEach(paragraph => {
      let htmlString = '';
      let pArray = paragraph.textContent.split('');

      for (let i = 0; i < pArray.length; i++) {
        htmlString += `<span>${pArray[i]}</span>`;
      }

      paragraph.innerHTML = htmlString;
    });

    spans = document.querySelectorAll('.scrolling-text span');

    function revealSpans() {
      for (let i = 0; i < spans.length; i++) {
        if (spans[i].parentElement.getBoundingClientRect().top < window.innerHeight / 2) {
          let { left, top } = spans[i].getBoundingClientRect();
          top = top - (window.innerHeight * 0.2);

          let opacityValue = 1 - ((top * 0.01) + (left * 0.001));
          opacityValue = opacityValue < 0.1 ? 0.1 : opacityValue > 1 ? 1 : opacityValue.toFixed(3);

          spans[i].style.opacity = opacityValue;
        }

        else {
          spans[i].style.opacity = 0;
        }
      }
    }

    window.addEventListener('scroll', revealSpans);
    revealSpans();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', revealSpans);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='flex items-center justify-center pb-40 px-12 md:px-40 scrolling-text'>
      <div className='flex items-start justify-center mt-24'>
        <div className='absolute -left-12 md:left-0 '>
          <div className='mt-20 md:mt-28 underline font-museoModernoMedium text-xs md:text-lg -rotate-90 text-white/50 flex-shrink-0'>
            ABOUT THIS HACKATHON
          </div>
        </div>
        <p className={`text-white transition-opacity duration-300 font-spaceGroteskMedium text-xl md:text-5xl leading-relaxed md:leading-snug text-justify`}>
          As the most significant event in VITC, FYI brings a 2 day hackathon for students of 1st, 2nd, and 3rd years belonging to any branch of study. The proposed event will enable students to demonstrate their splendor in solving real-world problems and introduce them to doing so in competitive environments dictated by the limitations of the clock. As most hackathons do, it calls forth the need for virtues such as patience, perseverance, and cooperation in return for eminence and modest opulence.
        </p>
      </div>
    </div>
  );
};

export default ScrollingText;
