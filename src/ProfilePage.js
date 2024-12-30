

import React, { useState } from 'react';
import './ProfilePage.css';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DeleteIcon from '@mui/icons-material/Delete';

const ProfilePage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [profileImage, setProfileImage] = useState(null);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };


  const handleCloseDelete = () => {
    if (profileImage) {
      setProfileImage(null);
      alert("Profile image deleted.");
    } else {
      alert("No profile image to delete.");
    }
  };


  const handleEdit=()=>
  {
    alert("Hai these is alert box for edit ")
  }
  return (
    <>
      {isVisible && (
        <div className="profile-icon">
          <h1 id="profile">Profile</h1>
          <p className="close" onClick={handleClose}>X</p>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="profileImage"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
               
              }}
            />
          ) : (
            <PersonIcon className="personICON" />
          )}
          <br />
          <EditIcon className="facebookICON"  onClick={handleEdit}/>
          {/* <span className='edit'>Edit</span> */}
          <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
            <CameraAltIcon className="InstaICON" />
            {/* <span className='camera'>Camera</span> */}
          </label>
          <DeleteIcon className="GoogleICON" onClick={handleCloseDelete} />
          {/* <span className='Delete'>Edit</span> */}
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
      )}
    </>
  );
};

export default ProfilePage;













// import React, { useState } from 'react';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';
// import './ProfilePage.css';
// import PersonIcon from '@mui/icons-material/Person';
// import EditIcon from '@mui/icons-material/Edit';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import DeleteIcon from '@mui/icons-material/Delete';
// import 'react-image-crop/dist/ReactCrop.css';


// const ProfilePage = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [profileImage, setProfileImage] = useState(null);
//   const [crop, setCrop] = useState({ aspect: 1 });
//   const [editMode, setEditMode] = useState(false);
//   const [croppedImage, setCroppedImage] = useState(null);

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setProfileImage(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleCropComplete = (crop) => {
//     if (profileImage && crop.width && crop.height) {
//       const canvas = document.createElement('canvas');
//       const image = new Image();
//       image.src = profileImage;

//       image.onload = () => {
//         const scaleX = image.naturalWidth / image.width;
//         const scaleY = image.naturalHeight / image.height;
//         canvas.width = crop.width;
//         canvas.height = crop.height;
//         const ctx = canvas.getContext('2d');

//         ctx.drawImage(
//           image,
//           crop.x * scaleX,
//           crop.y * scaleY,
//           crop.width * scaleX,
//           crop.height * scaleY,
//           0,
//           0,
//           crop.width,
//           crop.height
//         );

//         const croppedUrl = canvas.toDataURL('image/jpeg');
//         setCroppedImage(croppedUrl);
//         setEditMode(false);
//       };
//     }
//   };

//   const handleCloseDelete = () => {
//     if (profileImage) {
//       setProfileImage(null);
//       setCroppedImage(null);
//       alert('Profile image deleted.');
//     } else {
//       alert('No profile image to delete.');
//     }
//   };

//   return (
//     <>
//       {isVisible && (
//         <div className="profile-icon">
//           <h1 id="profile">Profile</h1>
//           <p className="close" onClick={handleClose}>
//             X
//           </p>
//           {croppedImage || profileImage ? (
//             <img
//               src={croppedImage || profileImage}
//               alt="Profile"
//               className="profileImage"
//               style={{
//                 width: '100px',
//                 height: '100px',
//                 borderRadius: '50%',
//               }}
//             />
//           ) : (
//             <PersonIcon className="personICON" />
//           )}
//           <br />
//           <EditIcon className="facebookICON" onClick={handleEdit} />
//           <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
//             <CameraAltIcon className="InstaICON" />
//           </label>
//           <DeleteIcon className="GoogleICON" onClick={handleCloseDelete} />
//           <input
//             type="file"
//             id="fileInput"
//             style={{ display: 'none' }}
//             onChange={handleFileChange}
//             accept="image/*"
//           />

//           {editMode && (
//             <div className="edit-mode">
//               <ReactCrop
//                 src={profileImage}
//                 crop={crop}
//                 onChange={(newCrop) => setCrop(newCrop)}
//                 onComplete={handleCropComplete}
//               />
//               <button onClick={() => setEditMode(false)}>Cancel</button>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default ProfilePage;
