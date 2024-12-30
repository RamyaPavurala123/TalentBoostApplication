import React from 'react';
import './ProfilePopup.css';

const ProfilePopup = ({ user, onClose }) => {
  return (
    <div className="profile-popup">
      <div className="profile-popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* Add more profile details or options here */}
      </div>
    </div>
  );
};

export default ProfilePopup;
