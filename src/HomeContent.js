import React from 'react';
import './HomeContent.css'; // Ensure this CSS file reflects your theme
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const HomeContent = () => {
  return (
    <div className="home-content-page">
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Talent Boost</h1>
          <p>Empowering you to reach new heights in your career.</p>
        </div>
      </div>
      <div className="info-section">
        <div className="info-item">
          <InfoIcon className="info-icon" />
          <div className="info-text">
            <h2>About Us</h2>
            <p>At Talent Boost, we are dedicated to providing top-quality educational resources to help you advance your career. Our expert instructors deliver engaging content across various fields to ensure you gain practical and relevant skills.</p>
          </div>
        </div>
        <div className="info-item">
          <SchoolIcon className="info-icon" />
          <div className="info-text">
            <h2>Our Courses</h2>
            <p>Explore our diverse range of courses designed to suit your career goals. Whether you're interested in Front-End Development, Middleware, Back-End Programming, or other specialized fields, we offer comprehensive and hands-on learning experiences.</p>
          </div>
        </div>
        <div className="info-item">
          <WorkIcon className="info-icon" />
          <div className="info-text">
            <h2>Career Opportunities</h2>
            <p>Our courses are crafted to not only enhance your skills but also to help you land your dream job. From resume building to interview preparation, we provide the tools and guidance you need to excel in the job market.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
