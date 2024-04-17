import React, { useContext } from "react";
import authContext from "../context/authContext";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import counter from "../assets/counter.png";
import upi from "../assets/upi.png";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { getAuth } from "firebase/auth";
// import { randomBytes } from 'crypto';


const Checkout = () => {
  const { cart, setCart } = useContext(authContext);
  const { tokenNo, setTokenNo } = useContext(authContext);

  console.log(cart);
 


  const navigate = useNavigate();

  const handleCheckout = async() => {
    const auth = getAuth();
    const currUser = auth.currentUser;
    console.log(auth.currentUser)

    const tokenId = Math.floor(Math.random() * 100) + 1;
   
  
    const checkoutOrder = {
      tokenId: tokenId,
      cartDetails: cart,
      name: currUser.displayName,
      uid: currUser.uid,
      timestamp: Date.now(),
      status: false
    }
    
    console.log(checkoutOrder);

    try {
      // Add the checkoutOrder to the "kitchen" collection with tokenId as the document ID
      const docRef = await addDoc(collection(db, "kitchen"), checkoutOrder);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setTokenNo(tokenId)
    setCart( {
      cartItems: [
        // {
        //   name: "pav bhaji",
        //   price: 50,
        //   quantity: 4,
        // }
        // ,{
        //   name: "Chana Masala",
        //   price: 100,
        //   quantity: 4,
        // }
      ],
      totalAmount: 0
    },)
    navigate('/token')

  }
  


  return (
    <div className="w-full h-screen mob fadeSide">
      <div
        className="absolute top-[2%] text-2xl font-semibold bg-white rounded-md left-[2%] p-1 w-1/6 text-center"
        onClick={() => {
          navigate("/cart");
        }}
      >
        &#x2190;
      </div>
      
      <div className="w-full h-[10%] flex items-center justify-center bg-darkOrange text-xl font-semibold ">
        <div className="text-black font-semibold text-3xl">Cart</div>
      </div>

      <div className="h-[74%] overflow-y-auto  gap-y-8 flex items-center justify-center  w-full flex-col pt-8">
        <div className="w-[65%] h-[40%] p-4 bg-[#E9C48B] rounded-xl flex flex-col  justify-center gap-y-4 items-center text-3xl font-semibold" onClick={handleCheckout}>
          Pay at Counter
          <img src={counter} className="aspect-square h-20 w-20"></img>
        </div>
        <div className="w-[65%] h-[40%] p-4 bg-[#E9C48B] rounded-xl flex flex-col  justify-center gap-y-4 items-center text-3xl font-semibold">
          Pay via
          <img src={upi} className=" h-30"></img>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
