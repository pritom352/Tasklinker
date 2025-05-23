import React from "react";
import img_1 from "../assets/mockup-banner-portrait-professional-happy-man-web-designer-working-online-website-design-grid-advertising-space-business-worker-smile-seo-project-development-startup-agency_590464-224305.avif";
import { Typewriter } from "react-simple-typewriter";
import img_2 from "../assets/green-background-work-cartoon-character-virtual-desk_1077802-429486.avif";
import img_3 from "../assets/high-quality-cartoon-office-worker-desk-located-right-side-isolated-panoramic-blue-backgr_1077802-426558.avif";

const Banner = () => {
  return (
    <div className="carousel    w-full h-[150px] md:h-[250px] lg:h-[550px] mt-15 rounded-2xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img_2} className="w-full" />
        <div className="  absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-center">
          <h1 className=" text-xl md:text-2xl lg:text-3xl text-shadow-lg text-blue-500 italic font-bold">
            <span className="text-black">Your Work, Our Freelancers –</span>
            <Typewriter
              words={[
                "Post a Task",
                "Hire a Freelancer",
                "Get Work Done",
                "Grow Your Business",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img_1} className="w-full" />
        <div className="  absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-center">
          <h1 className=" text-xl md:text-2xl lg:text-3xl  text-shadow-lg text-blue-500 italic font-bold">
            <span className="text-black">Your Work, Our Freelancers –</span>
            <Typewriter
              words={[
                "Post a Task",
                "Hire a Freelancer",
                "Get Work Done",
                "Grow Your Business",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img_3} className="w-full" />
        <div className="  absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-center">
          <h1 className=" text-xl md:text-2xl lg:text-3xl text-shadow-lg text-blue-500 italic font-bold">
            <span className="text-black">Your Work, Our Freelancers –</span>
            <Typewriter
              words={[
                "Post a Task",
                "Hire a Freelancer",
                "Get Work Done",
                "Grow Your Business",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
