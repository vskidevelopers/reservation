import TopHotelsCarousel from '@/components/TopHotelsCarousel'
import React from 'react'
import "./topHotels.css"

function TopHotelsSection() {
    const OPTIONS = { loop: true }

    const SLIDES = [
        { title: 'Hotel Paradise', imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', description: 'A luxury experience.' },
        { title: 'Ocean View Retreat', imageUrl: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg', description: 'Stunning sea views.' },
        { title: 'Mountain Escape', imageUrl: 'https://images.pexels.com/photos/18667629/pexels-photo-18667629/free-photo-of-sofas-in-a-living-room.jpeg', description: 'Relax in nature.' },
        { title: 'Urban Oasis', imageUrl: 'https://images.pexels.com/photos/7545497/pexels-photo-7545497.jpeg', description: 'In the heart of the city.' },
        { title: 'Desert Mirage', imageUrl: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg', description: 'A secluded retreat.' }
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-gray-900">
                    <span className="relative inline-block">
                        <span className="absolute inset-0 bg-yellow-300 h-2/3 w-full -skew-y-2"></span>
                        <span className="relative">Top Hotels</span>
                    </span>
                </h2>
                <p className="text-lg text-gray-500 mt-3">Explore our hand-picked selection of premium hotels</p>
            </div>
            <TopHotelsCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );

}

export default TopHotelsSection