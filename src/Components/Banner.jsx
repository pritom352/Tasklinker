import React from "react";
import img_1 from "../assets/mockup-banner-portrait-professional-happy-man-web-designer-working-online-website-design-grid-advertising-space-business-worker-smile-seo-project-development-startup-agency_590464-224305.avif";
import img_2 from "../assets/green-background-work-cartoon-character-virtual-desk_1077802-429486.avif";
import img_3 from "../assets/high-quality-cartoon-office-worker-desk-located-right-side-isolated-panoramic-blue-backgr_1077802-426558.avif";

const Banner = () => {
  return (
    // <div className=" flex  h-[500px] max-w-full bg-linear-to-r from-cyan-500 to-blue-500 my-14  ">
    //   <div className="flex-1 flex items-center text-center">
    //     <div>
    //       <h1 className="text-5xl font-bold">Box Office News!</h1>
    //       <p className="py-6">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi.
    //       </p>
    //       <label className="input">
    //         <svg
    //           className="h-[1em] opacity-50"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //         >
    //           <g
    //             strokeLinejoin="round"
    //             strokeLinecap="round"
    //             strokeWidth="2.5"
    //             fill="none"
    //             stroke="currentColor"
    //           >
    //             <circle cx="11" cy="11" r="8"></circle>
    //             <path d="m21 21-4.3-4.3"></path>
    //           </g>
    //         </svg>
    //         <input type="search" required placeholder="Search" />
    //       </label>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    //   <div className=" flex-1 relative">
    //     {" "}
    //     <img
    //       src={img_1}
    //       className="max-w-[200px]  h-[200px] rounded-lg shadow-2xl absolute top-11 left-7"
    //     />
    //     <img
    //       src={img_2}
    //       className="max-w-[200px]  h-[200px] rounded-lg shadow-2xl absolute top-71 left-27"
    //     />
    //     <img
    //       src={img_3}
    //       className="max-w-[250px]  h-[250px] rounded-lg shadow-2xl absolute top-20 left-64"
    //     />
    //     <img
    //       src={img_4}
    //       className="max-w-[200px]  h-[200px] rounded-lg shadow-2xl absolute top-7  right-19"
    //     />
    //     <img
    //       src={img_5}
    //       className="max-w-[220px]  h-[220px] rounded-lg shadow-2xl absolute  bottom-8  right-6"
    //     />
    //   </div>
    // </div>
    <div className="carousel   w-full h-auto lg:h-[600px] mt-15 rounded-2xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img_2} className="w-full" />
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
