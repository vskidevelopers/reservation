import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useHotelFunctions } from "@/utils/firebase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HotelSignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const { createHotelDocument } = useHotelFunctions();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            console.log(data);
            const createNewHotelDocResponse = await createHotelDocument(data);
            if (createNewHotelDocResponse?.success) {
                setLoading(false);
                alert("hotel data submitted successfully");
                navigate("/new-hotel-confirm");
            } else {
                alert("Error trying to sign up");
                setLoading(false);
            }
        } catch (error) {
            console.log(`Error in submit handler: ${error}`);
            setLoading(false);
        }
    };

    return (
        <div className="  flex w-screen  justify-center items-center bg-gray-100">
            <div className="my-20">
                <Card className="w-full max-w-md shadow-lg ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardHeader>
                            <CardTitle className="text-2xl text-center font-bold">Hotel Sign Up</CardTitle>
                            <CardDescription className="text-center">
                                Register your hotel to start managing bookings and more.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            {/* Hotel Name Field */}
                            <div className="grid gap-2">
                                <label htmlFor="hotelName" className="font-medium">Hotel Name</label>
                                <Input
                                    id="hotelName"
                                    type="text"
                                    placeholder="Hotel Name"
                                    {...register("hotelName", { required: true })}
                                />
                                {errors.hotelName && (
                                    <span className="text-red-500">Hotel name is required</span>
                                )}
                            </div>

                            {/* Address Field */}
                            <div className="grid gap-2">
                                <label htmlFor="address" className="font-medium">Hotel Address</label>
                                <Input
                                    id="address"
                                    type="text"
                                    placeholder="123 Main St, City, Country"
                                    {...register("address", { required: true })}
                                />
                                {errors.address && (
                                    <span className="text-red-500">Address is required</span>
                                )}
                            </div>

                            {/* Contact Number Field */}
                            <div className="grid gap-2">
                                <label htmlFor="contactNumber" className="font-medium">Contact Number</label>
                                <Input
                                    id="contactNumber"
                                    type="tel"
                                    placeholder="+1234567890"
                                    {...register("contactNumber", { required: true })}
                                />
                                {errors.contactNumber && (
                                    <span className="text-red-500">Contact number is required</span>
                                )}
                            </div>

                            {/* Email Field */}
                            <div className="grid gap-2">
                                <label htmlFor="email" className="font-medium">Hotel Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="admin@hotel.com"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <span className="text-red-500">Email is required</span>
                                )}
                            </div>

                            {/* Password Field with Show/Hide Toggler */}
                            <div className="grid gap-2 relative">
                                <label htmlFor="password" className="font-medium">Password</label>
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    {...register("password", { required: true })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-9 text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                                {errors.password && (
                                    <span className="text-red-500">Password is required</span>
                                )}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" type="submit">
                                {loading ? "Signing up..." : "Sign Up"}
                            </Button>
                            <p className="text-center mt-4 text-gray-600">
                                Already have an account?{" "}
                                <Link to="/login" className="text-blue-600 hover:underline">
                                    Log in here
                                </Link>
                            </p>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
}
