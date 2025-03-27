import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "./UserContext";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, setUsers } = useUserContext();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    const currentUser = users.find(u => u.id === parseInt(id));
    if (currentUser) {
      setUser(currentUser);
    }
  }, [id, users]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await axios.put(`https://reqres.in/api/users/${id}`, user);

    setUsers(users.map(u => (u.id === parseInt(id) ? response.data : u)));

    navigate("/users");
  };

  return (
    <div className="container">
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
        <input type="text" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
        <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
