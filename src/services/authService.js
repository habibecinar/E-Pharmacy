// Mock auth service - no backend required
const getMockUsers = () => JSON.parse(localStorage.getItem('mockUsers') || '[]');
const saveMockUsers = (users) => localStorage.setItem('mockUsers', JSON.stringify(users));

export const authService = {
  login: async ({ email, password }) => {
    if (email === 'admin@epharmacy.com' && password === 'admin123') {
      const adminUser = { id: 'admin', name: 'Admin', email, role: 'admin' };
      return { token: 'mock-admin-token', user: adminUser };
    }

    const users = getMockUsers();
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) throw new Error('Invalid email or password');
    return { token: 'mock-token-' + found.id, user: { id: found.id, name: found.name, email: found.email } };
  },

  register: async ({ name, email, password, phone }) => {
    const users = getMockUsers();
    if (users.find(u => u.email === email)) throw new Error('Email already registered');
    const newUser = { id: Date.now().toString(), name, email, password, phone };
    saveMockUsers([...users, newUser]);
    return newUser;
  },

  logout: async () => {
    return true;
  },

  getCurrentUser: async () => {
    const user = localStorage.getItem('currentUser');
    if (!user) throw new Error('Not authenticated');
    return JSON.parse(user);
  },
};
