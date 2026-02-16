import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Input } from '../../shared/components';
import './RegisterPage.css';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginPage = () => {
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
      await login(data);
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-promo">
          <div className="auth-promo-content">
            <img 
              src="/images/auth-bg.jpg" 
              alt="Medicine delivery" 
              className="auth-promo-image"
            />
            <div className="auth-promo-text">
              <h1>Your medication, delivered</h1>
              <p>Say goodbye to all your healthcare worries with us</p>
            </div>
          </div>
        </div>

        <div className="auth-form-wrapper">
          <div className="auth-form-header">
            <div className="auth-logo">
              <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#59B17A"/>
                <path d="M16 8L8 16H12V24H20V16H24L16 8Z" fill="white"/>
              </svg>
              <span>E-Pharmacy</span>
            </div>
            <h2>Welcome back</h2>
            <p>Log in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
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

            <p className="auth-switch">
              Don't have an account?{' '}
              <Link to="/register" className="auth-link">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
