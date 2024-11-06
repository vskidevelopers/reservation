import React, { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import { useRoomFunctions } from "../utils/firebase";

function Rooms({ rooms }) {
  const { getRoomsFromCollection } = useRoomFunctions();
  const [roomData, setRoomData] = useState([]); // Store fetched room data

  useEffect(() => {
    async function fetchRoomDetails() {
      try {
        const roomPromises = Object.entries(rooms).map(
          async ([roomType, roomId]) => {
            if (roomId !== "0") {
              const roomDetails = await getRoomsFromCollection(roomId, roomType);
              console.log("roomDetails >> ", roomDetails);
              console.log("roomId >> ", roomId);

              return { ...roomDetails, roomType, roomId };
            }
            return null;
          }
        );

        const roomsArray = (await Promise.all(roomPromises)).filter(Boolean);
        setRoomData(roomsArray);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    }

    // Run the effect only if roomData is empty
    if (roomData.length === 0) {
      fetchRoomDetails();
    }
  }, [rooms, getRoomsFromCollection]);


  return (
    <div>
      <div className="h-52 md:h-60 flex flex-col justify-center items-center before:absolute before:content-[''] before:bg-emerald-50 before:rounded-full before:h-96 before:w-96 before:lg:h-[1200px] before:lg:w-[1200px] before:-z-10 before:left-1/2 before:top-0 before:transform before:translate-x-[-50%]">
        <h5 className="font-sans text-xl text-gray-600">Rooms</h5>
        <h1 className="font-serif text-5xl">Our Type of Rooms</h1>
      </div>

      {/* Conditionally render room cards or "No rooms available" message */}
      {roomData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2">
          {roomData.map((room, index) => (
            <div key={index} className="px-2 md:px-5">
              <RoomCard
                id={room.roomId}
                title={room?.roomType}
                imageUrl={room.roomPhoto}
                price={room.price}
                roomType={room.roomType}
                small={index % 2 === 1} // Apply "small" style every alternate card
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No rooms available</p>
      )}
    </div>
  );
}

export default Rooms;
