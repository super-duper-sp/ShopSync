import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/HomePage/NavigationBar";

const HomeLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <NavigationBar className="w-64 bg-white shadow-md" />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
