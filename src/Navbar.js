
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SideNav from './SideNav';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';



const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      try {
        const response = await fetch(`http://localhost:5000/search?q=${query}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setSearchResults(data);
        } else {
          const text = await response.text();
          console.error('Response is not JSON:', text);
          throw new Error('Response is not JSON');
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleResultClick = (course) => {
    navigate(`/courses/${course.name.toLowerCase().replace(' ', '-')}`);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <MenuIcon className="menu-icon" onClick={toggleSideNav} />

        <div className="navbar-title" onClick={() => navigate('/')}>
          <img src="/tblogo.jpg" className="TBimg" alt="Talent Boost" />
          <span className="title-part white">Talent</span>
          <span className="title-part green">Boost</span>
        </div>

        <div className="nav-links">
          <div className="nav-link" onClick={() => navigate('/about')}>About</div>
          <div className="nav-link dropdown-link" style={{ textAlign: 'center' }}>
            Courses
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => navigate('/courses/frontend')}>FrontEnd</div>
              <div className="dropdown-item" onClick={() => navigate('/courses/backend')}>BackEnd</div>
              <div className="dropdown-item" onClick={() => navigate('/courses/Python')}>Python</div>
              <div className="dropdown-item" onClick={() => navigate('/courses/Devops')}>Devops</div>
              <div className="dropdown-item" onClick={() => navigate('/courses/Java')}>Java</div>
              <div className="dropdown-item" onClick={() => navigate('/courses/SQL')}>SQL</div>
            </div>
          </div>
          <div className="nav-link dropdown-link">
            Contact
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={() => navigate('/contact/email')}>91+1234567896</div>
              <div className="dropdown-item" onClick={() => navigate('/contact/phone')}>91+9876543233</div>
            </div>
          </div>
          <div className="nav-link" onClick={() => navigate('/interview-questions')}>Interview Questions</div>
        </div>

        <div className="search-container">
          
          <div className="search-icon-wrapper">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search courses..."
              className="search-input"
            />
          </div>
          <ShoppingCartIcon className='cart' onClick={() => navigate('/cart')}/>
          {searchQuery && searchResults.length > 0 && (
            <div className="search-suggestions">
              {searchResults.map((course) => (
                <div
                  key={course.id}
                  className="suggestion-item"
                  onClick={() => handleResultClick(course)}
                >
                  {course.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <SideNav isOpen={isSideNavOpen} onClose={toggleSideNav} />
    </div>
  );
};

export default Navbar;
// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import SideNav from './SideNav';
// //import { CartContext } from './CartContext'; // Import CartContext
// import './Navbar.css';

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSideNavOpen, setIsSideNavOpen] = useState(false);

//   const navigate = useNavigate();
//   const { getCartCount } = useContext(CartContext); // Use CartContext to get cart count

//   const handleInputChange = async (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     if (query) {
//       try {
//         const response = await fetch(`http://localhost:5000/search?q=${query}`);

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const contentType = response.headers.get('content-type');
//         if (contentType && contentType.includes('application/json')) {
//           const data = await response.json();
//           setSearchResults(data);
//         } else {
//           const text = await response.text();
//           console.error('Response is not JSON:', text);
//           throw new Error('Response is not JSON');
//         }
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//         setSearchResults([]);
//       }
//     } else {
//       setSearchResults([]);
//     }
//   };

//   const toggleSideNav = () => {
//     setIsSideNavOpen(!isSideNavOpen);
//   };

//   const handleResultClick = (course) => {
//     navigate(`/courses/${course.name.toLowerCase().replace(' ', '-')}`);
//     setSearchQuery('');
//     setSearchResults([]);
//   };

//   return (
//     <div className="navbar-container">
//       <div className="navbar">
//         <MenuIcon className="menu-icon" onClick={toggleSideNav} />

//         <div className="navbar-title" onClick={() => navigate('/')}>
//           <img src="/tblogo.jpg" className="TBimg" alt="Talent Boost" />
//           <span className="title-part white">Talent</span>
//           <span className="title-part green">Boost</span>
//         </div>

//         <div className="nav-links">
//           <div className="nav-link" onClick={() => navigate('/about')}>About</div>
//           <div className="nav-link dropdown-link" style={{ textAlign: 'center' }}>
//             Courses
//             <div className="dropdown-menu">
//               <div className="dropdown-item" onClick={() => navigate('/courses/frontend')}>FrontEnd</div>
//               <div className="dropdown-item" onClick={() => navigate('/courses/backend')}>BackEnd</div>
//               <div className="dropdown-item" onClick={() => navigate('/courses/fullstack')}>Python</div>
//               <div className="dropdown-item" onClick={() => navigate('/courses/Devops')}>Devops</div>
//               <div className="dropdown-item" onClick={() => navigate('/courses/Java')}>Java</div>
//               <div className="dropdown-item" onClick={() => navigate('/courses/SQL')}>SQL</div>
//             </div>
//           </div>
//           <div className="nav-link dropdown-link">
//             Contact
//             <div className="dropdown-menu">
//               <div className="dropdown-item" onClick={() => navigate('/contact/email')}>91+1234567896</div>
//               <div className="dropdown-item" onClick={() => navigate('/contact/phone')}>91+9876543233</div>
//             </div>
//           </div>
//           <div className="nav-link" onClick={() => navigate('/interview-questions')}>Interview Questions</div>
//         </div>

//         <div className="search-container">
//           <div className="search-icon-wrapper">
//             <SearchIcon className="search-icon" />
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleInputChange}
//               placeholder="Search courses..."
//               className="search-input"
//             />
//           </div>
//           <div className="cart-container" onClick={() => navigate('/cart')}>
//             <ShoppingCartIcon className='cart-icon' />
//             <span className="cart-count">{getCartCount()}</span> {/* Display cart count */}
//           </div>
//           {searchQuery && searchResults.length > 0 && (
//             <div className="search-suggestions">
//               {searchResults.map((course) => (
//                 <div
//                   key={course.id}
//                   className="suggestion-item"
//                   onClick={() => handleResultClick(course)}
//                 >
//                   {course.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <SideNav isOpen={isSideNavOpen} onClose={toggleSideNav} />
//     </div>
//   );
// };

// export default Navbar;
