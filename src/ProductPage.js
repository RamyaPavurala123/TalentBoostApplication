
// import React, { useState, useEffect, useRef, useContext } from 'react';
// import axios from 'axios';
// import { CartContext } from './CartContext';
// //import {Cart} from './context'; 
// import './ProductPage.css';

// const ProductPage = () => {
//   const [formVisible, setFormVisible] = useState(false);
//   const [productsVisible, setProductsVisible] = useState(true);
//   const [productName, setProductName] = useState('');
//   const [productCost, setProductCost] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [deliveryDate, setDeliveryDate] = useState('');
//   const [productImageFile, setProductImageFile] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [error, setError] = useState('');
//   const { addToCart } = useContext(CartContext);
//   const [highlightFields, setHighlightFields] = useState({
//     productName: false,
//     productCost: false,
//     productDescription: false,
//     deliveryDate: false,
//     productImageFile: false,
//   });

//   //const { addToCart } = useContext(CartContext); 
//   //console.log(useContext(cart));
//   // Context for cart
//   // const { addToCart } = useContext(CartContext);

//   // Refs for input fields
//   const productNameRef = useRef(null);
//   const productCostRef = useRef(null);
//   const productDescriptionRef = useRef(null);
//   const deliveryDateRef = useRef(null);
//   const productImageRef = useRef(null);

