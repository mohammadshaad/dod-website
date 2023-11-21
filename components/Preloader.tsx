import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Preloader from '@/public/images/preloader.gif';

const PreloaderAnimation = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center z-50 bg-primary'>

            <Head>
                <link
                    rel="preload"
                    href="/fonts/MuseoModerno/MuseoModerno-Medium.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/MuseoModerno/MuseoModerno-Bold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/MuseoModerno/MuseoModerno-Light.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/MuseoModerno/MuseoModerno-SemiBold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/MuseoModerno/MuseoModerno-ExtraBold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/SpaceGrotesk/SpaceGrotesk-Medium.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/SpaceGrotesk/SpaceGrotesk-SemiBold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/fonts/SpaceGrotesk/SpaceGrotesk-ExtraBold.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous" />
                <link
                    rel="preload"
                    href="/fonts/SpaceGrotesk/SpaceGrotesk-Black.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous" />
                <link
                    rel="preload"
                    href="/fonts/SpaceGrotesk/SpaceGrotesk-ExtraBlack.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous" />
                <link
                    rel="preload"
                    href="/fonts/SpaceGrotesk/SpaceGrotesk-Light.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous" />
                <link
                    rel="preload"
                    href="/fonts/SpaceGrotesk/SpaceGrotesk-Thin.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous" />
            </Head>
            <Image src={Preloader} alt='Loading...' />
        </div>
    );
};

export default PreloaderAnimation;
