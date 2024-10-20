import TopHotelsCarousel from '@/components/TopHotelsCarousel'
import React from 'react'
import "./topHotels.css"

function TopHotelsSection() {
    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = [
        { title: 'Hotel Paradise', imageUrl: '/images/hotel1.jpg', description: 'A luxury experience.' },
        { title: 'Ocean View Retreat', imageUrl: '/images/hotel2.jpg', description: 'Stunning sea views.' },
        { title: 'Mountain Escape', imageUrl: '/images/hotel3.jpg', description: 'Relax in nature.' },
        { title: 'Urban Oasis', imageUrl: '/images/hotel4.jpg', description: 'In the heart of the city.' },
        { title: 'Desert Mirage', imageUrl: '/images/hotel5.jpg', description: 'A secluded retreat.' }
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