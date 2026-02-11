import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from '../../shared/components';
import './MedicineStorePage.css';

const MedicineStorePage = () => {
  const [hasDelivery, setHasDelivery] = useState('yes');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Shop Data:', { ...data, hasDelivery });
    // TODO: API call to create shop
  };

  return (
    <div className="create-shop-page">
      <div className="container">
        <div className="create-shop-content">
          {/* Left Side - Form */}
          <div className="shop-form-section">
            <div className="form-header">
              <h1>Create your Shop</h1>
              <p className="form-subtitle">
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="shop-form">
              {/* Row 1 */}
              <div className="form-row">
                <div className="form-group">
                  <label>Shop Name</label>
                  <Input
                    placeholder="Enter text"
                    {...register('shopName', { required: 'Shop name is required' })}
                  />
                  {errors.shopName && (
                    <span className="error">{errors.shopName.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Shop Owner Name</label>
                  <Input
                    placeholder="Enter text"
                    {...register('ownerName', { required: 'Owner name is required' })}
                  />
                  {errors.ownerName && (
                    <span className="error">{errors.ownerName.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Email address</label>
                  <Input
                    type="email"
                    placeholder="Enter text"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <span className="error">{errors.email.message}</span>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <Input
                    placeholder="Enter text"
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>Street address</label>
                  <Input
                    placeholder="Enter text"
                    {...register('streetAddress', { required: 'Street address is required' })}
                  />
                  {errors.streetAddress && (
                    <span className="error">{errors.streetAddress.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label>City</label>
                  <Input
                    placeholder="Enter text"
                    {...register('city', { required: 'City is required' })}
                  />
                  {errors.city && (
                    <span className="error">{errors.city.message}</span>
                  )}
                </div>
              </div>

              {/* Row 3 */}
              <div className="form-row">
                <div className="form-group zip-field">
                  <label>Zip / Postal</label>
                  <Input
                    placeholder="Enter text"
                    {...register('zipCode', { required: 'Zip code is required' })}
                  />
                  {errors.zipCode && (
                    <span className="error">{errors.zipCode.message}</span>
                  )}
                </div>
              </div>

              {/* Delivery System */}
              <div className="form-group delivery-section">
                <label className="delivery-label">Has own Delivery System?</label>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      value="yes"
                      checked={hasDelivery === 'yes'}
                      onChange={(e) => setHasDelivery(e.target.value)}
                    />
                    <span className="radio-text">Yes</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      value="no"
                      checked={hasDelivery === 'no'}
                      onChange={(e) => setHasDelivery(e.target.value)}
                    />
                    <span className="radio-text">No</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <Button type="submit" variant="primary" className="create-btn">
                  Create account
                </Button>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="shop-image-section">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop" 
                alt="Medicine"
                className="shop-illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineStorePage;
