import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext.jsx';

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = () => {
    login(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Click the button to sign in (mock).</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
