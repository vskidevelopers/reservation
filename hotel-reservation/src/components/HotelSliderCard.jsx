import React from 'react';

const HotelSliderCard = ({ imageUrl, title, subtitle, description, buttonText, buttonLink }) => {
    return (
        <div className="relative max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Background Image */}
            <div className="relative h-96">
                <img
                    className="object-cover w-full h-full"
                    src={imageUrl}
                    alt={title}
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-5xl font-bold text-white">{title}</h1>
                    <h2 className="text-4xl text-white opacity-80 mt-2">{subtitle}</h2>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
                <p className="text-gray-600 mb-4">
                    {description}
                </p>

                {/* Learn More Button */}
                <a
                    href={buttonLink}
                    className="inline-block bg-transparent border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all"
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default HotelSliderCard;
