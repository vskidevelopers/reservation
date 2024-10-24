import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { useParams, useNavigate } from "react-router-dom";
import RoomTypes, { roomTypes } from "../sections/RoomTypes";
import NotFoundPage from "./NotFoundPage";
import RoomBookingForm from "../components/RoomBookingForm";

function RoomTypeDetails() {
    const [room, setRoom] = useState({});
    const { type } = useParams();
    const navigate = useNavigate(); // for navigation

    console.log("room types >> ", roomTypes);
    console.log("room type >> ", type);

    useEffect(() => {
        const getRoom = async () => {
            if (Array.isArray(roomTypes)) {
                const roomData = roomTypes.filter((room) => room.roomType === type);

                if (roomData.length > 0) {
                    console.log("roomData >> ", roomData[0]);
                    setRoom(roomData[0]);
                } else {
                    console.error("No rooms found for this type");
                }
            } else {
                console.error("RoomTypes is not an array");
            }
        };

        getRoom();
    }, [type]);

    if (type === "undefined" || !type) {
        return (
            <div className="flex justify-center items-center h-screen">
                <NotFoundPage />
            </div>
        );
    }

    const defaultRoomDescription =
        "Step into comfort and elegance with our spacious Double Room, designed to offer a tranquil retreat for both business and leisure travelers. Featuring a plush king-sized bed, contemporary decor, and large windows that bathe the room in natural light, this room is perfect for relaxing after a long day. Enjoy modern amenities such as high-speed Wi-Fi, a 42-inch flat-screen TV, and an en-suite bathroom with luxury toiletries. Wake up to stunning views of the ocean, and sip your morning coffee on the private balcony as the sun rises over the horizon. Whether you're here for a weekend getaway or a longer stay, the combination of modern conveniences and serene surroundings will make your visit truly unforgettable.";

    const handleExploreClick = () => {
        navigate(`/explore?type=${type}`);
    };

    return (
        <div>
            <HeroSection
                title="Room Details"
                image="https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-bed-rest-bedroom-five-star-hotel-image_990208.jpg"
            />
            <div className="container mx-auto mt-28 px-2 md:px-20 my-20">
                <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-3">
                    {/* Left Wing */}
                    <div className="px-3 md:col-span-2">
                        <div className="w-full h-auto mb-4">
                            <img
                                src={room?.roomImage || room?.imageUrl}
                                alt={room?.roomTitle}
                                className="w-full object-cover object-center rounded shadow-md"
                            />
                        </div>
                        <br />
                        <p className="mt-2 mb-4 text-gray-600">
                            {room?.roomDescription ? room?.roomDescription : defaultRoomDescription}
                        </p>
                    </div>

                    {/* Right Wing */}
                    <div className="px-3 mt-4 pt-5">
                        <div className="mb-4">
                            <h2 className="text-gray-500 text-3xl font-serif mb-4">
                                {room?.title || room?.roomType}
                            </h2>
                            <h2 className="mt-2 text-md font-semibold text-teal-600">
                                {room?.roomPrice || room?.price
                                    ? `Price: ${room?.roomPrice || room?.price}`
                                    : ""}
                            </h2>


                            <div className="mt-4">
                                <h3 className="text-lg font-bold text-gray-700">Room Features</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Spacious and luxurious design</li>
                                    <li>High-speed Wi-Fi</li>
                                    <li>Flat-screen TV with premium channels</li>
                                    <li>En-suite bathroom with luxury toiletries</li>
                                    <li>Private balcony with scenic views</li>
                                    <li>Complimentary breakfast</li>
                                    <li>Room service available 24/7</li>
                                </ul>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-bold text-gray-700">Amenities</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Access to the hotel’s swimming pool</li>
                                    <li>Free parking for guests</li>
                                    <li>Fitness center access</li>
                                    <li>Spa and wellness facilities</li>
                                    <li>Airport shuttle service</li>
                                </ul>
                            </div>

                            <button
                                onClick={handleExploreClick}
                                className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                            >
                                Explore More {room?.title || room?.roomType}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomTypeDetails;
