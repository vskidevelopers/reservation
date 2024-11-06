import FloatingCards from "@/components/FloatingCards";
import HotelHeroSection from "@/sections/HotelHeroSection";
import { useParams } from "react-router-dom"
import { Star, ScanEye, Lightbulb } from "lucide-react"
import HotelBioSection from "@/sections/HotelBioSection";
import Rooms from "./Rooms";
import { useHotelFunctions } from "@/utils/firebase";
import { useEffect, useState } from "react";

function HotelDetails() {
    const { hotelId } = useParams()
    const { getHotelById } = useHotelFunctions()
    console.log("hotel Id >> ", hotelId);


    const [hotelDetails, setHotelDetails] = useState()
    const getHotel = async () => {
        const fetchHotelResponse = await getHotelById(hotelId)
        console.log("fetchHotelResponse >> ", fetchHotelResponse);
        setHotelDetails(fetchHotelResponse?.hotelData)

    }

    useEffect(() => {
        getHotel()
    }, [])



    const hotel = {
        hotelName: hotelDetails?.hotelName,
        image: hotelDetails?.hotelProfile?.entrancePhoto
    };

    const coreValues = [
        "Innovation",
        "Customer-Centricity",
        "Excellence",
        "Collaboration",
        "Results-Driven",
        "Adaptability",
        "Reliability ",
        "Privacy and data security",
        "Transparency ",
        "Compliance ",
        "Quality Assurance",
    ];

    const hotelData = {
        name: "The Grand Resort",
        image: "https://example.com/path-to-hotel-image.jpg",
        tagline: "Luxury and Elegance Redefined",
        description: "Discover unparalleled luxury and exceptional service at The Grand Resort, where every detail is crafted to offer an extraordinary experience.",
    };

    return (
        <div>
            <HotelHeroSection hotel={hotel} />
            <div className="py-16 relative">
                <div className="container mx-auto px-5 md:px-20">
                    <div className="initial md:absolute -top-24 left-10 container">
                        <div className=" flex flex-col md:flex-row justify-between gap gap-3">
                            <FloatingCards
                                basis="basis-1/4"
                                title="Our Mission"
                                description={hotelDetails?.hotelProfile?.mission}
                                icon={<Star className="h-8 w-8 text-[#FDB715] mr-5" />}
                            />
                            <FloatingCards
                                basis="basis-1/4"
                                title="Our Vision"
                                description={hotelDetails?.hotelProfile?.vision}
                                icon={<ScanEye className="h-8 w-8 text-[#FDB715] mr-5" />}
                            />
                            <FloatingCards
                                basis="basis-1/2"
                                list={true}
                                title="Our Core Values"
                                description={hotelDetails?.hotelProfile?.coreValues || coreValues}
                                icon={<Lightbulb className="h-8 w-8 text-[#FDB715] mr-5" />}
                            />
                        </div>
                    </div>

                    <div className="mt-16">
                        <HotelBioSection hotel={hotelDetails} />
                        <div className="pt-5">
                            <Rooms rooms={hotelDetails?.rooms} />
                        </div>
                    </div>
                </div></div>
        </div>
    )
}

export default HotelDetails