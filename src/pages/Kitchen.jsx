import logo from "../assets/logo.png";
import wallet from "../assets/wallet.png";
import cog from "../assets/cog.png";
import logoutimg from "../assets/logoutimg.png";
import stock from "../assets/stock.png";
import { logout } from "../utils/logout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase";
import OrderCard from "../components/OrderCard";

export default function OrderArea() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([{}]);
  const calculateTimeDifference = (orderTime) => {
    const currentTime = Date.now();
    const differenceInMs = currentTime - orderTime;
    const differenceInMins = Math.round(differenceInMs / (1000 * 60));
    return differenceInMins;
  };

  const handleLogout = () => {
    logout(navigate);
  };

  



  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Create a query to fetch all documents from the "kitchen" collection
        const q = query(collection(db, "kitchen"));
        const querySnapshot = await getDocs(q);

        // Map the documents to an array of orders
        const ordersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(ordersData);
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []); // Only fetch orders when currUser changes

  return (
    <div className="flex ">
      <div className="flex flex-col justify-between bg-sideBar w-1/6 h-[100vh]">
        <div className="flex flex-col items-center justify-center">
          <img src={logo} className="h-20 m-5" />

          <ul className="flex flex-col gap-2 justify-center items-center">
            <li className="py-6  w-40 rounded hover:bg-sideBarHover flex justify-center items-center gap-2 text-2xl font-semibold">
              <img src={wallet} className="size-4" />
              Orders
            </li>
            <li className="py-6  w-40 rounded hover:bg-sideBarHover flex justify-center items-center gap-2 text-2xl font-semibold">
              <img src={stock} className="size-5" />
              Stock
            </li>
            <li className="py-6  w-40 rounded hover:bg-sideBarHover flex justify-center items-center gap-2 text-2xl font-semibold">
              <img src={cog} className="size-4" />
              Insights
            </li>
          </ul>
        </div>
        <div className="m-5 flex justify-center">
          <button
            className="bg-sideBarLogout py-1 px-10 rounded-lg text-sideBar flex items-center justify-center gap-2"
            onClick={handleLogout}
          >
            Logout
            <img src={logoutimg} className="size-4" />
          </button>
        </div>
      </div>

      <div className="bg-darkOrange w-full flex flex-col h-screen">
        <div className="w-full h-[15%] text-5xl font-semibold px-12 py-10 text-end  ">
          Orders
        </div>
        <div className="w-full h-[85%] bg-ghostwhite  ">
          <div className="h-full overflow-y-auto  gap-y-4 flex items-center w-full flex-col pt-8">
          {orders?.length === 0 ? (
            <p className="text-2xl font-semibold">No orders yet!!</p>
          ) : (
            <div className="h-full overflow-y-auto  gap-y-4 flex items-center w-full flex-col pt-8">
              {orders.map((order, index) => (
                <OrderCard
                  key={index}
                  order={order}
                  calculateTimeDifference={calculateTimeDifference}
                />
              ))}
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
