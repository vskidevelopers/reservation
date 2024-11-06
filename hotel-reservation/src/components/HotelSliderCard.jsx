import { Link } from "react-router-dom"
import { Button } from './ui/button';

const HotelSliderCard = (props) => {
    const { slide, index } = props
    console.log("slide >> ", slide);
    console.log("index >> ", index);
    console.log("hotel cards props >> ", props);


    return (
        <div className="relative max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Background Image */}
            <div className="relative h-60 md:h-72 lg:h-96">
                <img
                    className="object-cover w-full h-full"
                    src={slide?.imageUrl}
                    alt={slide?.title}
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-3xl font-bold text-white">{slide?.title}</h1>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
                <p className="text-gray-600 mb-4 text-lg">
                    {slide?.description}
                </p>

                {/* Learn More Button */}

                <Button
                    onClick={() => {
                        alert("Bookings for featured hotels are currently not available.");
                    }}
                    className="inline-block bg-transparent border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all"
                    aria-label="Show information about bookings"
                    role="alert"
                >
                    Read More
                </Button>


            </div>
        </div>
    );
};

export default HotelSliderCard;
