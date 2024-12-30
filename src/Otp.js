
import { useState } from 'react';
import './Otp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Otp() {
  const [otp1, setOtp1] = useState(); 
  const [otp2, setOtp2] = useState(); 
  const [otp3, setOtp3] = useState(); 
  const [otp4, setOtp4] = useState(); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(otp1&&otp2&&otp3&&otp4==='')
    {
      setError('Please enter OTP');
      return;
    }try{
      const response = await axios.post('http://localhost:5000/api/verify-otp', { otp1,otp2,otp3,otp4 });
      console.log("OTP  Response:", response.data);
      if (response.data.message === 'OTP verified successfully') {
        console.log("Navigating to Home page");
        navigate('/changepassword');
      } else {
        setError('Failed to verify the OTP. Please try again.');
      }
    }
    catch(err){
      setError('Failed to send OTP. Please check your email and try again.');
      console.error("Error from API:", err);
    }
    
  }
  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <form onSubmit={handleSubmit}>
      <div className="otp-inputs">
        <input type="number"  className="otp-input"  value={otp1} 
        onChange={(e) => setOtp1(e.target.value)}/>
        <input type="number"  className="otp-input"  value={otp2}  
        onChange={(e) => setOtp2(e.target.value)}/>
        <input type="number"  className="otp-input"  value={otp3} 
         onChange={(e) => setOtp3(e.target.value)}/>
        <input type="number" className="otp-input"   value={otp4} 
         onChange={(e) => setOtp4(e.target.value)}/>
      </div>
      {error && <p className="error-message">{error}</p>}
      <button className="submit-otp" >Submit OTP</button>
      </form>
    </div>
  );
}
export default Otp;

