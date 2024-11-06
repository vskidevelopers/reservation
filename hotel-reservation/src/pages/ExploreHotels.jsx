import HeroSection from '@/components/HeroSection'
import HotelListings from '@/sections/HotelListings';
import { useHotelFunctions } from '@/utils/firebase';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";


function ExploreHotels() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");





    const { getAllApprovedHotels, getHotelByLocation } = useHotelFunctions()
    const [hotels, setHotels] = useState([])
    const [hotelsByParams, setHotelsByParams] = useState([])
    const [error, setError] = useState("")


    const FetchHotelsByParams = async (searchParams) => {
        try {
            const hotelResponse = await getHotelByLocation(searchParams);

            if (hotelResponse?.success) {
                console.log("hotelResponse by params >> ", hotelResponse);

                setHotelsByParams(hotelResponse?.data);
            } else {
                setError(hotelResponse?.message);
                console.log("hotelResponse by params >> ", hotelResponse);
                console.log("hotelByParams State >> ", hotelsByParams);

                // Set error message if no hotels exist
            }
        } catch (error) {
            console.error("Error fetching hotels:", error);
            setError("An error occurred while fetching hotels.");
        }
    }

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

        if (type) {
            console.log("Type exists from URL:", type);
            FetchHotelsByParams(type);
            if (hotelsByParams?.length > 0) {
                console.log("hotelsByParams?.length >> ", hotelsByParams?.length);
                console.log("use hotel by params ", hotelsByParams?.length);
            } else {
                console.log("hotelsByParams?.length >> ", hotelsByParams?.length);
                console.log("do not use by params.  fetch hotels()");
                fetchHotels()

            }

        } else {
            console.log("Type does not exist from URL:", type);
            fetchHotels();
        }
    }, []);




    return (
        <div className=''>
            <div>
                <HeroSection
                    title="Explore Hotels"
                    image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
                />{" "}
            </div>
            <div className='px-10 md:px-20'>
                {type && hotelsByParams?.length !== 0
                    ? <HotelListings hotels={hotelsByParams} />
                    : <HotelListings hotels={hotels} />}

            </div>


        </div>
    )
}

export default ExploreHotels