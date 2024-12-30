
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CartProvider } from './CartContext'; 

import Login from './Login';
import Navbar from './Navbar';
import HomeContent from './HomeContent';
import Profile from './Profile';
import InterviewQuestions from './InterviewQuestions';
import Courses from './Courses';
import Settings from './Settings';
import About from './About';
import Practice from './Practice';
import ProfilePage from './ProfilePage';
import ProductPage from './ProductPage';
import ForgotPasswordModal from './ForgotPasswordModal';
import Otp from './Otp';
import ChangePassword from './ChangePassword'
import './App.css'; 
import FrontEnd from './FrontEnd'; 
import BackEnd from './BackEnd'; 
import Python from './Python';
import HTMLConcepts from './HTMLConcepts';
import CSSConcepts from './CSSConcepts';
import JavaScriptConcepts from './JavaScriptConcepts';
import ReactjsConcepts from './ReactjsConcepts';
import JavaConcepts from './JavaConcepts';
import AdvanceJavaTopics from './AdvanceJavaTopics';
import PythonConcepts from './PythonConcepts'




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleSignUpClick = () => {
    setShowSignUpPopup(true);
  };
  const handleClosePopup = () => {
    setShowSignUpPopup(false);
  };
  return (
     <CartProvider> 
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          {isLoggedIn && <Navbar />}
          <div style={{ display: 'flex', flex: 1 }}>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} onSignUpClick={handleSignUpClick} />} />
              <Route path="/" element={isLoggedIn ? <HomeContent /> : <Navigate to="/login" />} />
               
               <Route path="/forgot-password" element={<ForgotPasswordModal />} />
               <Route path="/otp" element={<Otp />} />
               <Route path="/changepassword" element={<ChangePassword />} />
             
              <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
              <Route path="/interview-questions" element={<InterviewQuestions />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
            
              <Route path="/practice" element={<Practice />} />
              <Route path="/profilepage" element={<ProfilePage />} />
              <Route path="/productpage" element={<ProductPage />} /> 
            </Routes>
            <Routes>
            <Route path="/Courses/FrontEnd" element={<FrontEnd />} />
            <Route path="/Courses/BackEnd" element={<BackEnd />} />
            <Route path="/Courses/Python" element={<Python />} />
            <Route path="HTMLConcepts" element={<HTMLConcepts />} />
            <Route path="CSSConcepts" element={<CSSConcepts />} />
            <Route path="JavaScriptConcepts" element={<JavaScriptConcepts />} />
            <Route path="ReactjsConcepts" element={<ReactjsConcepts />} />
            <Route path="/JavaConcepts" element={<JavaConcepts />} />
            <Route path="/AdvanceJavaTopics" element={<AdvanceJavaTopics />} />
            <Route path="/PythonConcepts" element={<PythonConcepts />} />
 
            </Routes>
            {/* <Router>
            <Route path="/Courses/FrontEnd/HTMLConcepts" element={<HTMLConcepts />} />
           </Router>  */}
          </div>
        </div>

        {showSignUpPopup && (
          <div className="modal-overlay">
            <Profile onClose={handleClosePopup} />
          </div>
        )}
      </Router>
    </CartProvider>
  );
};

export default App;