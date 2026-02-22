import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Input } from '../../shared/components';
import './AuthPage.css';
import './RegisterPage.css';

const accountSchema = yup.object().shape({
  name:     yup.string().required('Name is required').min(2, 'At least 2 characters'),
  email:    yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(6, 'At least 6 characters'),
  phone:    yup.string().required('Phone is required'),
});

const shopSchema = yup.object().shape({
  shopName:      yup.string().required('Shop name is required'),
  ownerName:     yup.string().required('Owner name is required'),
  streetAddress: yup.string().required('Street address is required'),
  city:          yup.string().required('City is required'),
  zipCode:       yup.string().required('Zip code is required'),
  hasDelivery:   yup.string().required('Please select delivery option'),
});

const LeftPanel = () => (
  <div className="auth-left">
    <div className="auth-logo-section">
      <div className="auth-logo">
        <img src="/images/logo/logo.png" alt="E-Pharmacy" className="logo-image" />
        <span>E-Pharmacy</span>
      </div>
    </div>
    <div className="auth-hero">
      <div className="pill-illustration">
        <img src="/images/hero/white-pill.png" alt="Medicine" className="auth-pill-img" />
      </div>
      <div className="auth-hero-text">
        <h1>
          Your medication,<br />
          delivered Say goodbye<br />
          to all <span className="highlight">your healthcare</span><br />
          worries with us
        </h1>
      </div>
    </div>
  </div>
);

const StepIndicator = ({ step }) => (
  <div className="reg-steps">
    <div className={`reg-step ${step > 1 ? 'reg-step--done' : 'reg-step--active'}`}>
      <span className="reg-step__num">{step > 1 ? '\u2713' : '1'}</span>
      <span className="reg-step__label">Account Info</span>
    </div>
    <div className={`reg-step-divider ${step > 1 ? 'reg-step-divider--done' : ''}`} />
    <div className={`reg-step ${step === 2 ? 'reg-step--active' : ''}`}>
      <span className="reg-step__num">2</span>
      <span className="reg-step__label">Create Shop</span>
    </div>
  </div>
);

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register: registerUser } = useAuth();
  const [step, setStep] = useState(1);
  const [accountData, setAccountData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register: regStep1,
    handleSubmit: handleStep1,
    formState: { errors: errors1 },
  } = useForm({ resolver: yupResolver(accountSchema) });

  const {
    register: regStep2,
    handleSubmit: handleStep2,
    formState: { errors: errors2 },
  } = useForm({ resolver: yupResolver(shopSchema) });

  const onStep1Submit = (data) => {
    setAccountData(data);
    setServerError('');
    setStep(2);
  };

  const onStep2Submit = async (shopData) => {
    setIsLoading(true);
    setServerError('');
    try {
      await registerUser({ ...accountData, shopData });
      navigate('/login', { replace: true });
    } catch (err) {
      setServerError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <LeftPanel />
        <div className="auth-right">
          <div className="auth-form-container">
            <StepIndicator step={step} />

            {step === 1 ? (
              <>
                <h2 className="reg-title">Create your account</h2>
                <p className="reg-subtitle">Fill in your personal details below</p>
                <form onSubmit={handleStep1(onStep1Submit)} className="auth-form" noValidate>
                  <div className="form-row">
                    <Input
                      placeholder="Full Name"
                      fullWidth
                      error={errors1.name?.message}
                      {...regStep1('name')}
                    />
                    <Input
                      type="email"
                      placeholder="Email address"
                      fullWidth
                      error={errors1.email?.message}
                      {...regStep1('email')}
                    />
                  </div>
                  <div className="form-row">
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      fullWidth
                      error={errors1.phone?.message}
                      {...regStep1('phone')}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      fullWidth
                      error={errors1.password?.message}
                      {...regStep1('password')}
                    />
                  </div>
                  <Button type="submit" variant="primary" fullWidth size="large" className="auth-submit-btn">
                    Next — Create Shop &#x2192;
                  </Button>
                  <p className="auth-switch">
                    Already have an account?{'  '}
                    <Link to="/login" className="auth-link">Login</Link>
                  </p>
                </form>
              </>
            ) : (
              <>
                <h2 className="reg-title">Create your shop</h2>
                <p className="reg-subtitle">Tell us about your pharmacy shop</p>
                <form onSubmit={handleStep2(onStep2Submit)} className="auth-form" noValidate>
                  <div className="form-row">
                    <Input
                      placeholder="Shop Name"
                      fullWidth
                      error={errors2.shopName?.message}
                      {...regStep2('shopName')}
                    />
                    <Input
                      placeholder="Owner Name"
                      fullWidth
                      error={errors2.ownerName?.message}
                      {...regStep2('ownerName')}
                    />
                  </div>
                  <Input
                    placeholder="Street Address"
                    fullWidth
                    error={errors2.streetAddress?.message}
                    {...regStep2('streetAddress')}
                  />
                  <div className="form-row">
                    <Input
                      placeholder="City"
                      fullWidth
                      error={errors2.city?.message}
                      {...regStep2('city')}
                    />
                    <Input
                      placeholder="Zip / Postal Code"
                      fullWidth
                      error={errors2.zipCode?.message}
                      {...regStep2('zipCode')}
                    />
                  </div>
                  <div className="delivery-field">
                    <label className="delivery-label">Delivery service available?</label>
                    <div className="delivery-options">
                      <label className="delivery-option">
                        <input type="radio" value="yes" {...regStep2('hasDelivery')} />
                        <span className="delivery-option__box">Yes, we deliver</span>
                      </label>
                      <label className="delivery-option">
                        <input type="radio" value="no" {...regStep2('hasDelivery')} />
                        <span className="delivery-option__box">No delivery</span>
                      </label>
                    </div>
                    {errors2.hasDelivery && (
                      <span className="field-error">{errors2.hasDelivery.message}</span>
                    )}
                  </div>
                  {serverError && (
                    <div className="reg-server-error">{serverError}</div>
                  )}
                  <div className="reg-step2-actions">
                    <button type="button" className="btn-back" onClick={() => setStep(1)} disabled={isLoading}>
                      &#x2190; Back
                    </button>
                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      loading={isLoading}
                      className="auth-submit-btn"
                      style={{ flex: 1 }}
                    >
                      {isLoading ? 'Creating account…' : 'Create Account'}
                    </Button>
                  </div>
                  <p className="auth-switch">
                    Already have an account?{'  '}
                    <Link to="/login" className="auth-link">Login</Link>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
