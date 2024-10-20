import { useForm } from "react-hook-form";

const ReservationForm = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4"
        >
            {/* Location Input */}
            <div className="flex flex-col w-full md:w-auto">
                <label className="text-gray-700">Location</label>
                <input
                    type="text"
                    placeholder="Enter Location"
                    {...register("location", { required: true })}
                    className="px-4 py-2 rounded-md border border-gray-300 w-full"
                />
                {errors.location && (
                    <span className="text-red-500">Location is required</span>
                )}
            </div>

            {/* Check-in Date Input */}
            <div className="flex flex-col w-full md:w-auto">
                <label className="text-gray-700">Check-in Date</label>
                <input
                    type="date"
                    {...register("checkInDate", { required: true })}
                    className="px-4 py-2 rounded-md border border-gray-300 w-full"
                />
                {errors.checkInDate && (
                    <span className="text-red-500">Check-in date is required</span>
                )}
            </div>

            {/* Check-out Date Input */}
            <div className="flex flex-col w-full md:w-auto">
                <label className="text-gray-700">Check-out Date</label>
                <input
                    type="date"
                    {...register("checkOutDate", { required: true })}
                    className="px-4 py-2 rounded-md border border-gray-300 w-full"
                />
                {errors.checkOutDate && (
                    <span className="text-red-500">Check-out date is required</span>
                )}
            </div>


            {/* Submit Button */}
            <div className="w-full md:w-auto">
                <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-md w-full hover:bg-gray-800"
                >
                    Get Started
                </button>
            </div>
        </form>
    );
};

export default ReservationForm;
