import React from "react";

const Banner = () => {
  return (
    <div>
      <div id="banner-section" className="bg-[url('../../../public/img/Rectangle 1 (1).png')]">
        <div className="hero min-h-screen bg-base-200 rounded-lg mt-8">
          <div className="hero-content text-center">
            <div className="  ">
              <h1 className="text-5xl font-bold">
                Discover an exceptional cooking  <br /> class tailored for you!
              </h1>
              <p className="py-6">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+  <br />coding problems to become an
                exceptionally well world-class Programmer.
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
