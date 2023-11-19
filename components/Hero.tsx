// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

function Hero() {
    return (
        <div className='flex items-center justify-center w-full h-screen text-center'>
            <div className='flex flex-col gap-4 md:gap-8 items-center justify-center w-full'>
                <div className='font-museoModernoMedium w-full flex items-center justify-center text-white text-5xl leading-tight md:text-8xl uppercase'>
                    Dungeons of Developers
                </div>
                <div className='text-sm md:text-3xl font-spaceGroteskRegular text-white'>
                    {/* FYIVITC brings you another thrilling Hackathon */}
                    <Typewriter
                        options={{
                            strings: ['FYIVITC brings you another thrilling Hackathon!'],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 10,
                            pauseFor: 2500,
                            cursor: '',
                        }}

                        // onInit={(typewriter) => {
                        //     typewriter.typeString('FYIVITC brings you another thrilling Hackathon!')
                        //         .callFunction(() => {
                        //             // console.log('String typed out!');
                        //         })
                        //         .pauseFor(2500)
                        //         .deleteAll()
                        //         .loop()
                        //         .callFunction(() => {
                        //             // console.log('All strings were deleted');
                        //         })
                        //         .start();
                        // }}
                    />

                </div>
            </div>
        </div>
    );
}

export default Hero;
