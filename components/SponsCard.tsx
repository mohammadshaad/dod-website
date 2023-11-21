// @ts-nocheck
import React from 'react'
import Image from 'next/image'

function Card(props) {
    return (
        <div className=''>
            <div className='group card-bg flex items-center shadow-2xl uppercase justify-center font-museoModernoMedium text-4xl md:text-7xl w-[25rem] md:w-[40rem] h-[25rem] md:h-[40rem] text-white'>
                <div className='w-80 h-80 flex items-center justify-center bg-white'>
                    <Image src={props.img} className={`   grayscale group-hover:grayscale-0  duration-200 transition-all`} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Card