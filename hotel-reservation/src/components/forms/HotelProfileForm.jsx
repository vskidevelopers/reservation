import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardFooter } from "../ui/card";
import { useForm } from "react-hook-form";
import { useHotelFunctions, useUploadImage } from "@/utils/firebase";

function HotelProfileForm() {
    const [loading, setLoading] = useState(false);
    const [entrancePhoto, setEntrancePhoto] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const { updateHotelProfile } = useHotelFunctions();
    const { uploadImage, imageURL } = useUploadImage();
    const [imageUploadStatus, setImageUploadStatus] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

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
        setLoading(true);
        const localHotelProfileId = localStorage.getItem("hotelId");
        const coreValuesArray = data?.coreValues.split(',').map((coreVals) => coreVals.trim());
        try {
            if (entrancePhoto && profilePhoto) {
                const hotelProfileData = {
                    ...data,
                    entrancePhoto,
                    profilePhoto,
                    createdAt: formattedDate,
                };
                const updateHotelProfileResponse = await updateHotelProfile(localHotelProfileId, hotelProfileData);
                console.log("updateHotelProfileResponse >> ", updateHotelProfileResponse);
                reset();
                setLoading(false);
            } else {
                console.log("Photos not uploaded yet.");
            }
        } catch (error) {
            console.error("An error occurred: ", error);
            setLoading(false);
        }
        setLoading(false);
        reset();
    };

    const handlePhotoUpload = async (event) => {
        const file = event.target.files[0];
        const photoType = event.target.name;
        if (file) {
            try {
                setImageUploadStatus("pending");
                const bucketName = photoType === "profile" ? "profile/" : "entrance/";
                const uploadResult = await uploadImage(file, bucketName);

                if (uploadResult?.status === "success") {
                    if (photoType === "profile") setProfilePhoto(uploadResult.data);
                    else if (photoType === "entrance") setEntrancePhoto(uploadResult.data);
                    setImageUploadStatus("success");
                } else {
                    setImageUploadStatus("error");
                }
            } catch (error) {
                console.error("Upload error: ", error);
                setImageUploadStatus("error");
            }
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
                            <label htmlFor="entrancePhoto" className="block text-sm font-medium">
                                Hotel Entrance Photo
                            </label>
                            <input
                                id="entrancePhoto"
                                type="file"
                                name="entrance"
                                onChange={handlePhotoUpload}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                            {imageUploadStatus === "pending" && <p>Uploading entrance photo...</p>}
                            {imageUploadStatus === "success" && entrancePhoto && (
                                <img src={entrancePhoto} alt="Entrance" />
                            )}
                            {imageUploadStatus === "error" && (
                                <p className="text-red-500">Failed to upload entrance photo.</p>
                            )}
                        </div>

                        {/* Hotel Profile Photo */}
                        <div className="grid gap-2">
                            <label htmlFor="profilePhoto" className="block text-sm font-medium">
                                Hotel Profile Photo
                            </label>
                            <input
                                id="profilePhoto"
                                type="file"
                                name="profile"
                                onChange={handlePhotoUpload}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                            {imageUploadStatus === "pending" && <p>Uploading profile photo...</p>}
                            {imageUploadStatus === "success" && profilePhoto && (
                                <img src={profilePhoto} alt="Profile" />
                            )}
                            {imageUploadStatus === "error" && (
                                <p className="text-red-500">Failed to upload profile photo.</p>
                            )}
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

                        {/* City */}
                        <div className="grid gap-2 md:col-span-1">
                            <label htmlFor="city" className="block text-sm font-medium">City</label>
                            <input
                                id="city"
                                type="text"
                                placeholder="Hotel City"
                                {...register("city", { required: true })}
                                className="border border-gray-300 rounded px-2 py-1 w-full"
                            />
                            {errors?.city && <span className="text-red-500">This field is required</span>}
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
