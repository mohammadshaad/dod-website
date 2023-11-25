// @ts-nocheck
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Eventcard from "./Card";
import Image from "next/image";
function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: window.innerWidth > 768 ? "150vw" : "260vw",
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center center",
          end: "6000 center",
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
        <div ref={sectionRef} className="flex items-center justify-start gap-2 md:gap-6">
          <div className='scroll-section underline font-museoModernoMedium text-xs md:text-lg -rotate-90 text-white/50 flex-shrink-0 underline-offset-4'>
            DOMAINS OF THE HACKATHON
          </div>


          <div className="scroll-section">

            <Eventcard title="Blockchain" />
            {" "}
          </div>
          <div className="scroll-section">

            <Eventcard title="UX/UI Design" />
            {" "}
          </div>
          <div className="scroll-section">

            <Eventcard title="Data Science" />
            {" "}
          </div>
          <div className="scroll-section">

            <Eventcard title="Web Development" />
            {" "}
          </div>
          <div className="scroll-section">

            <Eventcard title="App Development" />
            {" "}
          </div>

          <div className='scroll-section underline font-museoModernoMedium text-xs md:text-lg -rotate-90 text-white/50 flex-shrink-0 underline-offset-4'>
            DOMAINS OF THE HACKATHON
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;