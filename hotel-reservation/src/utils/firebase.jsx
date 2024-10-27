import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from "firebase/auth";
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
  getDoc,
  getDocs,
  deleteDoc,
  getFirestore,
  updateDoc,
  query, where
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
export const auth = getAuth(app);

////////////////////////  /////
// GlobalUploadImageFunction //
////////////////////////  /////

export const useUploadImage = () => {
  const [imageUploadProgress, setImageUploadProgress] = useState(0);
  const [imageURL, setImageURL] = useState(null);
  const [imageUploadLoading, setImageUploadLoading] = useState(false);

  const uploadImage = async (file, bucketName) => {
    const result = {
      data: null,
      status: "pending",
    };

    console.log("uploading_image >>", file);
    console.log("storage_bucket >>", bucketName);

    // Upload file and metadata to the object 'images/mountains.jpg'
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, bucketName + file.name);

    try {
      setImageUploadLoading(true);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("upload_is " + progress + "% done");
          setImageUploadProgress(parseInt(parseFloat(progress).toFixed(0)));

          switch (snapshot.state) {
            case "paused":
              console.log("upload_is_paused");
              break;
            case "running":
              console.log("upload_is_running");
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
              setImageURL(downloadURL);
              setImageUploadLoading(false);
              // Update the result object with the download URL and status
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
      console.log("the_following_error_occurred >>", err);
      result.status = "error";
      result.error = err;
    }

    return result; // Return the result object
  };

  return { imageUploadProgress, imageURL, imageUploadLoading, uploadImage };
};

////////////////////////  /////
// GlobalDateFormattingFunction //
////////////////////////  /////

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


// ///////////////////////////
//   Auth Related Functions //
// //////////////////////////

export const useAuthenticationFunctions = () => {

  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
  };

  const login = async (email, password) => {
    console.log("logging in ... ");
    console.log("email >> ", email);
    console.log("password >> ", password);

    try {
      // Authenticate the user with the provided email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Return a success message or code
      return {
        success: true,
        message: "Login successful",
        loggedInUser: userCredential.user,
      };
    } catch (error) {
      // Handle authentication errors
      console.error("Login failed", error);

      // Return an error message or code
      return {
        success: false,
        error: error.code,
        message: error.message,
        loggedInUser: null,
      };
    }
  };

  const createNewUser = async (email, password) => {
    console.log("Signing up...");
    console.log("email >> ", email);
    console.log("password >> ", password);


    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // User signed up successfully
      const user = userCredential.user;
      console.log("User signed up: ", user);

      // You can perform additional actions with the user object here
      return {
        success: true,
        uid: user.uid,  // Unique ID of the user
        email: user.email,  // The email of the newly created user
        message: "User created successfully!",
      };

    } catch (error) {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Code: ", errorCode);
      console.log("Error Message: ", errorMessage);

      // You can add custom error handling logic here if needed

      return {
        success: false,
        errorCode: error.code,
        errorMessage: error.message,
      };
    }
  };


  const createClientUser = async () => {
    const provider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider

    try {
      // Sign in with Google popup
      const result = await signInWithPopup(auth, provider);

      // Extracting Google Access Token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // Extracting signed-in user info
      const user = result.user;

      // You can access user info such as displayName, email, photoURL, etc.
      console.log("User signed in successfully: ", user);

      // Optional: handle additional user info if required
      // const additionalInfo = getAdditionalUserInfo(result);

      return {
        success: true,
        user,
        token,
      };
    } catch (error) {
      // Handle sign-in errors
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email; // Email used in the attempt
      const credential = GoogleAuthProvider.credentialFromError(error); // The AuthCredential used

      console.error("Error during Google sign-in:", errorMessage);

      return {
        success: false,
        errorCode,
        errorMessage,
        email,
        credential,
      };
    }



  }


  return {
    login, logout, createNewUser, createClientUser
  }
}


