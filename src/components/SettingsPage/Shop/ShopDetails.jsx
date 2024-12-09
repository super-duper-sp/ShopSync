import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShopDetails, editShopDetails } from '../../../features/Shop/ShopAction';

const ShopDetails = () => {
  const dispatch = useDispatch();
  const { shop, loading, error } = useSelector((state) => state.shop);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', contact_number: '', email: '', description: '' });

  useEffect(() => {
    dispatch(fetchShopDetails());
  }, [dispatch]);

  useEffect(() => {
    if (shop) {
      setFormData({
        name: shop.name,
        address: shop.address,
        contact_number: shop.contact_number,
        email: shop.email,
        description: shop.description,
      });
    }
  }, [shop]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    dispatch(editShopDetails(formData));
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
      
    {loading && <p className="text-center text-blue-500">Loading...</p>}
    {error && <p className="text-center text-red-500">Error: {error}</p>}

    {shop && (
      <div>
        {isEditing ? (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Edit Shop Details</h1>
            <form>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="contact_number">Contact Number:</label>
                  <input
                    type="text"
                    id="contact_number"
                    name="contact_number"
                    value={formData.contact_number}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={toggleEdit}
                className="ml-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{shop.name}</h1>
            <div className="mb-6">
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-semibold">Address:</span> {shop.address}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-semibold">Contact Number:</span> {shop.contact_number}
              </p>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> {shop.email}
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-semibold">Description:</span> {shop.description}
              </p>
            </div>
            <button
              onClick={toggleEdit}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Edit Shop Details
            </button>
          </div>
        )}
      </div>
    )}
  </div>
  );
};

export default ShopDetails;