import React, { useContext } from 'react'
import authContext from '../context/authContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const {cart} = useContext(authContext);
    console.log(cart)

    const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
        <div className='absolute top-[2%] text-2xl font-semibold bg-white rounded-md left-[2%] p-1' onClick={() => {
            navigate("/")
        }}>&#x2190;</div>
      <div className="w-full h-[10%] flex items-center justify-center bg-darkOrange text-xl font-semibold ">
        <div className="text-black font-semibold text-3xl">Cart</div>
      </div>
      {cart.cartItems.length > 0 ? (
        <div>
          {/* Render cart items */}
          {cart.cartItems.map((item, index) => (
            <div key={index}>
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: {item.price}</div>
            </div>
          ))}
          <div>Total Amount: {cart.totalAmount}</div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-xl">Cart is empty</p>
        </div>
      )}
    
     

 
    </div>
  )
}

export default Cart