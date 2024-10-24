import React from "react";

import RoomTypeCard from "@/components/RoomTypeCard";

export const roomTypes = [
    {
        id: 1,
        title: "Single Room",
        imageUrl: "https://images.pexels.com/photos/15692793/pexels-photo-15692793/free-photo-of-double-bed-in-a-hotel-room.jpeg", // Placeholder image; replace with actual
        price: "$100/night",
        roomType: "single",
    },
    {
        id: 2,
        title: "Double Room",
        imageUrl: "https://www.ticasino.com/uploads/_800xAUTO_crop_center-center_none/Hotel_Double_Queen_1200X800.jpg", // Placeholder image; replace with actual
        price: "$150/night",
        roomType: "double",
    },
    {
        id: 3,
        title: "Family Room",
        imageUrl: "https://images.pexels.com/photos/27604130/pexels-photo-27604130/free-photo-of-dania-city-villa-in-sulaymaniyah-city.png", // Placeholder image; replace with actual
        price: "$200/night",
        roomType: "family",
    },
    {
        id: 4,
        title: "Lux Room",
        imageUrl: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg", // Placeholder image; replace with actual
        price: "$300/night",
        roomType: "lux",
    },
];

function RoomTypes() {
    return (
        <div>
            {/* Header Section */}
            <div className="h-52 md:h-60 flex flex-col justify-center items-center before:absolute before:content-[''] before:bg-emerald-50 before:rounded-full before:h-96 before:w-96 before:lg:h-[1200px] before:lg:w-[1200px] before:-z-10 before:left-1/2 before:top-0 before:transform before:translate-x-[-50%]">
                <h5 className="font-sans text-xl text-gray-600">Our Rooms</h5>
                <h1 className="font-serif text-5xl">Types of Rooms</h1>
            </div>

            {/* Room Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16">
                {roomTypes.map((room, index) => {
                    // Determine if the card should be small or large based on its index
                    const isLarge = (index % 2 === 0 && index < 2) || (index % 2 === 1 && index >= 2);

                    return (
                        <div key={room.id} className="lg:col-span-1">
                            <RoomTypeCard
                                id={room.id}
                                title={room.title}
                                imageUrl={room.imageUrl}
                                price={room.price}
                                roomType={room.roomType}
                                small={!isLarge} // Dynamically set size based on math
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RoomTypes;
