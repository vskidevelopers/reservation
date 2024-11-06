import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";

import { useParams, useSearchParams } from "react-router-dom";
import RoomBookingForm from "../components/RoomBookingForm";
import { useRoomFunctions } from "../utils/firebase";
import { cardsData } from "../utils/RoomsData";
import NotFoundPage from "./NotFoundPage";

function RoomDetails() {

  const [room, setRoom] = useState({});
  const { roomId, hotelId } = useParams();
  const [searchParams] = useSearchParams();
  const { getRoomsFromCollection } = useRoomFunctions()
  const roomType = searchParams.get("roomType");


  const getRoom = async () => {
    const roomDetails = await getRoomsFromCollection(roomId, roomType);
    console.log("roomDetails >> ", roomDetails);
    setRoom(roomDetails)

  };
  useEffect(() => {

    getRoom();
  }, []);

  if (roomId === "undefined" || undefined) {
    return (
      <div className="flex justify-center items-center h-screen">
        <NotFoundPage />
      </div>
    );
  }


  return (
    <div>
      {" "}
      <HeroSection
        title="Room Details"
        image="https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-bed-rest-bedroom-five-star-hotel-image_990208.jpg"
      />{" "}
      <div className="container mx-auto mt-28 px-2 md:px-20 my-20">
        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-3">
          {/* left wing */}
          <div className="px-3 md:col-span-2">
            <div className="w-full h-auto mb-4">
              <img
                src={room?.roomPhoto}
                alt={room?.roomType}
                className="w-full object-cover object-center rounded shadow-md"
              />
            </div>

            <div className="mb-4">
              <h2 className="text-gray-500 text-3xl font-serif mb-4">
                {room?.roomType}
              </h2>
              <h2 className="mt-2 max-w-sm text-md font-semibold text-teal-600">
                {room?.price ? "Price  : " : ""}
                {room?.price}
              </h2>
              <p>{room?.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
          </div>
          {/* right wing */}
          <div className="px-3 mt-4 pt-5">
            <div>
              <h2 className="absolute font-bold text-xl text-teal-600 -mt-5 md:-mt-10 pb-3">
                Book This Room
              </h2>
            </div>
            <RoomBookingForm hotelId={hotelId} roomId={roomId} roomType={room?.roomType} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
