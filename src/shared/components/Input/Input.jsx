import { forwardRef } from 'react';
import './Input.css';

const Input = forwardRef(({ 
  label, 
  error, 
  type = 'text',
  fullWidth = false,
  className = '',
  ...props 
}, ref) => {
  return (
    <div className={`input-wrapper ${fullWidth ? 'input-wrapper--full-width' : ''} ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        ref={ref}
        type={type}
        className={`input ${error ? 'input--error' : ''}`}
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