//   // Fetch Products from the API
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/products');
//       console.log('Fetched Products:', response.data); // Debugging: Check API response
//       setProducts(response.data);
//       setProductsVisible(true);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       setError('Error fetching products.');
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const toggleForm = () => {
//     setFormVisible(!formVisible);
//     setProductsVisible(formVisible);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'productName':
//         setProductName(value);
//         break;
//       case 'productCost':
//         setProductCost(value);
//         break;
//       case 'productDescription':
//         setProductDescription(value);
//         break;
//       case 'deliveryDate':
//         setDeliveryDate(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleFileChange = (e) => {
//     setProductImageFile(e.target.files[0]);
//   };

//   const focusOnField = (fieldRef) => {
//     if (fieldRef.current) {
//       fieldRef.current.focus();
//     }
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // Check for empty fields and focus on the first one
//     let firstEmptyField = null;
//     if (!productName) firstEmptyField = productNameRef;
//     else if (!productCost) firstEmptyField = productCostRef;
//     else if (!productDescription) firstEmptyField = productDescriptionRef;
//     else if (!deliveryDate) firstEmptyField = deliveryDateRef;
//     else if (!productImageFile) firstEmptyField = productImageRef;

//     setHighlightFields({
//       productName: firstEmptyField === productNameRef,
//       productCost: firstEmptyField === productCostRef,
//       productDescription: firstEmptyField === productDescriptionRef,
//       deliveryDate: firstEmptyField === deliveryDateRef,
//       productImageFile: firstEmptyField === productImageRef,
//     });

//     // Stop submission if any field is empty
//     if (!productName || !productCost || !productDescription || !deliveryDate || !productImageFile) {
//       setError('All fields are required.');
//       focusOnField(firstEmptyField);
//       return;
//     }

//     const formData = new FormData();
//     formData.append('productName', productName);
//     formData.append('productCost', productCost);
//     formData.append('productDescription', productDescription);
//     formData.append('deliveryDate', deliveryDate);
//     formData.append('productImage', productImageFile);

//     try {
//       const response = await axios.post('http://localhost:5000/api/products', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Product added:', response.data); // Debugging: Check product add response
//       fetchProducts(); // Refresh products list after adding
//       setFormVisible(false);
//       setProductsVisible(true);
//       setError('');
//     } catch (error) {
//       console.error('Error adding product:', error);
//       setError('Error adding product.');
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Filter products based on search term
//   const filteredProducts = products.filter((product) => {
//     const name = product.productName ? product.productName.toLowerCase() : ''; // Ensure correct case
//     return name.includes(searchTerm.toLowerCase());
//   });

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     console.log('Added to cart:', product);
//   };

//   return (
//     <div className="container">
//       <div className="header-container">
//         <h2>Welcome to Product Page</h2>
//         <div className="search-add-container">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="search-bar"
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//           <button onClick={toggleForm} className="top-right-button">
//             {formVisible ? 'Cancel' : 'Add Product'}
//           </button>
//         </div>
//       </div>
//       {error && <p className="error">{error}</p>}
//       {formVisible && (
//         <form onSubmit={handleFormSubmit} className="product-form">
//           <input
//             ref={productNameRef}
//             className={`input-field ${highlightFields.productName ? 'highlight' : ''}`}
//             type="text"
//             name="productName"
//             value={productName}
//             onChange={handleInputChange}
//             placeholder="Product Name"
//           />
//           <input
//             ref={productCostRef}
//             className={`input-field ${highlightFields.productCost ? 'highlight' : ''}`}
//             type="text"
//             name="productCost"
//             value={productCost}
//             onChange={handleInputChange}
//             placeholder="Product Cost"
//           />
//           <input
//             ref={productDescriptionRef}
//             className={`input-field ${highlightFields.productDescription ? 'highlight' : ''}`}
//             type="text"
//             name="productDescription"
//             value={productDescription}
//             onChange={handleInputChange}
//             placeholder="Product Description"
//           />
//           <input
//             ref={deliveryDateRef}
//             className={`input-field ${highlightFields.deliveryDate ? 'highlight' : ''}`}
//             type="date"
//             name="deliveryDate"
//             value={deliveryDate}
//             onChange={handleInputChange}
//           />
//           <input
//             ref={productImageRef}
//             className={`input-field ${highlightFields.productImageFile ? 'highlight' : ''}`}
//             type="file"
//             onChange={handleFileChange}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       )}
//       {productsVisible && (
//         <div className="product-listing">
//           {filteredProducts.map((product) => (
//             <div className="product-card" key={product.id}>
//               <img 
//                 src={`http://localhost:5000/uploads/${product.productImage}`} 
//                 alt={product.productName} 
//                 className="product-image" 
//                 onError={(e) => {e.target.src = '/path/to/default/image.jpg'}} // Fallback for missing image
//               />
//               <h3 className="product-name">Name: {product.productName}</h3>
//               <p className="product-description">Description: {product.productDescription}</p>
//               <p className="product-price">Price: {product.productCost}</p>
//               <p className="product-delivery">
//                 Delivery Date: {new Date(product.deliveryDate).toLocaleDateString()}
//               </p>
//               <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
//               {/* <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button> */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductPage;
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [productsVisible, setProductsVisible] = useState(true);
  const [productName, setProductName] = useState('');
  const [productCost, setProductCost] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [productImageFile, setProductImageFile] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [highlightFields, setHighlightFields] = useState({
    productName: false,
    productCost: false,
    productDescription: false,
    deliveryDate: false,
    productImageFile: false,
  });
  const [cart,setCart]=useState([]);

  // Refs for input fields
  const productNameRef = useRef(null);
  const productCostRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const deliveryDateRef = useRef(null);
  const productImageRef = useRef(null);

  // Fetch Products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
      setProductsVisible(true);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleForm = () => {
    setFormVisible(!formVisible);
    setProductsVisible(formVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'productName':
        setProductName(value);
        break;
      case 'productCost':
        setProductCost(value);
        break;
      case 'productDescription':
        setProductDescription(value);
        break;
      case 'deliveryDate':
        setDeliveryDate(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    setProductImageFile(e.target.files[0]);
  };

  const focusOnField = (fieldRef) => {
    if (fieldRef.current) {
      fieldRef.current.focus();
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check for empty fields and focus on the first one
    let firstEmptyField = null;
    if (!productName) firstEmptyField = productNameRef;
    else if (!productCost) firstEmptyField = productCostRef;
    else if (!productDescription) firstEmptyField = productDescriptionRef;
    else if (!deliveryDate) firstEmptyField = deliveryDateRef;
    else if (!productImageFile) firstEmptyField = productImageRef;

    setHighlightFields({
      productName: firstEmptyField === productNameRef,
      productCost: firstEmptyField === productCostRef,
      productDescription: firstEmptyField === productDescriptionRef,
      deliveryDate: firstEmptyField === deliveryDateRef,
      productImageFile: firstEmptyField === productImageRef,
    });

    // Stop submission if any field is empty
    if (!productName || !productCost || !productDescription || !deliveryDate || !productImageFile) {
      setError('All fields are required.');
      focusOnField(firstEmptyField);
      return;
    }

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productCost', productCost);
    formData.append('productDescription', productDescription);
    formData.append('deliveryDate', deliveryDate);
    formData.append('productImage', productImageFile);

    try {
      const response = await axios.post('http://localhost:5000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchProducts(); // Refresh products list after adding
      setFormVisible(false);
      setProductsVisible(true);
      setError('');
    } catch (error) {
      console.error('Error adding product:', error);
      setError('Error adding product.');
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) => {
    const name = product.productName ? product.productName.toLowerCase() : ''; // Ensure correct case
    return name.includes(searchTerm.toLowerCase());
  });



  // const handleAddToCart = (product)=>
  // {
  //   setCart((prevCart) => [...prevCart, product]);
  //   alert(`${product.productName} has been added to the cart.`);
    
  // }

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.productName} has been added to the cart.`);
  };


  return (
    <div className="container">
      <div className="header-container">
        <h2>Welcome to Product Page</h2>
        <div className="search-add-container">
          <input
            type="text"
            placeholder="Search products..."
            className="search-bar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={toggleForm} className="top-right-button">
            {formVisible ? 'Cancel' : 'Add Product'}
          </button>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      {formVisible && (
        <form onSubmit={handleFormSubmit} className="product-form">
          <input
            ref={productNameRef}
            className={`input-field ${highlightFields.productName ? 'highlight' : ''}`}
            type="text"
            name="productName"
            value={productName}
            onChange={handleInputChange}
            placeholder="Product Name"
          />
          <input
            ref={productCostRef}
            className={`input-field ${highlightFields.productCost ? 'highlight' : ''}`}
            type="text"
            name="productCost"
            value={productCost}
            onChange={handleInputChange}
            placeholder="Product Cost"
          />
          <input
            ref={productDescriptionRef}
            className={`input-field ${highlightFields.productDescription ? 'highlight' : ''}`}
            type="text"
            name="productDescription"
            value={productDescription}
            onChange={handleInputChange}
            placeholder="Product Description"
          />
          <input
            ref={deliveryDateRef}
            className={`input-field ${highlightFields.deliveryDate ? 'highlight' : ''}`}
            type="date"
            name="deliveryDate"
            value={deliveryDate}
            onChange={handleInputChange}
          />
          <input
            ref={productImageRef}
            className={`input-field ${highlightFields.productImageFile ? 'highlight' : ''}`}
            type="file"
            onChange={handleFileChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      {productsVisible && (
        <div className="product-listing">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img 
                src={`http://localhost:5000/uploads/${product.productImage}`} 
                alt={product.productName} 
                className="product-image" 
                onError={(e) => {e.target.src = '/path/to/default/image.jpg'}} // Fallback for missing image
              />
              <h3 className="product-name">Name: {product.productName}</h3>
              <p className="product-description">Description: {product.productDescription}</p>
              <p className="product-price">Price: {product.productCost}</p>
              <p className="product-delivery">
                Delivery Date: {new Date(product.deliveryDate).toLocaleDateString()}
              </p>
              {/* <button onClick={handleAddToCart(product)}>Add To Cart</button> */}
              <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
