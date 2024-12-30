
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordModal from './ForgotPasswordModal'; 
import './Login.css';

const Login = ({ onLogin, onSignUpClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      onLogin();
      setSuccessMessage('Login successful');
      setErrors({});
      navigate('/');
    } else {
      setErrors(validationErrors);
    }
  };

  
  return (
    <div className="login-page">
      <div className="welcome-banner">
        <img src="/tblogo.jpg" className="TBimg" alt="Talent Boost" />
        <div>Welcome to Talent Boost</div>
      </div>

      {isLoginVisible && ( 
        <div className="login-container">
          <h2>Login</h2>
          {successMessage ? (
            <div className="success-message">
              <p>{successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className="error">{errors.password}</div>}
              </div>
              <button type="submit">Login</button>
              <div className="additional-text">
                <p className="forgot-password">
                  <a href="#forgot-password" onClick={() => { 
                    setIsModalOpen(true);
                    setIsLoginVisible(false); 
                  }} className='forgot'>
                    Forgot your password?
                  </a>
                </p>
                <p>Don't have an account? <a href="#sign-up" onClick={onSignUpClick}>Sign up here</a></p>
              </div>
            </form>
          )}
        </div>
      )}

      {isModalOpen && (
        <ForgotPasswordModal />
      )}
    </div>
  );
};

export default Login;
