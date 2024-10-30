import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardFooter } from "../ui/card";
import { useForm } from "react-hook-form";

function HotelProfileForm() {
    const [loading, setLoading] = useState(false);
    const [entrancePhoto, setEntrancePhoto] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Function to handle file uploads
    const uploadFile = async (file, type) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("type", type);

        try {
            const response = await fetch("YOUR_UPLOAD_API_ENDPOINT", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to upload");
            }

            const data = await response.json();
            console.log("Uploaded successfully:", data);
        } catch (error) {
            console.error("Upload error:", error);
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);
        console.log("Hotel profile data for submission >>", data);
        setLoading(false);
        reset();
    };

    const handleEntrancePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setEntrancePhoto(file);
            uploadFile(file, "entrance");
        }
    };

    const handleProfilePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePhoto(file);
            uploadFile(file, "profile");
        }
    };

    return (
        <div className="flex w-full justify-center items-center py-10 ">
            <Card className="w-full max-w-4xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardHeader>
                        <CardDescription>Fill out the hotel profile information below.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Hotel Entrance Photo */}
                        <div className="grid gap-2">
                            <label htmlFor="entrancePhoto" className="block text-sm font-medium">Hotel Entrance Photo</label>
                            <input
                                id="entrancePhoto"
                                type="file"
                                onChange={handleEntrancePhotoChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                            {errors?.entrancePhoto && <span className="text-red-500">This field is required</span>}
                        </div>

                        {/* Hotel Profile Photo */}
                        <div className="grid gap-2">
                            <label htmlFor="profilePhoto" className="block text-sm font-medium">Hotel Profile Photo</label>
                            <input
                                id="profilePhoto"
                                type="file"
                                onChange={handleProfilePhotoChange}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                            {errors?.profilePhoto && <span className="text-red-500">This field is required</span>}
                        </div>

                        {/* Hotel Bio */}
                        <div className="grid gap-2 md:col-span-2">
                            <label htmlFor="bio" className="block text-sm font-medium">Hotel Bio</label>
                            <textarea
                                id="bio"
                                placeholder="A brief introduction of the hotel"
                                rows="4"
                                {...register("bio", { required: true })}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            ></textarea>
                            {errors?.bio && <span className="text-red-500">This field is required</span>}
                        </div>

                        {/* Mission */}
                        <div className="grid gap-2 md:col-span-1">
                            <label htmlFor="mission" className="block text-sm font-medium">Mission</label>
                            <textarea
                                id="mission"
                                placeholder="Hotel Mission"
                                rows="3"
                                {...register("mission", { required: true })}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            ></textarea>
                            {errors?.mission && <span className="text-red-500">This field is required</span>}
                        </div>

                        {/* Vision */}
                        <div className="grid gap-2 md:col-span-1">
                            <label htmlFor="vision" className="block text-sm font-medium">Vision</label>
                            <textarea
                                id="vision"
                                placeholder="Hotel Vision"
                                rows="3"
                                {...register("vision", { required: true })}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            ></textarea>
                            {errors?.vision && <span className="text-red-500">This field is required</span>}
                        </div>

                        {/* Core Values */}
                        <div className="grid gap-2 md:col-span-2">
                            <label htmlFor="coreValues" className="block text-sm font-medium">Core Values (separate by commas)</label>
                            <input
                                id="coreValues"
                                type="text"
                                placeholder="e.g., Integrity, Excellence, Sustainability"
                                {...register("coreValues", { required: true })}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                            {errors?.coreValues && <span className="text-red-500">This field is required</span>}
                        </div>

                        {/* Contact Information */}
                        <div className="grid gap-2 md:col-span-1">
                            <label htmlFor="contact" className="block text-sm font-medium">Contact Information</label>
                            <input
                                id="contact"
                                type="text"
                                placeholder="Phone or Email"
                                {...register("contact", { required: true })}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                            {errors?.contact && <span className="text-red-500">This field is required</span>}
                        </div>

                        {/* Location */}
                        <div className="grid gap-2 md:col-span-1">
                            <label htmlFor="location" className="block text-sm font-medium">Location</label>
                            <input
                                id="location"
                                type="text"
                                placeholder="Hotel Location"
                                {...register("location", { required: true })}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                            {errors?.location && <span className="text-red-500">This field is required</span>}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <button
                            className="border border-sky-500 rounded w-full py-2 hover:bg-sky-500"
                            type="submit"
                        >
                            {loading ? "Submitting..." : "Save Profile"}
                        </button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}

export default HotelProfileForm;
