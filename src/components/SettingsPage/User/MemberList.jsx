import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMembers, addMember, updateMember, deleteMember } from '../../../features/Member/MemberAction'; // Update the path if needed
import { Pencil, Trash2 } from 'lucide-react';

const MemberList = () => {
  const [editIndex, setEditIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedMember, setEditedMember] = useState({});
  const [showAddMemberModal, setShowAddMemberModal] = useState(true);
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
      await dispatch(updateMember({ id: editedMember._id, memberData: editedMember }));
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

  const handleAddMemberCloseModal = () => {
    setShowAddMemberModal(false)
  };

  const handleAddMember = () => {
    setShowAddMemberModal(true)
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
    <div>


     
        <div>
        <div className="flex justify-between items-center">
  <h2 className="text-xl font-bold">Shop Member's</h2>
  <a
   
    className="text-yellow-500 hover:text-yellow-700 text-sm"
    onClick={() => handleAddMember()}
  >
    + Add Member 
  </a>
</div>
          <table className="w-full mt-4">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="text-left py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Role</th>
                <th className="py-2">Edit</th>
                <th className="py-2">Save</th>
              </tr>
            </thead>
            <tbody>

              {members.map(({ _id, name, email, role }, index) => (

                <tr
                  key={_id}
                  className="border-b hover:bg-gray-50 text-sm"
                >
                  <td className="py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-800 rounded mr-3"></div>
                      <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-gray-400 text-xs">Bruno Scott</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">{email}</td>
                  <td className="text-center">{role}</td>

                  <td className="text-center">
                    <button onClick={() => handleEdit(index)} className="text-green-500 hover:text-green-700">
                      <Pencil className="w-5 h-5" />
                    </button>
                  </td>
                  
                  <td className="text-center">
                    <button onClick={() => handleDelete(_id)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>

              ))}
            </tbody>
           
          </table>
        </div>

      {/* Pagination Controls */}
       <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center px-4 py-2 text-white font-bold rounded-lg shadow-md ${currentPage === 1
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
          className={`flex items-center justify-center px-4 py-2 text-white font-bold rounded-lg shadow-md ${currentPage === totalPages
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

      {/* Edit Modal for members list*/}
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


       {/* Add member  Modal */}
       {showAddMemberModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-semibold mb-4">Add Member</h2>
            <MemberList/>
            <button
                  type="button"
                  onClick={handleAddMemberCloseModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg shadow-md"
                >
              Cancel
            </button>
          </div>
        </div>
      )}


       



    </div>
  );
};

export default MemberList;
