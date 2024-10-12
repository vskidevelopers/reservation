import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ title, image }) => {
  return (
    <div className="relative h-80 mt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Black Shade Overlay */}
        <div className="absolute inset-0 h-full w-full bg-[#181b1c]/75"></div>
      </div>
      {/* Heading Tag */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl  font-normal">{title}</h1>
        {/* Breadcrumb */}
        <div className=" px-6 py-2 text-white">
          <Link to="/" className="hover:text-white/80">
            Home
          </Link>{" "}
          | {title}
        </div>
      </div>
      {/* Breadcrumb */}
      {/* <div className="absolute bottom-0 left-0 px-6 py-2 bg-black bg-opacity-50 text-white">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>{" "}
          | Gallery
        </div> */}
    </div>
  );
};

export default HeroSection;
