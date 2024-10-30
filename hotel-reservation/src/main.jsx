import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import UserUi from "./layouts/UserUi.jsx";
import RoomDetails from "./pages/RoomDetails.jsx";
import RoomCreation from "./pages/RoomCreation.jsx";
import ExploreHotels from "./pages/ExploreHotels.jsx";
import UserProfileLayout from "./layouts/UserProfileLayout.jsx";
import MyBookings from "./pages/UserProfile/MyBookings.jsx";
import BookingConfirmation from "./pages/BookingConfirmation.jsx";
import Contact from "./pages/Contact.jsx";
import HotelDetails from "./pages/HotelDetails.jsx";
import AccountSettings from "./pages/UserProfile/AccountSettings.jsx";
import Notifications from "./pages/UserProfile/Notifications.jsx";
import Wishlists from "./pages/UserProfile/Wishlists.jsx";
import ProfileDashboard from "./pages/UserProfile/ProfileDashboard.jsx";
import FAQ from "./pages/FAQ.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import PrivateRoutes from "./auth/PrivateRoutes.jsx";
import AdminLayout from "./layouts/admin/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import ManageRooms from "./pages/admin/ManageRooms.jsx";
import ManageBookings from "./pages/admin/ManageBookings.jsx";
import FinancialDashboard from "./pages/admin/FinancialDashboard.jsx";
import ManageReviews from "./pages/admin/ManageReviews.jsx";
import About from "./pages/About.jsx";
import HotelProfile from "./pages/admin/HotelProfile.jsx";
import RoomManagement from "./layouts/admin/RoomManagement.jsx";
import Settings from "./pages/admin/Settings.jsx";
import RoomList from "./pages/admin/RoomList.jsx";
import Login from "./auth/Login.jsx";
import SignUp from "./auth/HotelSignup.jsx";
import RoomTypeDetails from "./pages/RoomTypeDetails.jsx";
import HotelSignUp from "./auth/HotelSignup.jsx";
import HotelSignUpConfirm from "./pages/HotelSignUpConfirm.jsx";
import HotelsList from "./pages/admin/HotelsList.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* User-Related Routes */}
      <Route path="/" element={<UserUi />}>
        {/* Home Page */}
        <Route index element={<App />} />

        {/* Explore Hotels Page (with filters) */}
        <Route path="explore" element={<ExploreHotels />} />


        {/* Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="hotel-signup" element={<HotelSignUp />} />
        <Route path="new-hotel-confirm" element={<HotelSignUpConfirm />} />

        {/* Room Details Page */}
        <Route path="rooms/:id" element={<RoomDetails />} />
        <Route path="rooms/types/:type" element={<RoomTypeDetails />} />

        {/* Hotel Detail Page */}
        <Route path="hotels/:hotelId" element={<HotelDetails />} />

        {/* Booking Confirmation Page */}
        <Route path="booking/confirmation/:bookingId" element={<BookingConfirmation />} />

        {/* User Account Pages */}
        <Route path="profile" element={<UserProfileLayout />}>
          <Route index element={<ProfileDashboard />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="wishlists" element={<Wishlists />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<AccountSettings />} />
        </Route>

        {/* General Pages */}
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<TermsConditions />} />
      </Route>

      {/* Admin-Related Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="admin" element={<AdminLayout />}>
          {/* Admin Dashboard */}
          <Route index element={<AdminDashboard />} />

          {/* Booking Management */}
          <Route path="profile/:hotelId" element={<HotelProfile />} />
          <Route path="hotels" element={<HotelsList />} />

          {/* Room Management */}
          <Route path="rooms" element={<RoomManagement />} >
            <Route index element={<RoomList />} />
            <Route path="manage" element={<ManageRooms />} />
            <Route path="create" element={<RoomCreation />} />
          </Route>

          {/* Booking Management */}
          <Route path="bookings" element={<ManageBookings />} />

          {/* Financial Dashboard */}
          <Route path="finances" element={<FinancialDashboard />} />

          {/* Review Management */}
          <Route path="reviews" element={<ManageReviews />} />

          {/* settings */}
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
