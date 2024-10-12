import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  getFirestore,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBTATbdNoCUL-XEjztavWBrV9ZkmpkuDyY",
  authDomain: "hotel-project-ecd01.firebaseapp.com",
  projectId: "hotel-project-ecd01",
  storageBucket: "hotel-project-ecd01.appspot.com",
  messagingSenderId: "156488808431",
  appId: "1:156488808431:web:72e3997f5722f601eea81a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/////////////////////////////////////////
//  ROOMS RELATED FUNCTIONS //
////////////////////////////////////////

// Todo
// Fetch rooms from firebase
// Update room details in firebase
// Delete  rooms from firebase

export const useRoomImageUploader = () => {
  const [imageURL, setImageURL] = useState("");
  const [loadingRoomImage, setLoadingRoomImage] = useState(false);
  const [roomImageUploadProgress, setRoomImageUploadProgress] = useState(false);

  const storage = getStorage(app);
  const metadata = {
    contentType: "image/jpeg",
  };

  const postRoomImage = async (file) => {
    const roomsStorageRef = ref(storage, "roomsPage/" + file.name);
    try {
      await uploadBytes(roomsStorageRef, file);
      console.log("Uploaded Image #", file.name);
      const roomImageUrl = await getDownloadURL(roomsStorageRef);
      console.log("Download Url >>", roomImageUrl);
      setImageURL(roomImageUrl);
    } catch (err) {
      console.error("An error occured >", err);
    }
  };

  const uploadRoomImage = async (file) => {
    // Initialize the result object
    const result = {
      data: null,
      status: "pending",
    };

    console.log("Uploading room image >>", file);

    // Upload file and metadata to the object 'images/mountains.jpg'
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, "roomPage/" + file.name);

    try {
      setLoadingRoomImage(true);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setRoomImageUploadProgress(parseInt(parseFloat(progress).toFixed(0)));

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle errors
          result.status = "error";
          result.error = error;
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("File available at", downloadURL);
              console.log(
                "image uploaded succeffully. click on submit button again"
              );
              setImageURL(downloadURL);
              setLoadingRoomImage(false);
              // Update the result object with the download URL and status
              alert("image uploaded succeffully. click on submit button again");
              result.data = downloadURL;
              result.status = "success";
            })
            .catch((error) => {
              // Handle errors when getting the download URL
              result.status = "error";
              result.error = error;
            });
        }
      );
    } catch (err) {
      // Handle any other errors that may occur
      console.log("the following error occurred >>", err);
      result.status = "error";
      result.error = err;
    }

    return result; // Return the result object
  };

  return {
    imageURL,
    roomImageUploadProgress,
    loadingRoomImage,
    uploadRoomImage,
  };
};

export const useRoomFunctions = () => {
  const [loading, setLoading] = useState(false);
  const [roomsLoading, setRoomsLoading] = useState(false);

  // const [imageURL, setImageURL] = useState("");
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Fetch Rooms from DB
  const getRooms = async () => {
    setRoomsLoading(true);
    setError(false);
    const roomsRef = collection(db, "Rooms");
    try {
      const querySnapshot = await getDocs(roomsRef);
      const roomsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRooms(roomsData);
      console.log("Rooms >>", roomsData);
      setRoomsLoading(false);
      setError(null);
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error("An error occured >>", err);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);

  //  Add new Room to Firebase
  const addRoom = async (data) => {
    setLoading(true);
    setError(false);
    try {
      const roomRef = doc(collection(db, "Rooms"));
      await setDoc(roomRef, data);
      setSuccess(true);
      setLoading(false);
      return { success: true, message: "Room added successfully" };
    } catch (err) {
      setSuccess(false);
      setLoading(false);
      setError(err);
      console.error("Opps, an error occured while adding Room >>", err);
      return { success: false, message: "Failed to add the room" };
    }
  };

  const deleteRoom = async (id) => {
    try {
      await deleteDoc(doc(db, "Rooms", id));
    } catch (error) {
      console.error("Oppss! the following error occured >>", error);
    }
  };

  return {
    getRooms,
    addRoom,
    deleteRoom,
    loading,
    error,
    success,
    rooms,
    roomsLoading,
  };
};


