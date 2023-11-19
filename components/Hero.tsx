// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import HeroSubHead from './HeroSubHead';
import HeroTicker from './HeroTicker';

function Hero() {
    return (
        <div className='flex items-center justify-center w-full h-screen text-center'>
            <div className='flex flex-col gap-4 md:gap-8 items-center justify-center w-full'>
                <div className='font-museoModernoMedium w-full flex items-center justify-center text-white text-5xl leading-tight md:text-8xl uppercase'>
                    Dungeons of Developers
                </div>
                <HeroSubHead />
                <div className='relative flex items-center justify-center top-52 md:top-64 w-full'> 
                    <HeroTicker />
                </div>
            </div>
        </div>
    );
}

export default Hero;