/////////////////////////////////////////
//  Hotel RELATED FUNCTIONS //
////////////////////////////////////////

// TODO:
// create a verified Hotel Document with UID ==> user.uid
// Get All Hotel Documents
// Get Hotel Document by ID
// 

export const useHotelFunctions = () => {

  const createHotelDocument = async (data, userUid) => {
    console.log("hotel data for creating new hotel instance >> ", data);
    const newHotelData = { ...data, verified: false, userId: null }
    const hotelCollectionRef = collection(
      db,
      "Hotels",
    );

    try {
      const newHotelColRef = doc(hotelCollectionRef);
      await setDoc(newHotelColRef, newHotelData);
      return { success: true, message: "Hotel added successfully" };
    } catch (error) {
      return { success: false, message: "Failed to add the hotel", error: error };
    }
  }

  const getAllHotels = async () => {
    const hotelsCollectionRef = collection(
      db,
      "Hotels"
    );

    const hotelsSnapshot = await getDocs(hotelsCollectionRef);
    if (hotelsSnapshot?.empty) {
      console.log("No hotels exists in the db");
      return {
        success: false,
        data: [],
        message: `No hotels exists in the database`,
      };
    } else {
      console.log(
        "hotelsSnapShot from fetchHotels >> ",
        hotelsSnapshot
      );
      const hotelData = hotelsSnapshot?.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return {
        success: true,
        data: hotelData,
        message: `${hotelData?.length}hotels exists in the selected category`,
      };
    }
  }

  const getAllApprovedHotels = async () => {
    const hotelsCollectionRef = collection(
      db,
      "Hotels"
    );

    const approvedHotelsQuery = query(hotelsCollectionRef, where("verified", "==", true));

    const approvedHotelsSnapshot = await getDocs(approvedHotelsQuery);

    if (approvedHotelsSnapshot?.empty) {
      console.log("No hotels exists in the db");
      return {
        success: false,
        data: [],
        message: `No hotels exists in the database`,
      };
    } else {
      console.log(
        "approvedHotelsSnapshot from fetchHotels >> ",
        approvedHotelsSnapshot
      );
      const hotelData = approvedHotelsSnapshot?.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return {
        success: true,
        data: hotelData,
        message: `${hotelData?.length}hotels exists in the selected category`,
      };
    }
  }

  const getHotelById = async (id) => {
    try {
      const hotelDocRef = doc(db, "Hotels", id); // Reference to the specific hotel document
      const hotelDocSnap = await getDoc(hotelDocRef);

      if (hotelDocSnap.exists()) {
        const hotelData = hotelDocSnap.data();
        console.log("Hotel data:", hotelData);
        return {
          success: true,  // Indicating success
          hotelData: hotelData,  // Returning hotel data as part of the dictionary
        };
      } else {
        console.log("No such hotel!");
        return {
          success: false,  // Indicating failure
          message: "No such hotel!",  // Reason for failure
        };
      }
    } catch (error) {
      console.error("Error fetching hotel:", error);
      return {
        success: false,  // Indicating failure
        message: "Error fetching hotel",  // General error message
        error: error.message,  // Detailed error message
      };
    }
  };

  const verifyHotelById = async (id) => {
    const { createNewUser } = useAuthenticationFunctions()
    const selectedHotelResponse = await getHotelById(id)
    const hotelDocRef = doc(db, "Hotels", id); // Reference to the specific hotel document

    if (selectedHotelResponse?.success) {
      const email = selectedHotelResponse?.hotelData?.email
      const password = selectedHotelResponse?.hotelData?.password

      try {
        const createNewUserResponse = await createNewUser(email, password)
        console.log("createNew UserResponse >> ", createNewUserResponse);

        if (createNewUserResponse?.success) {

          await updateDoc(hotelDocRef, {
            userId: createNewUserResponse?.uid,
            verified: true,
          });

          console.log(`Hotel with ID ${id} has been successfully verified.`);
          return {
            success: true,
            message: `Hotel with ID ${id} has been verified successfully.`,
          };
        } else {
          console.log("Error verifying hotel:", createNewUserResponse.error);
          return {
            success: false,
            message: "Error verifying hotel",
            error: createNewUserResponse.error
          }
        }

      } catch (error) {
        console.error(`Error verifying hotel with ID ${id}:`, error.message);

        // Return an error response
        return {
          success: false,
          message: `Failed to verify hotel with ID ${id}.`,
          error: error.message,
        };
      } a
    }

  };

  const rejectHotelById = async (id) => {
    const selectedHotelResponse = await getHotelById(id)
    const hotelDocRef = doc(db, "Hotels", id); // Reference to the specific hotel document

    if (selectedHotelResponse?.success) {


      try {
        await updateDoc(hotelDocRef, {
          verified: false,
        });

        console.log(`Hotel with ID ${id} has been successfully un-verified.`);
        return {
          success: true,
          message: `Hotel with ID ${id} has been un-verified successfully.`,
        };
      } catch (error) {
        console.error(`Error un-verifying hotel with ID ${id}:`, error.message);

        // Return an error response
        return {
          success: false,
          message: `Failed to un-verify hotel with ID ${id}.`,
          error: error.message,
        };
      }
    }

  };


  return {
    createHotelDocument, getAllHotels, getHotelById, verifyHotelById, rejectHotelById, getAllApprovedHotels
  }
}




