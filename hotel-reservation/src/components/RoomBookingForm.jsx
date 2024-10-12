import React from "react";
import { useForm } from "react-hook-form";

function RoomBookingForm() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      roomType: "Double Room",
    },
  });
  const onSubmit = (data) => {
    console.log("data to use >> ", data);
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
              <option>Single Room</option>
              <option>Single Room Double Bed</option>
              <option>Double Room</option>
              <option> Duluxe Room</option>
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
