import React from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function Gallery() {
  return (
    <div className="w-full ">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="slider-container flex items-center justify-center rounded-3xl">
          <div className="slider flex items-center justify-center flex-col ">
            <div className="slider-row flex items-center justify-center "></div>
            {/* <button className='viewmore flex items-center justify-center gap-4'>Click Here <img src={arrow} alt='arrow'/></button> */}
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Gallery;
