
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ForgotPasswordModal.css'; 



function ForgotPasswordModal() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '') {
      setError('Please enter your email');
      return;
    }
    try {
      // console.log("Starting OTP request...");
      const response = await axios.post('http://localhost:5000/api/send-otp', { email });
      // console.log("OTP API Response:", response.data);
      console.log("ERROR")

      if (response.data.message === 'OTP sent successfully') {
      
        //console.log("OTP form should open now");
        // console.log("Navigating to OTP page");
        navigate('/otp');
      } else {
        setError('Failed to send OTP. Please try again.');
      }
    } catch (err) {
      setError('Failed to verify the  OTP. Please check your email and try again.');
      // console.error("Error from OTP:", err);
    }
  };
  return (
    <div className='forgotdiv'>
      <div>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Send OTP</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPasswordModal;