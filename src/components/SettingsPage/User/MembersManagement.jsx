import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMembers } from '../../../features/Member/MemberAction'; // Adjust the path as needed
import MemberForm from './MemberForm';
import MemberList from './MemberList';

const MembersManagement = () => {
  const dispatch = useDispatch();
  const membersState = useSelector((state) => state.member);
  const { members = [], status = 'idle', error = null } = membersState || {};
  
  const [editingMember, setEditingMember] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMembers());
    }
  }, [status, dispatch]);

  const handleEdit = (member) => {
    setEditingMember(member);
  };

  const handleFormSubmit = () => {
    setEditingMember(null); // Clear editing member after form submission
    dispatch(fetchMembers()); // Optionally refetch members
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Manage Members</h2>

      <MemberForm existingMember={editingMember} onFormSubmit={handleFormSubmit} />

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <MemberList members={members} onEdit={handleEdit} />
    </div>
  );
};

export default MembersManagement;
