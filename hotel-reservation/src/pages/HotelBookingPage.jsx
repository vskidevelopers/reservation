import React from 'react'

function HotelBookingPage() {

    const hotel = {
        hotelName: "The Grand Resort",
        image: "https://example.com/path-to-image.jpg",
    };
    return (
        <div>
            <HotelHeroSection hotel={hotel} />

        </div>
    )
}

export default HotelBookingPage
