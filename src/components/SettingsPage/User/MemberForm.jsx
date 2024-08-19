import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMember, updateMember } from '../../../features/Member/MemberAction'; // Adjust the path as needed

const MemberForm = ({ existingMember, onFormSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', isAdmin: false });
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (existingMember) {
      setFormData({ name: existingMember.name, email: existingMember.email, password: '', isAdmin: existingMember.isAdmin });
      setEditingId(existingMember._id);
    } else {
      setFormData({ name: '', email: '', password: '', isAdmin: false });
      setEditingId(null);
    }
  }, [existingMember]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(updateMember({ id: editingId, memberData: formData }));
    } else {
      dispatch(addMember(formData));
    }
    onFormSubmit(); // Notify parent to clear form or update state
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        {editingId ? 'Edit Member' : 'Add New Member'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter username"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email address"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="isAdmin"
            name="isAdmin"
            checked={formData.isAdmin}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="isAdmin" className="ml-2 text-sm font-medium text-gray-600">Admin</label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {editingId ? 'Update Member' : 'Add Member'}
        </button>
      </form>
    </div>
  );
};

export default MemberForm;
