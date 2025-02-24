import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/AuthPages/SignIn";
import Ecommerce from "./pages/Dashboard/ECommerce";
import NotFound from "./pages/OtherPage/NotFound";
import Announcement from "./pages/Announcement";
import Activity from "./pages/ActivityMain";
import Gallery from "./pages/Gallery";
import AnnualPlanner from "./pages/AnnualPlanner";
import { selectCheckAuthentication } from "../store/admin/adminAuthSlice";

// Private Route Component (for authentication check)
const PrivateRoute = () => {
  const isAuthenticated = useSelector(selectCheckAuthentication);
  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" />;
};

export default function AdminRoutes() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/admin" element={<SignIn />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<AppLayout />}>
            <Route index path="/admin/dashboard" element={<Ecommerce />} />
            <Route path="/admin/annualplanner" element={<AnnualPlanner />} />
            <Route path="/admin/activity" element={<Activity />} />
            <Route path="/admin/announcement" element={<Announcement />} />
            <Route path="/admin/gallery" element={<Gallery />} />
          </Route>
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
