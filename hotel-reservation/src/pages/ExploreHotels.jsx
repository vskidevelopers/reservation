import HeroSection from '@/components/HeroSection'
import HotelListings from '@/sections/HotelListings';
import { useHotelFunctions } from '@/utils/firebase';
import React, { useEffect, useState } from 'react'

function ExploreHotels() {

    const { getAllApprovedHotels } = useHotelFunctions()
    const [hotels, setHotels] = useState([])
    const [error, setError] = useState("")

    const fetchHotels = async () => {
        try {
            const hotelResponse = await getAllApprovedHotels();

            if (hotelResponse?.success) {
                console.log("hotelResponse >> ", hotelResponse);

                setHotels(hotelResponse?.data);
            } else {
                setError(hotelResponse?.message);  // Set error message if no hotels exist
            }
        } catch (error) {
            console.error("Error fetching hotels:", error);
            setError("An error occurred while fetching hotels.");
        }
    };

    useEffect(() => {
        fetchHotels();
    }, []);




    return (
        <div className=''>
            <div>
                <HeroSection
                    title="Explore Hotels"
                    image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
                />{" "}
            </div>
            <HotelListings hotels={hotels} />



        </div>
    )
}

export default ExploreHotels