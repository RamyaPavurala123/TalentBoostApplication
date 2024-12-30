// // src/SignUpPage.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// //import './Profile.css'; // Ensure this path is correct
// //import './SignUp.css';
// //import './SignUp.css'; //

// const SignUpPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       setSuccessMessage('');
//       return;
//     }
//     // Simulate sign-up logic
//     if (email && password) {
//       setSuccessMessage('Sign Up successful!');
//       setError('');
//     } else {
//       setError('Please fill out all fields.');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="signup-modal-content">
//         <button className="modal-close-button" onClick={() => {/* Close modal logic */}}>×</button>
//         {successMessage && (
//           <div className="success-message">
//             <p>{successMessage}</p>
//             <button className="close-success-button" onClick={() => setSuccessMessage('')}>Close</button>
//           </div>
//         )}
//         <div className="log">Sign Up</div>
//         <form onSubmit={handleSubmit}>
//           {error && <div className="error">{error}</div>}
//           <div className="form-group">
//             <label htmlFor="email" className="icon">📧</label>
//             <input
//               type="email"
//               id="email"
//               className="form-input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password" className="icon">🔒</label>
//             <input
//               type="password"
//               id="password"
//               className="form-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="confirmPassword" className="icon">🔒</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="form-input"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm Password"
//               required
//             />
//           </div>
//           <button type="submit" className="submit-button">Sign Up</button>
//           <Link to="/login" className="signup-link">Already have an account? Login</Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
