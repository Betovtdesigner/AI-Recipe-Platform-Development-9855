import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('healthyRecipeUser');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const saveUser = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('healthyRecipeUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('healthyRecipeUser');
  };

  return (
    <UserContext.Provider value={{
      user,
      isAuthenticated,
      saveUser,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
};