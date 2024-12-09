import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../../../features/User/UserAction';

const UserDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Role: '',
  });

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        Role: user.Role || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
  };

  const shopDetails = [
    { label: "ID", value: user.shop._id || "N/A" },
    { label: "Name", value: user.shop.name || "N/A" },
    { label: "Address", value: user.shop.address || "N/A" },
    { label: "Contact Number", value: user.shop.contact_number || "N/A" },
    { label: "Description", value: user.shop.description || "N/A" },
    { label: "Email", value: user.shop.email || "N/A" },
    { label: "Created At", value: user.shop.createdAt ? new Date(user.shop.createdAt).toLocaleDateString() : "N/A" },
    { label: "Updated At", value: user.shop.updatedAt ? new Date(user.shop.updatedAt).toLocaleDateString() : "N/A" },
  ];

  return (
  <>
 <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {user && (
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">User Profile</h1>

        {/* user details edit  */}
        <form onSubmit={handleSubmit}>
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">Role:</label>
    <select
        id="role"
        name="Role"
        value={formData.Role} // This will ensure the default value is selected
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
      <option value="admin">Admin</option>
      <option value="shopmember">User</option>
      <option value="other">Other</option>
      {/* Add other roles as needed */}
    </select>
  </div>
  <button
    type="submit"
    className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200"
  >
    Update Profile
  </button>
</form>

      </div>
      )}
       


      
    </div>



     {/* Shop Information */}
     <div className=" mt-8 max-w-md mx-auto bg-white shadow-md rounded-lg p-6 relative">
            <div className="absolute -top-4 left-4 bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
              Shop Info
            </div>
            <ul className="list-disc list-inside text-gray-800">
              {shopDetails.map((detail, index) => (
                <li key={index}>
                  <strong className="text-gray-700">{detail.label}:</strong> {detail.value}
                </li >
              ))}
            </ul>
          </div> 

  </>
   
  );
};

export default UserDetails;