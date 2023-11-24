import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

import Gallery from './Gallery'


function Glipmses() {
    return (
        <div className='w-full py-10 md:py-20'>
            <div className='below-bg flex flex-col items-center justify-center w-full h-full bg-[#260441]'>
                <div className='flex items-center justify-center w-full'>
                    <div className='md:px-24 md:py-2 uppercase underline font-museoModernoMedium text-sm md:text-xl  text-white/50 flex-shrink-0 underline-offset-4'>
                        glimpses of the house of developers 2022
                    </div>
                </div>

                <div className='w-full  md:mt-10 rounded-3xl'>
                    <Gallery />
                </div>
            </div>
        </div>
    )
}

export default Glipmses