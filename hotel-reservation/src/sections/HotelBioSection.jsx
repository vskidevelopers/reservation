import React from "react";


export default function HotelBioSection({ hotel }) {
    const hotelImage = "https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg"
    return (
        <div className="py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Hotel Image */}
                <div>
                    <img src={hotel?.hotelProfile?.profilePhoto} alt={`${hotel?.hotelName} image`} className="rounded-md" />
                </div>

                {/* Hotel Description */}
                <div className="col-span-2">
                    <div className="relative flex flex-col justify-center items-start py-10">
                        <div className="w-full text-start">
                            <h2 className="text-[#FDB715] text-md font-semibold uppercase">
                                Welcome to {hotel?.hotelName}
                            </h2>
                            <div className="w-full md:w-3/4">
                                <h1 className="text-3xl font-bold capitalize">
                                    {hotel?.tagline ? hotel.tagline : "Experience Unmatched Comfort and Luxury"}
                                </h1>
                            </div>
                        </div>

                        {/* Faded background text */}
                        <div className="absolute top-0 left-0 h-full w-full flex justify-end items-baseline opacity-10">
                            <h1 className="text-7xl md:text-9xl font-bold">Our Bio</h1>
                        </div>

                        {/* Hotel Bio */}
                        <div className="my-5">
                            <p>
                                {hotel?.hotelProfile?.bio || "Our hotel offers a unique blend of luxury, comfort, and exceptional service. From our stunning rooms to our state-of-the-art facilities, we strive to provide our guests with a memorable experience. Our team is dedicated to ensuring your stay is nothing short of exceptional, whether you're here for business or leisure."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
