import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../config/firebase";

const OrderCard = ({ order, calculateTimeDifference }) => {
  const [status, setStatus] = useState(order.status);

  const handleStatusChange = async(id) => {
  
    // You may also add any additional logic here to handle the status change
    console.log(id);
    try {
        const orderRef = doc(db, "kitchen", id);
        await updateDoc(orderRef, {
          status: !status // Toggle the status
        });
        setStatus((prevStatus) => !prevStatus); // Update local state
      } catch (error) {
        console.error("Error updating status:", error);
      }
    
  };

  return (
    <div className={`w-[85%] h-fit p-4 bg-[#E9C48B] rounded-xl flex flex-col items-center gap-y-1 text-3xl font-semibold ${status ? 'opacity-50' : ''}`}>
      <div className="flex text-lg font-semibold justify-between w-full h-fit items-start">
        <p>Token No. {order.tokenId}</p>
        <p>Status: {status ? "Fulfilled" : "Unfulfilled"}</p>
      </div>
      <div className="flex text-base justify-between items-center w-full h-fit text-dark-main">
        <p>{calculateTimeDifference(order.timestamp)} min ago</p>
        <div>
          <input
            type="checkbox"
            id={`status-${order.uid}`}
            name={`status-${order.uid}`}
            checked={status}
            onChange={() => {
                handleStatusChange(order.id);
            
            }}
          
            className="bg-darkOrange"

          />
      
        </div>
      </div>
      <div className="w-full text-xs text-end">
        <div className="flex flex-col w-full gap-y-2">
          {order?.cartDetails?.cartItems?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between w-full text-xs text-darkgray"
            >
              <p>
                {item.name} x {item.quantity}
              </p>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
