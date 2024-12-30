// // // src/LoginPage.js
// // import React, { useState } from 'react';
// // import './Login.css'; // Ensure this path is correct

// // const LoginPage = ({ onLogin }) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [successMessage, setSuccessMessage] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Simulate login logic
// //     if (email && password) {
// //       // Simulate successful login
// //       setSuccessMessage('Login successful!');
// //       onLogin();
// //       setError('');
// //     } else {
// //       setError('Please enter both email and password.');
// //       setSuccessMessage('');
// //     }
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="login-modal-content">
// //         <button className="modal-close-button" onClick={() => {/* Close modal logic */}}>×</button>
// //         {successMessage && (
// //           <div className="success-message">
// //             <p>{successMessage}</p>
// //             <button className="close-success-button" onClick={() => setSuccessMessage('')}>Close</button>
// //           </div>
// //         )}
// //         <div className="log">Login</div>
// //         <form onSubmit={handleSubmit}>
// //           {error && <div className="error">{error}</div>}
// //           <div className="form-group">
// //             <label htmlFor="email" className="icon">📧</label>
// //             <input
// //               type="email"
// //               id="email"
// //               className="form-input"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               placeholder="Email"
// //               required
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="password" className="icon">🔒</label>
// //             <input
// //               type="password"
// //               id="password"
// //               className="form-input"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="Password"
// //               required
// //             />
// //           </div>
// //           <button type="submit" className="submit-button">Login</button>
// //           <a href="/signup" className="signup-link">Sign Up</a>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;

// import React, { useState } from 'react';
// import './Login.css'; // Ensure this path is correct

// const LoginPage = ({ onLogin, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Simulate login logic
//     if (email && password) {
//       try {
//         // Simulate an API call to authenticate the user
//         const response = await fetch('/api/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email, password }),
//         });
//         const result = await response.json();
        
//         if (result.success) {
//           setSuccessMessage('Login successful!');
//           onLogin();
//           setError('');
//         } else {
//           setError(result.message || 'Login failed. Please try again.');
//           setSuccessMessage('');
//         }
//       } catch (err) {
//         setError('An error occurred. Please try again.');
//         setSuccessMessage('');
//       }
//     } else {
//       setError('Please enter both email and password.');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="login-modal-content">
//         <button className="modal-close-button" onClick={onClose}>×</button>
//         {successMessage && (
//           <div className="success-message">
//             <p>{successMessage}</p>
//             <button className="close-success-button" onClick={() => setSuccessMessage('')}>Close</button>
//           </div>
//         )}
//         <div className="log">Login</div>
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
//           <button type="submit" className="submit-button">Login</button>
//           <a href="/signup" className="signup-link">Sign Up</a>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
