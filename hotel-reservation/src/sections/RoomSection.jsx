const RoomSection = () => {

    const handleBookFeatured = () => {
        alert("booking of featured rooms is still under maintanence")
    }
    return (
        <div className="p-8 lg:p-16">
            {/* Featured Room Title */}
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-12 text-center relative">
                {/* Decorative lines before and after the text */}
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-20 lg:w-32 h-1 bg-gray-300"></span>

                <span className="px-4 lg:px-6 bg-white relative z-10">
                    Featured Room
                </span>

                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 lg:w-32 h-1 bg-gray-300"></span>
            </h2>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="relative">
                    <img
                        src="https://images.pexels.com/photos/7746080/pexels-photo-7746080.jpeg"
                        alt="Lake-view King Size Room"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-center space-y-6">
                    {/* Title */}
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                        KING-SIZE BED
                    </h1>
                    <h2 className="text-4xl lg:text-6xl font-semibold text-gray-700">
                        LAKE-VIEW ROOM
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600">
                        The rooms of the planned resort hotel are equipped with air conditioning, a desk, a kettle, a mini-bar, a flat-screen TV, a balcony, and a private bathroom with a shower.
                    </p>

                    {/* Features List */}
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>1 King-Size Bed</li>
                        <li>Balcony</li>
                        <li>Lake View</li>
                        <li>Flat-Screen TV</li>
                        <li>Mini-Bar</li>
                        <li>Free Wi-Fi</li>
                        <li>Freestanding Tub in the Room</li>
                    </ul>

                    {/* Price and Button */}
                    <div className="flex items-center space-x-4">
                        {/* Price */}
                        <span className="text-white bg-gray-900 px-6 py-3 rounded-lg text-2xl font-semibold">
                            $200/day
                        </span>

                        {/* Next Button */}
                        <button onClick={handleBookFeatured} className="text-white bg-gray-700 hover:bg-gray-900 px-6 py-3 rounded-lg text-lg font-medium">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomSection;
