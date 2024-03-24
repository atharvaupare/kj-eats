import React, { useState } from "react";

import orders from "../assets/bill.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";

const NavbarMobile = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full h-[12%] flex flex-row items-center justify-between px-2 bg-darkOrange absolute bottom-0">
      <div
        className={`flex flex-col items-center justify-center gap-y-1 w-[33%] ${
          selectedOption === "Orders"
            ? "text-white transtion ease-in duration-300"
            : ""
        }`}
        onClick={() => handleOptionClick("Orders")}
      >
        <img src={orders} className="h-8 w-8 aspect-square" alt="Orders"></img>
        <div className="bg-gray-500 text-xl font-bold ">Orders</div>
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-y-1 w-[33%] ${
          selectedOption === "Profile"
            ? "text-white transtion ease-in duration-300"
            : ""
        }`}
        onClick={() => handleOptionClick("Profile")}
      >
        <img
          src={profile}
          className="h-8 w-8 aspect-square"
          alt="Profile"
        ></img>
        <div className="bg-gray-500 text-xl font-bold ">Profile</div>
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-y-1 w-[33%] ${
          selectedOption === "Cart"
            ? "text-white transtion ease-in duration-300"
            : ""
        }`}
        onClick={() => handleOptionClick("Cart")}
      >
        <img src={cart} className="h-8 w-8 aspect-square" alt="Cart"></img>
        <div className="bg-gray-500 text-xl font-bold ">Cart</div>
      </div>
    </div>
  );
};

export default NavbarMobile;
