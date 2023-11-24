import React from 'react'
import { faInstagram, faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';


function Footer() {
    return (
        <div className='bg-tertiary w-full flex md:flex-row flex-col items-start md:gap-2 gap-4 md:items-center justify-center p-10 md:p-20'>
            <div className='flex items-start justify-center flex-col gap-2 w-full'>
                <div className='uppercase font-museoModernoMedium text-4xl text-black '>
                    Dungeons of developers
                </div>
                <div className='uppercase font-spaceGroteskRegular text-xl'>
                    FYIVITC
                </div>
            </div>

            <div className='flex gap-4 sm:gap-2'>
                <Link href='https://www.instagram.com/fyivitc' target="_blank" rel="noreferrer">
                    <div className='instagram-icon-contact'>
                        <FontAwesomeIcon icon={faInstagram} className='w-10 p-2' />
                    </div>
                </Link>
                <Link href='https://www.linkedin.com/company/fraternity-of-young-innovators/mycompany/' target="_blank" rel="noreferrer">
                    <div className='instagram-icon-contact'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='w-10 p-2' />
                    </div>
                </Link>
                <Link href='https://www.facebook.com/fyivitc/' target="_blank" rel="noreferrer">
                    <div className='instagram-icon-contact'>
                        <FontAwesomeIcon icon={faFacebook} className='w-10 p-2' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Footer