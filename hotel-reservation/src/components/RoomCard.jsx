import React from "react";
import { Link } from "react-router-dom";

function RoomCard({ id, title, imageUrl, price, roomType, small }) {
  return (
    <div className={`${small ? "px-1 md:px-20" : "px-0"}`}>
      <Link to={`/rooms/${id}`} className="block overflow-clip max-w-xl">
        <img
          alt={title}
          src={imageUrl}
          className={`max-h-96 ${
            small ? "md:h-60 " : "md:h-[500px]"
          } w-auto object-cover sm:h-80 transition-transform duration-300 ease-out transform-gpu hover:scale-105 hover:origin-bottom`}
        />

        <p className="mt-2 max-w-sm text-gray-700">
          {" "}
          {price ? "Price " : ""}
          {price}
        </p>
        <h3 className="mb-20 text-lg font-bold text-gray-900 sm:text-xl">
          {roomType}
        </h3>
      </Link>
    </div>
  );
}

export default RoomCard;
