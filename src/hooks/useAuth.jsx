import { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('resumeAI_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signUp = async (name, email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          id: Date.now(),
          name,
          email,
          token: 'mock_jwt_token_' + Date.now(),
        };
        localStorage.setItem('resumeAI_user', JSON.stringify(user));
        setCurrentUser(user);
        resolve(user);
      }, 1000);
    });
  };

  const signIn = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          id: 1,
          name: email.split('@')[0], // Mock name from email
          email,
          token: 'mock_jwt_token_' + Date.now(),
        };
        localStorage.setItem('resumeAI_user', JSON.stringify(user));
        setCurrentUser(user);
        resolve(user);
      }, 1000);
    });
  };

  const signOut = () => {
    localStorage.removeItem('resumeAI_user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};