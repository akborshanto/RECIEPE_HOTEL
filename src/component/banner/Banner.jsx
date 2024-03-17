import React from "react";
import images  from  '../../../public/img/banner.jpg'
import './banner.css'

const Banner = () => {
  return (
    <div>
      <div id="banner-section" className="img">

        <div className="hero min-h-screen bg-no-repeat cover rounded-lg mt-8">
          <div className="hero-content text-center">
            <div className="  ">
              <h1 className="text-5xl font-bold text-white">
                Discover an exceptional cooking  <br /> class tailored for you!
              </h1>
              <p className="py-6 font-semibold text-2xl  text-[#fffffff33]">
              Working with Caloris is unlike working with anyone else in the business. <br /> Our world-class engineers design and execute industry-leading performance and flexibility,
              </p>
         
              <div className="text-center mt-6  ">
              
              <button className="btn outline-none border-none text-black bg-[#0BE58A] mr-16 rounded-3xl">Explore Now</button>
              <button className="btn btn-outline rounded-3xl">Our Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
