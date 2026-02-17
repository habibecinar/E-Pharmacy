import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Input } from '../../shared/components';
import './AuthPage.css';

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
        {/* Left Side - Hero */}
        <div className="auth-left">
          <div className="auth-logo-section">
            <div className="auth-logo">
              <img src="/images/logo/logo.png" alt="E-Pharmacy" className="logo-image" />
              <span>E-Pharmacy</span>
            </div>
          </div>

          <div className="auth-hero">
            <div className="pill-illustration">
              <div className="pill-circle">
                <div className="pill-shape"></div>
              </div>
            </div>

            <div className="auth-hero-text">
              <h1>
                Your medication,<br />
                delivered Say goodbye<br />
                to all <span className="highlight">your healthcare</span><br />
                worries with us
              </h1>
            </div>

            <div className="decorative-pills">
              <div className="small-pill pill-1"></div>
              <div className="small-pill pill-2"></div>
              <div className="small-pill pill-3"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-right">
          <div className="auth-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
              <Input
                type="email"
                placeholder="Email address"
                fullWidth
                error={errors.email?.message}
                {...register('email')}
              />

              <Input
                type="password"
                placeholder="Password"
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
                className="auth-submit-btn"
              >
                Log in
              </Button>

              <p className="auth-switch">
                Don't have an account?{' '}
                <Link to="/register" className="auth-link">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
