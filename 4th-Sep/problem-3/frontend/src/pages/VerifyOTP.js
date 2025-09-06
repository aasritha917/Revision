import React, { useRef, useState } from "react";
import api from "../api";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyOTP() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const [msg, setMsg] = useState("");
  const inputs = [useRef(), useRef(), useRef(), useRef()];
  const [loading, setLoading] = useState(false);

  function handleKey(e, idx) {
    if (e.key === "Backspace" && e.target.value === "" && idx > 0) {
      inputs[idx - 1].current.focus();
    }
  }

  function handleChange(e, idx) {
    const v = e.target.value;
    if (!/^\d?$/.test(v)) return;
    if (v.length === 1 && idx < 3) {
      inputs[idx + 1].current.focus();
    }
  }

  async function submitOtp() {
    const otp = inputs.map(r => r.current.value || "").join("");
    if (otp.length < 4) return setMsg("Enter 4-digit OTP");
    setLoading(true);
    try {
      const res = await api.post("/auth/verify-otp", { email, otp });
      const token = res.data.token;
      localStorage.setItem("auth_token", token);
      navigate("/dashboard");
    } catch (err) {
      setMsg(err?.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-box">
      <h3>Verify OTP</h3>
      <p>OTP sent to {email}</p>
      <div className="otp-row">
        {inputs.map((r, i) => (
          <input key={i} ref={r} maxLength="1" onKeyDown={e => handleKey(e, i)} onChange={e => handleChange(e, i)} />
        ))}
      </div>
      <button onClick={submitOtp} disabled={loading}>{loading ? "Verifying..." : "Verify"}</button>
      <p className="msg">{msg}</p>
    </div>
  );
}
