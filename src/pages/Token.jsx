import React, { useContext } from "react";
import ticket from "../assets/token.png";
import authContext from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Ticket = () => {

  const {tokenNo, setTokenNo } = useContext(authContext);
  console.log(tokenNo)
  const navigate = useNavigate();

  return (
    <>
        <div
        className="absolute top-[2%] text-2xl font-semibold bg-white rounded-md left-[2%] p-1 w-1/6 text-center"
        onClick={() => {
          navigate("/homepage");
        }}
      >
        &#x2190;
      </div>
      <p className="absolute top-[30%] left-[22%] text-2xl font-semibold">Token Number : {tokenNo}</p>
      <div className="h-screen w-full bg-vlOrange flex items-center justify-center p-4 flex-col gap-y-8">
        <p className="text-4xl font-semibold">Order Placed!</p>

        <img src={ticket} alt="" className="shadow-2xl" />
      </div>
    </>
  );
};

export default Ticket;
