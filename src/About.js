import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      {/* <img src="/path-to-your-logo/logoTB.png" alt="Logo" className="logo" /> */}
      <img src='/tblogo.jpg' className='logo' alt='Talent Boost' />
      <h1>About Us</h1>
      <p>
        Welcome to our application! Our platform is designed to offer an intuitive and user-friendly experience.
        We focus on delivering high-quality features and seamless functionality to enhance your productivity and engagement.
      </p>
      <p>
        Our team is dedicated to continuous improvement and innovation. We strive to incorporate user feedback and stay up-to-date with the latest technological advancements.
        Thank you for choosing our application. We hope you have a great experience!
      </p>
    </div>
  );
};

export default About;
