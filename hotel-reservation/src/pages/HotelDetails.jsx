import FloatingCards from "@/components/FloatingCards";
import HotelHeroSection from "@/sections/HotelHeroSection";
import { useParams } from "react-router-dom"
import { Star, ScanEye, Lightbulb } from "lucide-react"
import HotelBioSection from "@/sections/HotelBioSection";
import Rooms from "./Rooms";

function HotelDetails() {
    const { hotelId } = useParams()
    console.log("hotel Id >> ", hotelId);


    const hotel = {
        hotelName: "The Grand Resort",
        image: "https://img.freepik.com/premium-photo/abstract-blur-hotel-lobby-interior-background_622214-22299.jpg",
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
                                description="Empowering businesses through innovative marketing solutions for
          enhanced brand visibility, customer engagement, and accelerated
          growth. Exceptional services driving long-term success."
                                icon={<Star className="h-8 w-8 text-[#FDB715] mr-5" />}
                            />
                            <FloatingCards
                                basis="basis-1/4"
                                title="Our Vision"
                                description="To be a global leader in transformative marketing solutions, revolutionizing the industry with innovative strategies and technologies. We are committed to delivering outstanding results, fostering excellence, and sustainable growth."
                                icon={<ScanEye className="h-8 w-8 text-[#FDB715] mr-5" />}
                            />
                            <FloatingCards
                                basis="basis-1/2"
                                list={true}
                                title="Our Core Values"
                                description={coreValues}
                                icon={<Lightbulb className="h-8 w-8 text-[#FDB715] mr-5" />}
                            />
                        </div>
                    </div>

                    <div className="mt-16">
                        <HotelBioSection hotel={hotelData} />
                        <div className="pt-5">
                            <Rooms />
                        </div>
                    </div>
                </div></div>
        </div>
    )
}

export default HotelDetails