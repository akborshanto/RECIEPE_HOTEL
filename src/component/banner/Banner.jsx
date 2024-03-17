import React from "react";
import images  from  '../../../public/img/banner.jpg'
import './banner.css'

const Banner = () => {
  return (
    <div className=" lg:p-0 p-4">
      <div id="banner-section" className="img ">

        <div className="hero min-h-screen bg-no-repeat cover rounded-lg mt-8">
          <div className="hero-content text-center">
            <div className="  ">
              <h1 className=" text-4xl  lg:text-5xl font-bold text-white mt-2 lg:mt:0">
                Discover an exceptional cooking  <br /> class tailored for you!
              </h1>
              <p className="py-6 font-semibold text-[18px] lg:text-2xl   text-white">
              Working with Caloris is unlike working with anyone else in the business. <br /> Our world-class engineers design and execute industry-leading performance and flexibility,
              </p>
         
              <div className="text-center lg:mt-6 my-6  lg:my-0 ">
              
              <button className="btn outline-none border-none text-black bg-[#0BE58A] mr-16 rounded-3xl hover:text-white">Explore Now</button>
              <button className="btn btn-outline rounded-3xl text-white">Our Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
