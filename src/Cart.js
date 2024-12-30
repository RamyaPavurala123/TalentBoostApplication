
// import React from 'react';
// import ProductPage from './ProductPage';

// const Cart = ({ cart = [], setCart }) => {
//   return (
//     <div>
//       <span style={{ fontSize: 30 }}>My Cart</span>
//       <br />
//       <span style={{ fontSize: 30 }}>Total Price: Rs.100</span>
//       <div className='productContainer'>
//         {cart.map((product) => (
//           <ProductPage ProductPage={product} key={product.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;
// Cart.js
// import React from 'react';
// import CartItem from './CartItem';

// const Cart = ({ cart = [], setCart }) => {
//   const totalPrice = cart.reduce((sum, product) => sum + parseFloat(product.productCost), 0).toFixed(2);

//   return (
//     <div>
//       <span style={{ fontSize: 30 }}>My Cart</span>
//       <br />
//       <span style={{ fontSize: 30 }}>Total Price: Rs.{totalPrice}</span>
//       <div className='productContainer'>
//         {cart.length > 0 ? (
//           cart.map((product) => (
//             <CartItem product={product} key={product.id} />
//           ))
//         ) : (
//           <p>No items in the cart.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';
// import CartItem from './CartItem';
// import './cart.css';


// const Cart = () => {
//   const { cart } = useContext(CartContext);

//   const totalPrice = cart.reduce((sum, product) => sum + parseFloat(product.productCost || 0), 0).toFixed(2);

//   return (
//     <div>
//       <span style={{ fontSize: 30 }}>My Cart</span>
//       <br />
//       <span style={{ fontSize: 30 }}>Total Price: Rs.{totalPrice}</span>
//       <div className='productContainer'>
//         {cart.length > 0 ? (
//           cart.map((product) => (
//             <CartItem product={product} key={product.id} />
//           ))
//         ) : (
//           <p>No items in the cart.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';
// import CartItem from './CartItem';
// import './cart.css'; // Ensure this path is correct

// const Cart = () => {
//   const { cart } = useContext(CartContext);

//   //const totalPrice = cart.reduce((sum, product) => sum + parseFloat(product.productCost || 0), 0).toFixed(2);

//   return (
//     <div className="cartContainer">
//       <span className="cartTitle">My Cart</span>
//       <br />
//       {/* <span className="totalPrice">Total Price: Rs.{totalPrice}</span> */}
//       <div className="productContainer">
//         {cart.length > 0 ? (
//           cart.map((product) => (
//             <CartItem product={product} key={product.id} />
//           ))
//         ) : (
//           <p className="emptyCartMessage">No items in the cart.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;
