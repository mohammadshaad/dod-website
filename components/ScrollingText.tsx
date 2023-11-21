// // components/ScrollingText.js
// @ts-nocheck
import { useEffect, useState } from 'react';

const ScrollingText = () => {


    return (
        <div className=' flex items-center justify-center p-40 px-40'>
            <div className=' flex items-start justify-center  mt-24'>
                <div className='absolute left-0 '>
                    <div className='mt-28 underline font-museoModernoMedium text-lg -rotate-90 text-white/50 flex-shrink-0'>
                        ABOUT THIS HACKATHON
                    </div>
                </div>
                <p className={` text-white transition-opacity duration-300 font-spaceGroteskMedium text-5xl leading-snug text-justify`}>
                    As the most significant event in VITC, FYI brings a 2 day hackathon for students of 1st, 2nd, and 3rd years belonging to any branch of study. The proposed event will enable students to demonstrate their splendor in solving real-world problems and introduce them to doing so in competitive environments dictated by the limitations of the clock. As most hackathons do, it calls forth the need for virtues such as patience, perseverance, and cooperation in return for eminence and modest opulence.
                </p>
            </div>
        </div>
    );
};

export default ScrollingText;
