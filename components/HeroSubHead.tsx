import React from 'react'
import Typewriter from 'typewriter-effect';

function HeroSubHead() {
    return (
        <div className='w-full'>
            <div className='text-sm md:text-3xl font-spaceGroteskRegular text-white'>
                {/* FYIVITC brings you another thrilling Hackathon */}
                <Typewriter
                    options={{
                        strings: ['FYIVITC brings you another thrilling Hackathon!'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 5,
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
    )
}

export default HeroSubHead