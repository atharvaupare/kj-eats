import { getAuth } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { Button } from "../components/Button";
import authContext from "../context/authContext";

const OrderPage = () => {
  const [showCartItems, setShowCartItems] = useState(false);
  const [orders, setOrders] = useState([{}]);
  const {setTokenNo} = useContext(authContext);

  const toggleCartItems = () => {
    setShowCartItems((prevShowCartItems) => !prevShowCartItems);
  };

  const calculateTimeDifference = (orderTime) => {
    const currentTime = Date.now();
    const differenceInMs = currentTime - orderTime;
    const differenceInMins = Math.round(differenceInMs / (1000 * 60));
    return differenceInMins;
  };

  const navigate = useNavigate();
  const auth = getAuth();
  const currUser = auth.currentUser;
  // console.log(currUser)

  useEffect(() => {
    if (currUser) {
      const fetchOrders = async () => {
        try {
          // Create a query to fetch documents from "kitchen" collection where name === currentUser.name
          const q = query(
            collection(db, "kitchen"),
            where("uid", "==", currUser.uid)
          );
          const querySnapshot = await getDocs(q);

          // Map the documents to an array of orders
          const ordersData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          // console.log(ordersData)
          setOrders(ordersData);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };

      fetchOrders();
    }
  }, []);

  const viewTokenHandler = (tokenId) => {
    console.log("hi");
    setTokenNo(tokenId);
    navigate('/token')
  };

  return (
    <div className="w-full h-screen mob fadeSide">
       <div
        className="absolute top-[2%] text-2xl font-semibold bg-white rounded-md left-[2%] p-1 w-1/6 text-center"
        onClick={() => {
          navigate("/homepage");
        }}
      >
        &#x2190;
      </div>
      <div
        className="absolute top-[2%] text-2xl font-semibold bg-white rounded-md left-[2%] p-1 w-1/6 text-center"
        onClick={() => {
          navigate("/homepage");
        }}
      >
        &#x2190;
      </div>

      <div className="w-full h-[10%] flex items-center justify-center bg-darkOrange text-xl font-semibold ">
        <div className="text-black font-semibold text-3xl">Orders</div>
      </div>

      <div className="h-screen overflow-y-auto  gap-y-4 flex items-center w-full flex-col pt-8">
        {orders.map((order, index) => (
          <div
            key={index}
            className="w-[85%] h-fit p-4 bg-[#E9C48B] rounded-xl flex flex-col items-center gap-y-1 text-3xl font-semibold"
          >
            <div className="flex text-lg font-semibold justify-between w-full h-fit items-start">
              <p>Token No. {order.tokenId}</p>
              {order.status ? (
                <p>Status: Fulfilled</p>
              ) : (
                <p>Status: Unfulfilled</p>
              )}
            </div>
            <div className="flex text-base justify-between items-center w-full h-fit text-dark-main">
              <p>{calculateTimeDifference(order.timestamp)} min ago</p>
              <Button className={"px-1.5 py-2 rounded-md"}   onClick={() => viewTokenHandler(order.tokenId)}>View Ticket</Button>
            </div>
            <div></div>
            <div
              className="h-fit w-full text-xs text-end flex justify-between"
              onClick={toggleCartItems}
            >
              <p>Total Amount: {order.cartDetails?.totalAmount}</p>
              <p> {showCartItems ? "Hide Cart Items ⬆️" : "Show More ⬇️"}</p>
            </div>
            {showCartItems && (
              <div className="w-full text-xs text-end ">
                <div className="flex flex-col w-full gap-y-2">
                  {order.cartDetails.cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between w-full text-xs text-darkgray">
                      <p>{item.name} x {item.quantity}</p>
                      <p>${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
