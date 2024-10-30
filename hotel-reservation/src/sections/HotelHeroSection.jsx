import React from "react";
import { Link } from "react-router-dom";

const HotelHeroSection = ({ hotel }) => {
    console.log("Hotel data for hotel details page >> ", hotel);

    return (
        <div className="relative h-80 mt-16">
            {/* Background Image */}
            <div
                className="absolute inset-0 h-full w-full bg-cover bg-center"
                style={{
                    backgroundImage: `url(${hotel.image})`, // Assuming hotel object has an image property
                }}
            >
                {/* Black Shade Overlay */}
                <div className="absolute inset-0 h-full w-full bg-[#181b1c]/75"></div>
            </div>

            {/* Heading and Welcome Message */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Welcome to {hotel.hotelName}
                </h1>

                {/* Breadcrumb */}
                <div className="px-6 py-2 text-white text-lg">
                    <Link to="/" className="hover:text-white/80">
                        Home
                    </Link>{" "}
                    | {hotel.hotelName}
                </div>
            </div>
        </div>
    );
};

export default HotelHeroSection;
