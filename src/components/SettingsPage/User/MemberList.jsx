import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMembers, addMember, updateMember, deleteMember } from '../../../features/Member/MemberAction'; // Update the path if needed
import { Pencil, Trash2 } from 'lucide-react';

const MemberList = () => {
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedMember, setEditedMember] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { members, totalPages, status, error } = useSelector(state => state.member);

  useEffect(() => {
    dispatch(fetchMembers({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setShowEditModal(true);
    setEditedMember(members[index]);
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteMember(id));
      alert("Member deleted successfully");
    } catch (error) {
      alert("Error deleting member");
      console.error("Error deleting member:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedMember(prevMember => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleSaveEdit = async () => {
    try {
      await dispatch(updateMember({id: editedMember._id ,memberData: editedMember}));
      setEditIndex(null);
      setShowEditModal(false);
      alert("Member updated successfully");
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

  const handleCloseModal = () => {
    setEditIndex(null);
    setShowEditModal(false);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full min-w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-100 border-b">
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Name</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Email</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Role</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Edit</th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">Delete</th>
              </tr>
            </thead>
            <tbody>
              {members.map(({ _id, name, email, role }, index) => (
                <tr key={_id} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{name}</td>
                  <td className="px-4 py-2">{email}</td>
                  <td className="px-4 py-2">{role}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleEdit(index)} className="text-green-500 hover:text-green-700">
                      <Pencil className="w-5 h-5" />
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleDelete(_id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center px-4 py-2 text-white font-bold rounded-lg shadow-md ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          } transition-colors duration-300`}
          aria-label="Previous page"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="ml-2">Previous</span>
        </button>
        
        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center px-4 py-2 text-white font-bold rounded-lg shadow-md ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          } transition-colors duration-300`}
          aria-label="Next page"
        >
          <span className="mr-2">Next</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-4">Edit Member</h2>
            <form>
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={editedMember.name || ""}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={editedMember.email || ""}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              {/* Role */}
              <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={editedMember.role || ""}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg shadow-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberList;
