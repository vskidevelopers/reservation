import { useBookingFunctions } from "@/utils/firebase";
import React from "react";
import { useForm } from "react-hook-form";

function RoomBookingForm({ hotelId, roomId, roomType }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      roomType: roomType,
    },
  });

  const { postBooking } = useBookingFunctions()

  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedDate = currentDate.toLocaleString("en-US", options);

  const onSubmit = async (data) => {
    const bookingData = { ...data, hotelId, roomId, createdAt: formattedDate };
    console.log("data to use >> ", bookingData);

    try {
      console.log("booking ... ");
      const postBookingResponse = await postBooking(bookingData);
      console.log("postBookingResponse >> ", postBookingResponse);

      // Check if the response indicates success
      if (postBookingResponse?.status === 200 || postBookingResponse?.success) {
        alert("We have received your booking information. We will get back to you soon.");
        reset();
      } else {
        // Handle non-successful response case
        alert("There was an issue with your booking. Please try again later.");
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      alert("An error occurred while processing your booking. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid  md:grid-cols-2 gap-3 mt-4 ">
        <label className="block">
          <span className="text-teal-600 font-serif">First Name</span>
          <input
            {...register("firstName")}
            type="text"
            className="mt-1 block w-full border border-emerald-500 focus:border-1 focus:border-emerald-600"
            placeholder="First Name"
            required
          />
        </label>

        <label className="block">
          <span className="text-teal-600 font-serif">Last Name</span>
          <input
            {...register("lastName")}
            type="text"
            className="mt-1 block w-full border border-emerald-500 focus:border-1 focus:border-emerald-600"
            placeholder="Last Name"
            required
          />
        </label>

        <label className="block">
          <span className="text-teal-600 font-serif">Email Address</span>
          <input
            {...register("email")}
            type="text"
            className="mt-1 block w-full border border-emerald-500 focus:border-1 focus:border-emerald-600"
            placeholder="Email Address"
            required
          />
        </label>

        <label className="block">
          <span className="text-teal-600 font-serif">Phone Number</span>
          <input
            {...register("phoneNumber")}
            type="text"
            className="mt-1 block w-full border border-emerald-500 focus:border-1 focus:border-emerald-600"
            placeholder="Phone Number"
          />
        </label>

        <label className="block">
          <span className="text-teal-600 font-serif">Adult</span>
          <input
            {...register("adult")}
            type="text"
            className="mt-1 block w-full border border-emerald-500 focus:border-1 focus:border-emerald-600"
            placeholder="No. of Adults"
          />
        </label>

        <label className="block">
          <span className="text-teal-600 font-serif">Children</span>
          <input
            {...register("children")}
            type="text"
            className="mt-1 block w-full border border-emerald-500 focus:border-1 focus:border-emerald-600"
            placeholder="No. of Children"
          />
        </label>

        <div className="col-span-2 grid  md:grid-cols-3 gap-2">
          <label className="block">
            <span className="text-teal-600 font-serif">Check in</span>
            <input
              {...register("checkIn")}
              type="date"
              className="mt-1 block w-full border border-emerald-500 focus:border-1 focus:border-emerald-600"
              required
            />
          </label>

          <label className="block">
            <span className="text-teal-600 font-serif">Check out</span>
            <input
              {...register("checkOut")}
              type="date"
              className="mt-1 block w-full border border-emerald-500 focus:border-1 focus:border-emerald-600"
              required
            />
          </label>

          <label className="block">
            <span className="text-teal-600 font-serif">Room Type</span>
            <select
              {...register("roomType")}
              className="block w-full mt-1 border border-emerald-500 focus:border-1 focus:border-emerald-600"
              required
            >
              <option>Single Bed</option>
              <option>Double Bed</option>
              <option>Family Room</option>
              <option> Lux Room</option>
            </select>
          </label>
        </div>

        <label className="col-span-2 block">
          <span className="text-teal-600 font-serif">Special Requirements</span>
          <textarea
            {...register("specialRequirements")}
            className="mt-1 block w-full border border-emerald-500 focus:border-1 focus:border-emerald-600"
            rows="3"
            placeholder=""
          ></textarea>
        </label>
      </div>

      {/* submit */}
      <button
        className="mt-3 py-5 px-9 text-white bg-emerald-600 md:bg-white border md:text-emerald-600 md:border-emerald-500 md:hover:bg-emerald-600 transition duration-500 ease-in-out md:hover:text-white font-bold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default RoomBookingForm;
