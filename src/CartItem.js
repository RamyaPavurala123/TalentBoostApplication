// CartItem.js
// import React from 'react';

// const CartItem = ({ product }) => {
//   return (
//     <div className="cart-item">
//       <img 
//         src={`http://localhost:5000/uploads/${product.productImage}`} 
//         alt={product.productName} 
//         className="cart-item-image" 
//         onError={(e) => {e.target.src = '/path/to/default/image.jpg'}} // Fallback for missing image
//       />
//       <h3 className="cart-item-name">Name: {product.productName}</h3>
//       <p className="cart-item-description">Description: {product.productDescription}</p>
//       <p className="cart-item-price">Price: {product.productCost}</p>
//       <p className="cart-item-delivery">
//         Delivery Date: {new Date(product.deliveryDate).toLocaleDateString()}
//       </p>
//     </div>
//   );
// };
// export default CartItem;
// 





















// import React from 'react';
// import './CartItem.css';

// const CartItem = ({ product }) => {
//   return (
//     <div className="cart-item">
//       <img 
//         src={`http://localhost:5000/uploads/${product.productImage}`} 
//         alt={product.productName} 
//         className="cart-item-image" 
//         onError={(e) => { e.target.src = '/path/to/default/image.jpg'; }} // Fallback for missing image
//       />
//       <div className="cart-item-details">
//         <h3 className="cart-item-name">{product.productName}</h3>
//         <p className="cart-item-description">{product.productDescription}</p>
//         <p className="cart-item-price">Price: Rs.{product.productCost}</p>
//         <p className="cart-item-delivery">Delivery Date: {new Date(product.deliveryDate).toLocaleDateString()}</p>
//         <button className="removeButton">Remove</button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;


// export default CartItem;
// import React from 'react';
// import './CartItem.css'; // Ensure this path is correct

// const CartItem = ({ product }) => {
//     const defaultImage = '/images/default-image.jpg'; // Replace with your fallback image
//     const imageSrc = product.productImage ? `/images/${product.productImage}` : defaultImage;
  
//     return (
//       <div className="cartItem">
//         <img src={imageSrc} alt={product.productName} onError={(e) => e.target.src = defaultImage} />
//         <div className="cartItemDetails">
//           <div className="cartItemTitle">{product.productName}</div>
//           <div className="cartItemPrice">Rs.{product.productCost}</div>
//           <div className="cartItemQuantity">Quantity: {product.productQuantity}</div>
//           <button className="removeButton">Remove</button>
//         </div>
//       </div>
//     );
//   };
  
  

// export default CartItem;

// import React from 'react';
// import './CartItem.css'; // Ensure this path is correct

// const CartItem = ({ product }) => {
//   const defaultImage = '/images/default-image.jpg'; // Replace with your fallback image
//   const imageSrc = product.productImage ? `/images/${product.productImage}` : defaultImage;

//   return (
//     <div className="cartItem">
//       <img
//         src={imageSrc}
//         alt={product.productName}
//         onError={(e) => e.target.src = defaultImage} // Fallback if image fails to load
//       />
//       <div className="cartItemDetails">
//         <div className="cartItemTitle">{product.productName}</div>
//         <div className="cartItemPrice">Rs.{product.productCost}</div>
//         <div className="cartItemQuantity">Quantity: {product.productQuantity}</div>
//         <button className="removeButton">Remove</button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

import React from 'react'

 function CartItem() {
  return (
    <div>
       <h1>Welcome To CartSection</h1>
    </div>
  )
}
export default CartItem;
