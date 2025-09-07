import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (cb) => {
    setIsLoggedIn(true);
    if (cb) cb();
  };

  const logout = (cb) => {
    setIsLoggedIn(false);
    if (cb) cb();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
