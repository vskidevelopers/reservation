import HotelListingCard from '@/components/HotelListingCard';
import React from 'react'

function HotelListings({ hotels }) {

    console.log("mockhotels available for listsings >> ", hotels);


    return (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 p-4">
            {hotels.map((hotel, index) => (
                <HotelListingCard key={index} hotel={hotel} />
            ))}
        </div>
    );
}

export default HotelListings