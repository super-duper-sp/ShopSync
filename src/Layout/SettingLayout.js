import React from 'react';
import { Outlet } from 'react-router-dom';

const SettingLayout = () => {
  return (
    <div className='min-h-screen p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-sm'>
      {/* Container for main content */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SettingLayout;
