import Link from 'next/link'
import React from 'react'

function ContactUs() {
    return (
        <div className='p-20'>
            <div className='sponsor-bg px-10 py-8 rounded-2xl flex items-center justify-between w-full'>
                <div className='font-museoModernoMedium text-4xl text-white text-start uppercase leading-normal'>
                    have any doubts or
                    <br />
                    want to sponsor us?
                </div>

                <div>
                    <Link href='mailto:callshaad@gmail.com' passHref>
                        <div className='flex items-center justify-center gap-2 group text-black hover:text-white  px-6 py-2 bg-white hover:bg-transparent hover:border hover:border-white transition-all duration-200 rounded-full font-spaceGroteskMedium text-lg md:text-xl'>
                            <div>
                                Contact Us
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 relative group-hover:left-2 transition-all duration-200">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactUs