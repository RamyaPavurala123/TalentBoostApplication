
// import React, { useState } from 'react';
// import './ChangePassword.css';
// import axios from 'axios';

// function ChangePassword() {
//     const [password,setNewPassword]= useState('');
//     const [Confirmpassword,setConfirmPassword]= useState('');
//     const [error,setError] = useState('');
//     //const [success, setSuccess] = useState('');
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//       if(!password  || !Confirmpassword)
//       {
//         console.log("Submit ERROR")
//         setError("Enter New Password..!")
//       }
//     if (password !== Confirmpassword) {
//       console.log("not matching password..")
//       setError("Passwords do not match.");
//     }
//     // else if(password === Confirmpassword){
//     //   alert("password is correct")
//     // }

//     try{
//       const response = await axios.post("http://localhost:5000/api/update-password",{password})
      
//       if(response.data.message==="")
//       {
//         console.log("Password updated successfully!");
//         console.log("Errror for change password")
//         // setNewPassword('');
//         // setConfirmPassword('');
//       }
     
//     }
//     catch(err)
//     {
//       console.log("ERROR HANDLING",err)
//       setError("failed to update the password");

//     }
//     }
    
//   return (
//     <div className='changepasswordcontainer'>
//       <form onSubmit={handleSubmit}>
//       <h2 className='heading'>Change Password</h2>
//        <br/>
//         <div className='newpassword'>
//           <input type="password" placeholder='New Password'  
//           value={password} 
//           onChange={(e) => setNewPassword(e.target.value)}/>

//           <input type="password"
//            placeholder='Confirm Password' 
//              value={Confirmpassword} 
//              onChange={(e) => setConfirmPassword(e.target.value)}/>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <button type='submit'>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default ChangePassword;


import React, { useState } from 'react';
import './ChangePassword.css';
import axios from 'axios';



function ChangePassword() {
  const [email, setEmail] = useState('');
  const [password, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError("Please enter email and both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/update-password", {
        email,
        password,
        confirmPassword
      });

      if (response.data.message === "Password updated successfully!") {
        setSuccess("Password updated successfully!");
        setEmail('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Update failed:", err);
      setError("Failed to update the password. Please try again.");
    }
  };

  return (
    <div className='changepasswordcontainer'>
      <form onSubmit={handleSubmit}>
        <h2 className='heading'>Change Password</h2>
        <br />
        <div className='newpassword'>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='New Password'
            value={password}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;






