// @ts-nocheck
import React from 'react'

function Card(props) {
  return (
    <div className=''>
      <div className='card-bg flex items-end pb-20 pl-8 md:pl-10 shadow-2xl backdrop-blur-lg uppercase justify-start font-museoModernoMedium text-4xl md:text-7xl w-[25rem] md:w-[40rem] h-[25rem] md:h-[40rem] text-white'>
        {props.title}
      </div>
    </div>
  )
}

export default Card