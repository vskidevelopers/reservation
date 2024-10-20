
import HomeBanner from "./components/HomeBanner";
import ReservationForm from "./components/ReservationForm";
import Rooms from "./pages/Rooms";
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

        <Rooms />
      </div>
    </>
  );
}

export default App;


