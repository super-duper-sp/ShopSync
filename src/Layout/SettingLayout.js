import React from 'react';
import { Outlet } from 'react-router-dom';

const SettingLayout = () => {
  return (

    <div className="bg-yellow-50 min-h-screen p-6 font-sans text-gray-800 rounded-lg shadow-sm ">

      {/* Container for main content */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SettingLayout;
