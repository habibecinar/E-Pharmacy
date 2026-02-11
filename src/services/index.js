import api from './api';

export const productService = {
  getAll: async (params = {}) => {
    return await api.get('/products', { params });
  },

  getById: async (id) => {
    return await api.get(`/products/${id}`);
  },

  create: async (data) => {
    return await api.post('/products', data);
  },

  update: async (id, data) => {
    return await api.put(`/products/${id}`, data);
  },

  delete: async (id) => {
    return await api.delete(`/products/${id}`);
  },

  search: async (query, category = '') => {
    return await api.get('/products/search', { 
      params: { q: query, category } 
    });
  },
};

export const storeService = {
  getAll: async () => {
    return await api.get('/stores');
  },

  getById: async (id) => {
    return await api.get(`/stores/${id}`);
  },

  getRandom: async (limit = 6) => {
    return await api.get('/stores/random', { params: { limit } });
  },
};

export const orderService = {
  getAll: async (params = {}) => {
    return await api.get('/orders', { params });
  },

  getById: async (id) => {
    return await api.get(`/orders/${id}`);
  },

  create: async (data) => {
    return await api.post('/orders', data);
  },

  update: async (id, data) => {
    return await api.put(`/orders/${id}`, data);
  },
};

export const supplierService = {
  getAll: async (params = {}) => {
    return await api.get('/suppliers', { params });
  },

  getById: async (id) => {
    return await api.get(`/suppliers/${id}`);
  },

  create: async (data) => {
    return await api.post('/suppliers', data);
  },

  update: async (id, data) => {
    return await api.put(`/suppliers/${id}`, data);
  },
};

export const customerService = {
  getAll: async (params = {}) => {
    return await api.get('/customers', { params });
  },

  getRecent: async (limit = 5) => {
    return await api.get('/customers/recent', { params: { limit } });
  },
};

export const dashboardService = {
  getStats: async () => {
    return await api.get('/dashboard/stats');
  },

  getIncomeExpenses: async () => {
    return await api.get('/dashboard/income-expenses');
  },
};

export const reviewService = {
  getByProduct: async (productId, params = {}) => {
    return await api.get(`/products/${productId}/reviews`, { params });
  },

  getAll: async () => {
    return await api.get('/reviews');
  },
};

export const cartService = {
  get: async () => {
    return await api.get('/cart');
  },

  add: async (productId, quantity) => {
    return await api.post('/cart/add', { productId, quantity });
  },

  update: async (itemId, quantity) => {
    return await api.put(`/cart/${itemId}`, { quantity });
  },

  remove: async (itemId) => {
    return await api.delete(`/cart/${itemId}`);
  },

  clear: async () => {
    return await api.delete('/cart');
  },
};
