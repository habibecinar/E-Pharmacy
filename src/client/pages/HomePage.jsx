import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Input } from '../../shared/components';
import './HomePage.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  phone: yup.string().required('Phone is required'),
});

const HomePage = () => {
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();
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
      await registerUser(data);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Left Side - Hero Text & Pill */}
            <div className="hero-left">
              <h1 className="hero-title">
                Your medication,<br />
                delivered Say goodbye<br />
                to all <span className="hero-highlight">your healthcare</span><br />
                worries with us
              </h1>
              <div className="hero-pill">
                <img 
                  src="/images/hero/white-pill.png" 
                  alt="Medicine Pill" 
                  className="hero-pill-img"
                />
              </div>
            </div>

            {/* Right Side - Register Form */}
            <div className="hero-right">
              <form onSubmit={handleSubmit(onSubmit)} className="register-form">
                <div className="form-row">
                  <Input
                    placeholder="User Name"
                    error={errors.name?.message}
                    {...register('name')}
                  />

                  <Input
                    type="email"
                    placeholder="Email address"
                    error={errors.email?.message}
                    {...register('email')}
                  />
                </div>

                <div className="form-row">
                  <Input
                    placeholder="Phone number"
                    error={errors.phone?.message}
                    {...register('phone')}
                  />

                  <Input
                    type="password"
                    placeholder="Password"
                    error={errors.password?.message}
                    {...register('password')}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  fullWidth 
                  size="large"
                  loading={isLoading}
                >
                  Register
                </Button>

                <p className="auth-switch">
                  Already have an account?{' '}
                  <Link to="/login" className="auth-link">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
