import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
    return savedUser ?? null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  });

  const login = (userData, tokenData, remember = false) => {
    setUser(userData);
    setToken(tokenData);

    if (remember) {
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', tokenData);
    } else {
      sessionStorage.setItem('user', JSON.stringify(userData));
      sessionStorage.setItem('token', tokenData);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


