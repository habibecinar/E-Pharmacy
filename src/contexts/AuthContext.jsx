import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Mock users stored in localStorage
const getMockUsers = () => JSON.parse(localStorage.getItem('mockUsers') || '[]');
const saveMockUsers = (users) => localStorage.setItem('mockUsers', JSON.stringify(users));

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    const userRole = localStorage.getItem('userRole');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAdmin(userRole === 'admin');
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password }) => {
    const users = getMockUsers();
    const found = users.find(u => u.email === email && u.password === password);
    
    // Admin mock login
    if (email === 'admin@epharmacy.com' && password === 'admin123') {
      const adminUser = { id: 'admin', name: 'Admin', email, role: 'admin' };
      localStorage.setItem('currentUser', JSON.stringify(adminUser));
      localStorage.setItem('userRole', 'admin');
      setUser(adminUser);
      setIsAdmin(true);
      toast.success('Successfully logged in!');
      return adminUser;
    }

    if (!found) {
      toast.error('Invalid email or password');
      throw new Error('Invalid email or password');
    }

    const loggedUser = { id: found.id, name: found.name, email: found.email };
    localStorage.setItem('currentUser', JSON.stringify(loggedUser));
    localStorage.setItem('userRole', 'user');
    setUser(loggedUser);
    setIsAdmin(false);
    toast.success('Successfully logged in!');
    return loggedUser;
  };

  const register = async ({ name, email, password, phone, shopData }) => {
    const users = getMockUsers();
    const exists = users.find(u => u.email === email);
    
    if (exists) {
      toast.error('Email already registered');
      throw new Error('Email already registered');
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      phone,
      shopData: shopData || null,
    };
    saveMockUsers([...users, newUser]);
    toast.success('Account created! Please login.');
    return newUser;
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
    setUser(null);
    setIsAdmin(false);
    toast.success('Logged out successfully');
  };

  const value = {
    user,
    isAdmin,
    loading,
    login,
    register,
    logout,
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '20px',
        color: '#4CAF50'
      }}>
        Loading E-Pharmacy...
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
