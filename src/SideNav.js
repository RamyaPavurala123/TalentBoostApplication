

import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './SideNav.css'; // Ensure the CSS is properly referenced

const SideNav = ({ isOpen, onClose }) => {
  return (
    <div className={`side-nav ${isOpen ? 'open' : ''}`}>
      <div className="side-nav-header">
        <button className="close-btn" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <div className="side-nav-links">
      {/* <Link to="/home" className="nav-item" onClick={onClose}>
  <HomeIcon className="nav-icon" />
  <span className="nav-text">Home</span>
</Link> */}

        <Link to="/profilepage" className="nav-item" onClick={onClose}>
          {/* <HomeIcon className="nav-icon" /> */}
          {/* <span className="nav-text">Profile </span> */}
          <AccountCircleIcon className='profileIcon'/>
        </Link>
        <Link to="/productpage" className="nav-item" onClick={onClose}>
          <HomeIcon className="nav-icon" />
          <span className="nav-text">Product </span>
        </Link>
        <Link to="/courses" className="nav-item" onClick={onClose}>
          <SchoolIcon className="nav-icon" />
          <span className="nav-text">Courses</span>
        </Link>
        <Link to="/practice" className="nav-item" onClick={onClose}>
          <BuildIcon className="nav-icon" />
          <span className="nav-text">Practice</span>
        </Link>
        <Link to="/settings" className="nav-item" onClick={onClose}>
          <SettingsIcon className="nav-icon" />
          <span className="nav-text">Settings</span>
        </Link>
        <Link to="/help" className="nav-item" onClick={onClose}>
          <HelpIcon className="nav-icon" />
          <span className="nav-text">Help</span>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
