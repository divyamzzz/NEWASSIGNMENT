import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./UserContext";
import axios from "axios";

const Users = () => {
  const { users, setUsers, page, setPage } = useUserContext();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td><img src={user.avatar} alt="Avatar" width="50" /></td>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)} className="deltebutton">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
      <button onClick={() => setPage(page + 1)} disabled={page === 2}>Next</button>
    </div>
  );
};

export default Users;
