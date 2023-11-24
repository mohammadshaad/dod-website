import React from 'react'
import Image from 'next/image'
import FYILogo from '@/public/images/fyi-logo.svg'

function AboutFYI() {
    return (
        <div className='text-white p-10 md:p-20 flex flex-col gap-4 items-center md:items-start  justify-center'>
            <div className='md:px-24 md:py-2 underline font-museoModernoMedium text-sm md:text-xl  text-white/50 flex-shrink-0 underline-offset-4'>
                ABOUT FYI
            </div>
            <div className='fyi-bg shadow-2xl flex items-start justify-center flex-col rounded-3xl'>
                <div className='w-28 md:w-36 relative bottom-10 md:bottom-5 right-6   md:right-10 '>
                    <Image src={FYILogo} alt='FYI Logo' />
                </div>
                <p className='text-xl flex items-center justify-center md:text-4xl font-spaceGroteskMedium relative bottom-5 md:bottom-10 pb-10 md:pb-10 px-10 md:px-24 text-justify !leading-snug	 '>
                    Fraternity of Young Innovators (FYI) club is an active social club in VIT Chennai which give awareness about social problems with curious, passionate young minds in their club. This is one of the largest clubs of VIT Chennai with lots of talents in their club
                </p>
            </div>
        </div>
    )
}

export default AboutFYI