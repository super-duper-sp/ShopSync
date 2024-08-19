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

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {user && (
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">User Profile</h1>
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
              <label htmlFor="Role" className="block text-gray-700 font-semibold mb-2">Role:</label>
              <input
                type="Role"
                id="Role"
                name="Role"
                value={formData.Role}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200"
            >
              Update Profile
            </button>
          </form>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Shop Details</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
            <p><strong>id:</strong> {user.shop._id}</p>
              <p><strong>Name:</strong> {user.shop.name}</p>
              <p><strong>Address:</strong> {user.shop.address}</p>
              <p><strong>Contact Number:</strong> {user.shop.contact_number}</p>
              <p><strong>Description:</strong> {user.shop.description}</p>
              <p><strong>Email:</strong> {user.shop.email}</p>
              <p><strong>Created At:</strong> {new Date(user.shop.createdAt).toLocaleDateString()}</p>
              <p><strong>Updated At:</strong> {new Date(user.shop.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default UserDetails;