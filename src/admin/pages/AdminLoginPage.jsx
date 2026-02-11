import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Input } from '../../shared/components';
import './AdminLoginPage.css';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await login(data, 'admin');
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <div className="admin-login-header">
          <div className="admin-login-logo">
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#59B17A"/>
              <path d="M16 8L8 16H12V24H20V16H24L16 8Z" fill="white"/>
            </svg>
            <span>E-Pharmacy Admin</span>
          </div>
          <h2>Admin Login</h2>
          <p>Sign in to access the management panel</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="admin-login-form">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your admin email"
            fullWidth
            error={errors.email?.message}
            {...register('email')}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            fullWidth
            error={errors.password?.message}
            {...register('password')}
          />

          <Button 
            type="submit" 
            variant="primary" 
            fullWidth 
            size="large"
            loading={isLoading}
          >
            Log In Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
