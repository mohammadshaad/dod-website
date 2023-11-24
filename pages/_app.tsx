// pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="FYIVITC brings you another thrilling Hackathon" />
        {/* Add other meta tags, title, etc. here */}
        
        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="DUNGEON OF DEVELOPERS" />
        <meta property="og:description" content="FYIVITC brings you another thrilling Hackathon" />
        <meta property="og:image" content="https://github.com/mohammadshaad/dod-website/blob/main/public/images/metatag.png?raw=true" />
        <meta property="og:url" content="https://www.dungeonofdevs.tech" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags (for Twitter Card) */}
        <meta name="twitter:card" content="https://github.com/mohammadshaad/dod-website/blob/main/public/images/metatag.png?raw=true" />
        <meta name="twitter:title" content="DUNGEON OF DEVELOPERS" />
        <meta name="twitter:description" content="FYIVITC brings you another thrilling Hackathon" />
        <meta name="twitter:image" content="https://github.com/mohammadshaad/dod-website/blob/main/public/images/metatag.png?raw=true" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* CSS Reset or Normalize.css */}
        {/* <link rel="stylesheet" href="path-to-reset-or-normalize.css" /> */}

        {/* Your custom stylesheets or fonts */}
        {/* <link rel="stylesheet" href="path-to-your-custom-styles.css" /> */}
        
        {/* Title */}
        <title>DUNGEON OF DEVELOPERS</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
