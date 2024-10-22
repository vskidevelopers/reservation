
import HomeBanner from "./components/HomeBanner";
import ReservationForm from "./components/ReservationForm";
import Rooms from "./pages/Rooms";
import RoomSection from "./sections/RoomSection";
import RoomTypes from "./sections/RoomTypes";
import TopHotelsSection from "./sections/TopHotelsSection";

function App() {
  return (
    <>
      <div className="">
        <HomeBanner />
        <div className="w-full py-4 flex justify-center items-center absolute -mt-28 ">

          <ReservationForm />
        </div>

        <div className=" py-32">
          <TopHotelsSection />
        </div>
        <RoomSection />
        <div className="w-full">
          <RoomTypes />
        </div>
      </div>
    </>
  );
}

export default App;


