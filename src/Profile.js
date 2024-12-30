
import React, { useState } from 'react';
import './Profile.css';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';

const Profile = ({ onClose, onSwitchToLogin }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const errors = {};
    if (!firstName) errors.firstName = 'First Name is required';
    if (!lastName) errors.lastName = 'Last Name is required';
    if (!email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
    if (!password) errors.password = 'Password is required';
    if (!phone) errors.phone = 'Phone Number is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            phoneNumber: phone, 
          }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Server error');
        }

        const data = await response.json();
        setSuccessMessage('Sign-up successful');
        setErrors({}); // Clear any previous errors
        // Clear form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhone('');
      } catch (error) {
        setErrors({ form: error.message });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="profile-modal-content">
        <button className="modal-close-button" onClick={onClose}>X</button>
        {successMessage ? (
          <div className="success-message">
            <p>{successMessage}</p>
            <button onClick={onClose} className="close-success-button">Close</button>
          </div>
        ) : (
          <>
            <h2 className="sign-up-heading">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">
                  <FaUser className="icon" />
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-input"
                  />
                </label>
                {errors.firstName && <div className="error">{errors.firstName}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="last-name">
                  <FaUser className="icon" />
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-input"
                  />
                </label>
                {errors.lastName && <div className="error">{errors.lastName}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="icon" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                  />
                </label>
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <FaLock className="icon" />
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                  />
                </label>
                {errors.password && <div className="error">{errors.password}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  <FaPhone className="icon" />
                  <input
                    id="phone"
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </label>
                {errors.phone && <div className="error">{errors.phone}</div>}
              </div>
              {errors.form && <div className="error">{errors.form}</div>}
              <button type="submit" className="submit-button">Sign Up</button>
              <p>Already have an account? <span onClick={onSwitchToLogin} className="login-link">Login</span></p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
