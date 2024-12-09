import React from 'react';
import ShopDetails from '../components/SettingsPage/Shop/ShopDetails';
import MemberList from '../components/SettingsPage/User/MemberList';
import AddMemberForm from '../components/SettingsPage/User/AddMemberForm';

const ShopPage = () => {
  return (
    <div >

      {/* Shop Details Section */}
      <ShopDetails />

      {/* Add New Member Section */}
      <AddMemberForm />

      {/* Members Management Section */}
      <MemberList />

    </div>
  );
};

export default ShopPage;
