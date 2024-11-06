import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardFooter } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { useForm } from "react-hook-form";
import { useRoomFunctions, useUploadImage } from "@/utils/firebase";

function AddRoomForm() {
    const [loading, setLoading] = useState(false);
    const [imageUploadStatus, setImageUploadStatus] = useState(null);
    const [roomPhoto, setRoomPhoto] = useState(null);

    const { uploadImage } = useUploadImage()
    const { addRoom } = useRoomFunctions()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const localHotelProfileId = localStorage.getItem("hotelId")

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

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                setImageUploadStatus("pending");
                const bucketName = "rooms/"
                const uploadResult = await uploadImage(file, bucketName);

                if (uploadResult?.status === "success") {
                    console.log("uploadResult >> ", uploadResult);

                    setRoomPhoto(uploadResult.data);
                    setImageUploadStatus("success");
                } else {
                    setImageUploadStatus("error");
                    console.log("uploadResult >> ", uploadResult);

                }
            } catch (error) {
                console.error("Upload error: ", error);
                setImageUploadStatus("error");
            }
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);

        // Process the form data, including imageURL and amenities as an array
        const amenitiesArray = data?.amenities.split(',').map((amenity) => amenity.trim());
        // Send the data to your backend API or handle it as needed
        const roomType = data?.roomType
        try {
            if (roomPhoto) {
                const roomData = { ...data, amenities: amenitiesArray, roomPhoto, createdAt: formattedDate };
                console.log("room data for submission >> ", roomData);

                const addRoomResponse = await addRoom(roomData, localHotelProfileId, roomType)
                console.log("add room response >> ", addRoomResponse);
                reset()
                setLoading(false)
            } else {
                alert("Please upload a photo")
            }
        } catch (error) {
            console.log("ann errror occured >> ", error);
            setLoading(false);

        }


        setLoading(false);
        reset();
    };

    return (
        <div className="flex w-full justify-center items-center">
            <ScrollArea className="h-[80vh]">
                <Card className="w-full max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardHeader>
                            <CardDescription>Fill out the details below to add a new room.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            {/* Room Image */}
                            <div className="grid gap-2">
                                <label htmlFor="roomImage">Room Image</label>
                                <input type="file" onChange={handleImageUpload} />
                                {errors?.roomImage && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>

                            {/* Room Type */}
                            <div className="grid gap-2">
                                <label htmlFor="roomType">Room Type</label>
                                <select
                                    id="roomType"
                                    {...register("roomType", { required: true })}
                                    className="border border-gray-300 rounded px-2 py-1"
                                >
                                    <option value="">Select Room Type</option>
                                    <option value="single">Single</option>
                                    <option value="double">Double</option>
                                    <option value="family">Family</option>
                                    <option value="lux">Lux</option>
                                </select>
                                {errors?.roomType && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>

                            {/* Room Price */}
                            <div className="grid gap-2">
                                <label htmlFor="price">Price</label>
                                <input
                                    id="price"
                                    type="number"
                                    placeholder="Price"
                                    {...register("price", { required: true })}
                                />
                                {errors?.price && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>

                            {/* Number of Rooms */}
                            <div className="grid gap-2">
                                <label htmlFor="numberOfRooms">Number of Rooms</label>
                                <input
                                    id="numberOfRooms"
                                    type="number"
                                    placeholder="Number of Rooms"
                                    {...register("numberOfRooms", { required: true, min: 1 })}
                                />
                                {errors?.numberOfRooms && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>

                            {/* Room Description */}
                            <div className="grid gap-2">
                                <label htmlFor="description">Room Description</label>
                                <textarea
                                    id="description"
                                    placeholder="Room Description"
                                    rows="3"
                                    {...register("description", { required: true })}
                                ></textarea>
                                {errors?.description && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                            </div>

                            {/* Amenities */}
                            <div className="grid gap-2">
                                <label htmlFor="amenities">Amenities (separate by commas)</label>
                                <input
                                    id="amenities"
                                    type="text"
                                    placeholder="e.g., Wi-Fi, Pool, Air Conditioning"
                                    {...register("amenities", { required: true, maxLength: 100 })}
                                />
                                {errors?.amenities && (
                                    <span className="text-red-500">This field is required</span>
                                )}
                                <span className="text-gray-500">Max 5 amenities, separate by commas.</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <button
                                className="border border-sky-500 rounded w-full py-2 hover:bg-sky-500"
                                type="submit"
                            >
                                {loading ? "Submitting..." : "Add Room"}
                            </button>
                        </CardFooter>
                    </form>
                </Card>
            </ScrollArea>
        </div>
    );
}

export default AddRoomForm;