/////////////////////////////////////////
//  ROOMS RELATED FUNCTIONS //
////////////////////////////////////////

// Todo
// Fetch rooms from firebase
// Update room details in firebase
// Delete  rooms from firebase
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

export const useBookingFunctions = () => {

  // Fetch all bookings
  const getBookings = async () => {
    try {
      const bookingsRef = collection(db, "Bookings");
      const querySnapshot = await getDocs(bookingsRef);
      const bookingsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return { success: true, data: bookingsData };
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return { success: false, error: error.message };
    }
  };

  // Fetch a single booking by ID
  const getBookingById = async (id) => {
    try {
      const bookingRef = doc(db, "Bookings", id);
      const bookingDoc = await getDoc(bookingRef);
      if (bookingDoc.exists()) {
        return { success: true, data: bookingDoc.data() };
      } else {
        return { success: false, error: "No such booking found" };
      }
    } catch (error) {
      console.error("Error fetching booking by ID:", error);
      return { success: false, error: error.message };
    }
  };

  // Post a new booking
  const postBooking = async (data) => {
    try {
      const bookingRef = await addDoc(collection(db, "Bookings"), data);
      return { success: true, id: bookingRef.id, message: "Booking created successfully" };
    } catch (error) {
      console.error("Error creating booking:", error);
      return { success: false, error: error.message };
    }
  };

  // Approve a booking
  const approveBooking = async (id) => {
    try {
      const bookingRef = doc(db, "Bookings", id);
      await updateDoc(bookingRef, { status: "approved" });
      return { success: true, message: "Booking approved" };
    } catch (error) {
      console.error("Error approving booking:", error);
      return { success: false, error: error.message };
    }
  };

  // Reject a booking
  const rejectBooking = async (id) => {
    try {
      const bookingRef = doc(db, "Bookings", id);
      await updateDoc(bookingRef, { status: "rejected" });
      return { success: true, message: "Booking rejected" };
    } catch (error) {
      console.error("Error rejecting booking:", error);
      return { success: false, error: error.message };
    }
  };

  // Delete a booking
  const deleteBooking = async (id) => {
    try {
      await deleteDoc(doc(db, "Bookings", id));
      return { success: true, message: "Booking deleted successfully" };
    } catch (error) {
      console.error("Error deleting booking:", error);
      return { success: false, error: error.message };
    }
  };

  return {
    getBookings,
    getBookingById,
    postBooking,
    approveBooking,
    rejectBooking,
    deleteBooking,
  };
};



