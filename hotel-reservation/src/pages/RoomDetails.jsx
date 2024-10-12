import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
// import { cardsData } from "../utils/RoomsData";
import { useParams } from "react-router-dom";
import RoomBookingForm from "../components/RoomBookingForm";
import { useRoomFunctions } from "../utils/firebase";
import { cardsData } from "../utils/RoomsData";

function RoomDetails() {
  const { rooms } = useRoomFunctions();
  const [room, setRoom] = useState({});
  const { id } = useParams();
  const cardsData = rooms;

  useEffect(() => {
    const getRoom = async () => {
      const roomData = cardsData.filter((room) => room.id === id);

      console.log("room Id >> ", id);
      console.log("room data >> ", roomData);
      setRoom(roomData[0]);
    };

    getRoom();
  }, [id]);

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
                src={room?.roomImage}
                alt={room?.roomTitle}
                className="w-full object-cover object-center rounded shadow-md"
              />
            </div>

            <div className="mb-4">
              <h2 className="text-gray-500 text-3xl font-serif mb-4">
                {room?.roomType}
              </h2>
              <h2 className="mt-2 max-w-sm text-md font-semibold text-teal-600">
                {room?.roomPrice ? "Price  : " : ""}
                {room?.roomPrice}
              </h2>
              <p>{room?.roomDescription}</p>
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
            <RoomBookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
