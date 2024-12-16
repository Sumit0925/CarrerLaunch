import React, { useState, useEffect } from 'react';

function UserForm({ onAddUser, selectedUser, onUpdateUser }) {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      onUpdateUser(user);
    } else {
      onAddUser(user);
    }
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit">{selectedUser ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default UserForm;
