import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"

const HotelListingCard = ({ hotel }) => {
    console.log("hotel data for lising card >> ", hotel);


    const hotelsData = {
        name: "The Orchid Hotel",
        location: "Ashram Road, Ahmedabad",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?fm=jpg",
        rating: "8.2",
        reviews: "245",
        isCoupleFriendly: true,
        facilities: [
            { icon: "🌐" },
            { icon: "🛁" },
            { icon: "🍽️" },
        ],
        discount: 16,
        price: 210,
        originalPrice: 250,
    }

    return (
        <div className="!flex-col !sm:flex-row border rounded-lg shadow-md p-4 bg-white my-4">
            {/* Hotel Image */}
            <div className="w-full sm:w-1/3 pr-4">
                <img
                    src={hotelsData?.image}
                    alt={hotelsData?.name}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Hotel Details */}
            <div className="w-full sm:w-2/3 flex flex-col justify-between">
                <div>
                    {/* Hotel Name and Location */}
                    <h3 className="text-xl font-semibold text-gray-800">{hotel?.hotelName}</h3>
                    <p className="text-sm text-gray-600">{hotelsData?.location}</p>

                    {/* Rating and Facilities */}
                    <div className="flex items-center space-x-2 mt-2">
                        <span className="text-yellow-500 text-lg">&#9733; {hotelsData?.rating}</span>
                        <span className="text-sm text-gray-500">({hotelsData?.reviews} reviews)</span>
                        {hotelsData?.isCoupleFriendly && (
                            <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-md">Couple Friendly</span>
                        )}
                    </div>

                    {/* Facilities Icons */}
                    <div className="flex items-center space-x-2 text-gray-500 mt-3">
                        {hotelsData?.facilities.map((facility, index) => (
                            <span key={index} className="text-lg">{facility.icon}</span>
                        ))}
                    </div>
                </div>

                {/* Price and Booking */}
                <div className="flex justify-between items-center mt-4">
                    <div>
                        {hotelsData?.discount && (
                            <p className="text-green-600 text-sm font-semibold">{hotelsData?.discount}% Off!</p>
                        )}
                        <p className="text-xl font-semibold text-gray-800">${hotelsData?.price}</p>
                        {hotelsData?.originalPrice && (
                            <p className="text-sm line-through text-gray-500">${hotelsData?.originalPrice}</p>
                        )}
                    </div>
                    <Link to={`/hotels/${hotel?.id}`}>
                        <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg">View More</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotelListingCard;
