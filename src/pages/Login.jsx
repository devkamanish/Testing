import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("admin");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, role);

    if (role === "admin") navigate("/admin");
    if (role === "manager") navigate("/manager");
    if (role === "user") navigate("/user");
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="admin">admin</option>
          <option value="manager">manager</option>
          <option value="user">user</option>
        </select>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
