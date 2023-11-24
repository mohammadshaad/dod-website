// @ts-nocheck
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SponsCard from "./SponsCard";
import Augeo from "@/public/images/past-spons/augeo.png";
import CodingBlocks from "@/public/images/past-spons/codingblocks.png";
import CodingNinjas from "@/public/images/past-spons/codingninjas.png";
import Devfolio from "@/public/images/past-spons/devfolio.webp";
import Dubeat from "@/public/images/past-spons/dubeat.jpeg";
import Fastrack from "@/public/images/past-spons/fastrack.png";
import Filecoin from "@/public/images/past-spons/filecoin.png";
import GeeksForGeeks from "@/public/images/past-spons/gfg.png";
import Icici from "@/public/images/past-spons/icici.png";
import Magoosh from "@/public/images/past-spons/magoosh.png";
import MyWays from "@/public/images/past-spons/myways.png";
import Polygon from "@/public/images/past-spons/polygon.png";
import Replit from "@/public/images/past-spons/replit.png";
import Roostoo from "@/public/images/past-spons/roostoo.png";
import Scaler from "@/public/images/past-spons/scaler.png";
import Valeo from "@/public/images/past-spons/valeo.png";
import Yocket from "@/public/images/past-spons/yocket.png";
import Yuvaa from "@/public/images/past-spons/yuvaa.webp";
import Zeeve from "@/public/images/past-spons/zeeve.png";
import Image from "next/image";
function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);


    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: window.innerWidth > 768 ? "-1100vw" : "-2400vw", // Adjust the values based on your design
            },
            {
                translateX: "100vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "center center",
                    end: "10000 center",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            {
                /* A return function for killing the animation on component unmount */
            }
            pin.kill();
        };
    }, []);

    return (
        <section className="" id="timeline">
            {/* <div className='absolute -left-12 md:left-0 '>
        <div className='mt-20 md:mt-28 underline font-museoModernoMedium text-xs md:text-lg -rotate-90 text-white/50 flex-shrink-0'>
          DOMAINS OF THE HACKATHON
        </div>
      </div> */}
            {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

            {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
            <div ref={triggerRef} className="flex items-center justify-start">
                <div ref={sectionRef} className="flex items-center justify-start gap-10 md:gap-10">
                    <div className='scroll-section underline font-museoModernoMedium text-xs md:text-lg -rotate-90 text-white/50 flex-shrink-0 underline-offset-4'>
                        OUR PAST SPONSORS
                    </div>


                    <div className="scroll-section">

                        <SponsCard img={Augeo} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={CodingBlocks} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={CodingNinjas} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Devfolio} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Dubeat} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Fastrack} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Filecoin} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={GeeksForGeeks} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Icici} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Magoosh} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={MyWays} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Polygon} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Replit} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Roostoo} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Scaler} />
                        {" "}
                    </div>

                    <div className="scroll-section">

                        <SponsCard img={Valeo} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Yocket} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Yuvaa} />
                        {" "}
                    </div>
                    <div className="scroll-section">

                        <SponsCard img={Zeeve} />
                        {" "}
                    </div>


                    <div className='scroll-section underline font-museoModernoMedium text-xs md:text-lg -rotate-90 text-white/50 flex-shrink-0 underline-offset-4'>
                        OUR PAST SPONSORS
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollSection;