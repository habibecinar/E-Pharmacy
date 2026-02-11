/**
 * Form Validation Rules
 * Used with react-hook-form
 */

export const validationRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    }
  },

  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters'
    }
  },

  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^[0-9]{10}$/,
      message: 'Phone must be 10 digits'
    }
  },

  required: {
    required: 'This field is required'
  },

  price: {
    required: 'Price is required',
    min: {
      value: 0,
      message: 'Price must be positive'
    }
  },

  stock: {
    required: 'Stock is required',
    min: {
      value: 0,
      message: 'Stock cannot be negative'
    }
  }
};

// Custom validation functions
export const validateConfirmPassword = (password) => ({
  validate: (value) => value === password || 'Passwords do not match'
});
