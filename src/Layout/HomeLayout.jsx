import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/HomePage/NavigationBar";

const HomeLayout = () => {
  return (
    <div className="flex min-h-screen ">
      {/* Navigation Bar */}
      <NavigationBar className="w-64  shadow-md" />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
