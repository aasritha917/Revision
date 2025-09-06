import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signup", { name, email, password });
      setMsg(res.data.message);
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setMsg(err?.response?.data?.message || "Error");
    }
  }

  return (
    <div className="form-box">
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" required />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" required />
        <button type="submit">Signup</button>
      </form>
      <p className="msg">{msg}</p>
    </div>
  );
}
