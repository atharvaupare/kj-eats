// import React, { useContext } from 'react'
// import authContext from '../context/authContext'
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {

//     const {cart} = useContext(authContext);
//     console.log(cart)

//     const navigate = useNavigate();

//   return (
//     <div className="w-full h-screen">
//         <div className='absolute top-[2%] text-2xl font-semibold bg-white rounded-md left-[2%] p-1' onClick={() => {
//             navigate("/")
//         }}>&#x2190;</div>
//       <div className="w-full h-[10%] flex items-center justify-center bg-darkOrange text-xl font-semibold ">
//         <div className="text-black font-semibold text-3xl">Cart</div>
//       </div>
//       {cart.cartItems.length > 0 ? (
//         <div>
//           {/* Render cart items */}
//           {cart.cartItems.map((item, index) => (
//             <div key={index}>
//               <div>{item.name}</div>
//               <div>Quantity: {item.quantity}</div>
//               <div>Price: {item.price}</div>
//             </div>
//           ))}
//           <div>Total Amount: {cart.totalAmount}</div>
//         </div>
//       ) : (
//         <div className="flex items-center justify-center h-full">
//           <p className="text-xl">Cart is empty</p>
//         </div>
//       )}
    
     

 
//     </div>
//   )
// }

// export default Cart


import React, { useContext } from "react";
import authContext from "../context/authContext";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(authContext);
  console.log(cart);

  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    // Clone the cart object
    const updatedCart = { ...cart };
    console.log(updatedCart);

    // Find the index of the item in cartItems
    const existingItemIndex = updatedCart.cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItemIndex !== -1) {
      // If item already exists in cart, update its quantity
      updatedCart.cartItems[existingItemIndex].quantity += 1;
    } else {
      // If item is not in cart, add it to cartItems
      updatedCart.cartItems.push({ ...item, quantity: 1 });
    }

    // Update the totalAmount
    updatedCart.totalAmount += item.price;

    // Update the cart state
    setCart(updatedCart);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = { ...cart };

    console.log(updatedCart);

    const itemIndexToRemove = updatedCart.cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    console.log(itemIndexToRemove);

    if (itemIndexToRemove !== -1) {
      if (updatedCart.cartItems[itemIndexToRemove].quantity > 1) {
        updatedCart.cartItems[itemIndexToRemove].quantity -= 1;
      } else {
        updatedCart.cartItems.splice(itemIndexToRemove, 1);
      }

      updatedCart.totalAmount -= item.price;
      console.log(updatedCart);
      setCart(updatedCart);
    }
  };

  return (
    <div className="w-full h-screen">
      <div
        className="absolute top-[2%] text-2xl font-semibold bg-white rounded-md left-[2%] p-1 w-1/6 text-center"
        onClick={() => {
          navigate("/homepage");
        }}
      >
        &#x2190;
      </div>
      <div className="w-full h-[10%] flex items-center justify-center bg-darkOrange text-xl font-semibold ">
        <div className="text-black font-semibold text-3xl">Cart</div>
      </div>
      {cart.cartItems.length > 0 ? (
        <div classNmae="h-[74%] overflow-y-auto  gap-y-4 flex items-center justify-center  w-full flex-col pt-2">
          {/* Render cart items */}
          {cart.cartItems.map((item, index) => (
            <div
              key={index}
              className="w-[85%] h-fit p-4 bg-[#E9C48B] rounded-xl flex flex-col  justify-center gap-y-2 my-3 ml-8"
            >
              <div className="flex justify-between items-start  text-2xl font-semibold">
                <p>{item.name}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col justify-between ">
                  <div className="text-base font-medium">
                    Quantity: {item.quantity}
                  </div>
                  <div className="text-base font-medium">
                    Price: {item.price}
                  </div>
                  <div className="text-base font-medium ">
                    Total Price: {item.price * item.quantity}
                  </div>
                </div>
                <div className="flex gap-x-2 item-center justify-center">
                  {item.stock && (
                    <>
                      <Button
                        className={"px-4 py-2 w-12 h-fit  active:bg-white text-xl self-center"}
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        -
                      </Button>
                      <Button
                        className={"px-4 py-2 h-fit w-12 active:bg-white text-xl self-center"}
                        onClick={() => handleAddToCart(item)}
                      >
                        +
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="w-fit h-fit p-4 bg-[#E9C48B] rounded-xl gap-y-2 my-3 ml-8 font-semibold">
            Total Amount: {cart.totalAmount}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-xl">Cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
