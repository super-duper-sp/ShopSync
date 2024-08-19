import React from 'react';
import ShopDetails from '../components/SettingsPage/Shop/ShopDetails';
import MemberList from '../components/SettingsPage/User/MemberList';
import AddMemberForm from '../components/SettingsPage/User/AddMemberForm';

const ShopPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Shop Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Shop Details Section */}
        <div className=" p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Shop Details</h2>
          <ShopDetails />
        </div>
        
        {/* Add New Member Section */}
        <div className="p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Add New Member</h2>
          <AddMemberForm />
        </div>
      </div>
      
      {/* Members Management Section */}
      <div className=" p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Members Management</h2>
        <MemberList />
      </div>
    </div>
  );
};

export default ShopPage;
