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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* User-Related Routes */}
      <Route path="/" element={<UserUi />}>
        {/* Home Page */}
        <Route index element={<App />} />

        {/* Explore Hotels Page (with filters) */}
        <Route path="explore" element={<ExploreHotels />} />

        {/* Room Details Page */}
        <Route path="rooms/:id" element={<RoomDetails />} />

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

          {/* Room Management */}
          <Route path="rooms/manage" element={<ManageRooms />} />
          <Route path="rooms/create" element={<RoomCreation />} />

          {/* Booking Management */}
          <Route path="bookings/manage" element={<ManageBookings />} />

          {/* Financial Dashboard */}
          <Route path="earnings" element={<FinancialDashboard />} />

          {/* Review Management */}
          <Route path="reviews/manage" element={<ManageReviews />} />
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
