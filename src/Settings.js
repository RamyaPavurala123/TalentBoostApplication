import React, { useState } from 'react';
import './Settings.css';
import axios from 'axios';



const Settings = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  
  // const [notifications, setNotifications] = useState({
  //   emailNotifications: true,
  //   smsNotifications: false,
  // });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value,
    }));
  };

  // const handleNotificationsChange = (e) => {
  //   const { name, checked } = e.target;
  //   setNotifications((prevNotifications) => ({
  //     ...prevNotifications,
  //     [name]: checked,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/settings', {
        profile,
        password,
        // notifications,
      });
      console.log(response.data);
      // alert('Settings updated successfully!');
    } catch (error) {
      console.error('Error updating settings:', error);
      // alert('Error updating settings.');
    }
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <h2>Profile Information</h2>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
            />
          </label>
        </section>

        <section>
          <h2>Change Password</h2>
          <label>
            Current Password:
            <input
              type="password"
              name="currentPassword"
              value={password.currentPassword}
              onChange={handlePasswordChange}
            />
          </label>
          <label>
            New Password:
            <input
              type="password"
              name="newPassword"
              value={password.newPassword}
              onChange={handlePasswordChange}
            />
          </label>
          <label>
            Confirm New Password:
            <input
              type="password"
              name="confirmPassword"
              value={password.confirmPassword}
              onChange={handlePasswordChange}
            />
          </label>
        </section>




        {/* <section>
          <h2>Notification Preferences</h2>
          <label>
            Email Notifications:
            <input
              type="checkbox"
              name="emailNotifications"
              checked={notifications.emailNotifications}
              onChange={handleNotificationsChange}
            />
          </label>
          <label>
            SMS Notifications:
            <input
              type="checkbox"
              name="smsNotifications"
              checked={notifications.smsNotifications}
              onChange={handleNotificationsChange}
            />
          </label>
        </section> */}

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
