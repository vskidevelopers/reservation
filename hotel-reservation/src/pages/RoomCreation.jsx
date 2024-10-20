import { useForm, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { useRoomFunctions, useUploadImage } from "../utils/firebase";

export default function RoomCreation() {
  const initialRoomsState = {
    roomType: "",
    roomPrice: "",
    roomBeds: " ",
    roomImage: " ",
    roomDescription: "",
  };
  const [imagesUploaded, setImagesUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState(initialRoomsState);

  const { roomType, roomPrice, roomBeds, roomDescription } = formData;

  const {
    uploadImage,
    imageURL,
    imageUploadLoading,
    imageUploadProgress,
  } = useUploadImage();
  const { addRoom, loading, error, success, rooms, roomsLoading } =
    useRoomFunctions();

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileSelection = (selectedFile) => {
    setFile(selectedFile[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleFileSelection,
  });

  const handleImageUpload = async () => {
    if (!file) {
      console.log("No Image Selected");
      return;
    }
    await uploadImage(file);
    console.log("Image Uploaded!");
    console.log("Image URL >>", imageURL);
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (data) => {
    console.log("data >> ", data);
    const { roomImage } = data;
    const roomImageFile = roomImage[0];

    if (imageURL) {
      console.log("Image URLs are available >> ", imageURL);
      const roomData = {
        ...data,
        roomImage: imageURL,
      };
      try {
        console.log("room data >>>", roomData);

        const roomDataUploadResponse = await addRoom(roomData);
        console.log("Add Room Response>> ", roomDataUploadResponse);
        alert("Room Added Successfully");
        reset();
      } catch (error) {
        console.log("Error in Adding Room >> ", error);
        alert("An Error Occurred while adding the Room");
      }
    } else {
      console.log("ImagesUploaded...", imagesUploaded);
      console.log("else state variables...");
      console.log("imageURL available @else from firbase >>", imageURL);
      if (!imagesUploaded) {
        alert("Uploading Files. Click Ok to continue");
        console.log("Image URLs not available.");
        if (roomImageFile) {
          console.log("uploadimng room image ...");
          await uploadImage(roomImageFile).then((res) => {
            console.log("response >>> ", res);
            setImagesUploaded(true);
            return res.data;
          });
        }
      }
    }
  };

  return (
    <div className="mt-16">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div class="px-5 md:px-20">
          <div className="mb-4">
            <label htmlFor="roomDescription" className="block mb-1">
              Room Description:
            </label>
            <Controller
              name="roomDescription"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Room Description"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              )}
            />
            {/* {errors.roomDescription && (
          <span className="text-red-500">This field is required</span>
        )} */}
          </div>

          <div className="mb-4">
            <label htmlFor="roomPrice" className="block mb-1">
              Room Price:
            </label>
            <Controller
              name="roomPrice"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Room Price"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              )}
            />
            {/* {errors.roomDescription && (
          <span className="text-red-500">This field is required</span>
        )} */}
          </div>

          <div className="mb-4">
            <label htmlFor="roomType" className="block mb-1">
              Room Type
            </label>
            <Controller
              name="roomType"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="roomType"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              )}
            />
            {/* {errors.roomDescription && (
          <span className="text-red-500">This field is required</span>
        )} */}
          </div>

          <div className="mb-4">
            <label htmlFor="roomBeds" className="block mb-1">
              Room Beds
            </label>
            <Controller
              name="roomBeds"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="roomBeds"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              )}
            />
            {/* {errors.roomDescription && (
          <span className="text-red-500">This field is required</span>
        )} */}
          </div>

          <div className="mt-2">
            <label className="block mb-1 text-gray-600">Room Image</label>
            <div className="w-full border border-yellow-400 rounded py-2 px-3 cursor-pointer">
              <input
                type="file"
                {...register("roomImage", { required: true })}
              // disabled={userDetails != null ? true : false}
              />
              {/* <p>
                  {errors?.insurancePolicy
                    ? "This field is required"
                    : "Drag and drop an image here or click to browse"}
                </p> */}
            </div>
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              {imageUploadLoading
                ? `${imageUploadProgress} % Image uploading...`
                : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
