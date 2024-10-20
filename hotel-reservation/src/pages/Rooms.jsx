import React, { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import { useRoomFunctions } from "../utils/firebase";
import { cardsData } from "../utils/RoomsData";

function Rooms() {
  const { rooms, getRooms } = useRoomFunctions();
  console.log("ROOMS FROM ROOMS PAGE FETCHED BY USErOOMfUNCTIONS >> ", rooms);
  const [roomData, setRoomData] = useState(rooms);
  const cardsData = rooms;

  useEffect(() => {
    // Fetch room data from API when component mounts
    async function fetchRoomData() {
      try {
        const data = await getRooms();
        setRoomData(data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    }
    fetchRoomData();
  }, []); // Run once on component mount
  return (
    <div>
      <div className="h-52 md:h-60 flex  flex-col justify-center items-center before:absolute before:content-[''] before:bg-emerald-50 before:rounded-full before:h-96 before:w-96 before:lg:h-[1200px]  before:lg:w-[1200px] before:-z-10 before:left-1/2 before:top-0 before:transform before:translate-x-[-50%]   ">
        <h5 className="font-sans text-xl text-gray-600 ">Rooms</h5>
        <h1 className=" font-serif text-5xl ">Types of Room</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Map over roomData to generate RoomCard components */}
        {roomData?.map((room, index) => (
          <div key={index} className="px-2 md:px-5">
            <RoomCard
              id={room?.id}
              title={room?.roomType}
              imageUrl={room?.roomImage}
              price={room?.roomPrice}
              roomType={room?.roomType}
              small={index % 2 === 1} // Apply "small" style every alternate card
            />
          </div>
        ))}
      </div>

      <br />


      {cardsData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* col1 */}
          <div className="px-2 md:px-5">
            <RoomCard
              id={cardsData[0]?.id}
              title={cardsData[0]?.title}
              imageUrl={cardsData[0]?.roomImage}
              price={cardsData[0]?.roomPrice}
              roomType={cardsData[0]?.roomType}
            />
            <RoomCard
              id={cardsData[1]?.id}
              title={cardsData[1]?.title}
              imageUrl={cardsData[1]?.roomImage}
              price={cardsData[1]?.roomPrice}
              roomType={cardsData[1]?.roomType}
              small={true}
            />
          </div>
          {/* col 2 */}
          <div className="px-2 md:px-5">
            <RoomCard
              id={cardsData[2]?.id}
              title={cardsData[2]?.title}
              imageUrl={cardsData[2]?.imageUrl}
              price={cardsData[2]?.price}
              roomType={cardsData[2]?.roomType}
              small={true}
            />

            <RoomCard
              id={cardsData[3]?.id}
              title={cardsData[3]?.title}
              imageUrl={cardsData[3]?.imageUrl}
              price={cardsData[3]?.price}
              roomType={cardsData[3]?.roomType}
            />
          </div>
        </div>
      ) : (
        <p>No rooms available</p>
      )}
    </div>
  );
}

export default Rooms;
