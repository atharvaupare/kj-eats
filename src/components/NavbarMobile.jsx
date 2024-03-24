import React, { useState } from "react";

import orders from "../assets/bill.png";
import profile from "../assets/profile.png";
import cart from "../assets/cart.png";
import { logout } from "../utils/logout";
import { useNavigate } from "react-router-dom";

const NavbarMobile = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <div className="w-full h-[10%] flex flex-row items-center justify-between px-2 bg-darkOrange absolute bottom-0">
      <div
        className={`flex flex-col items-center justify-center  w-[33%] ${
          selectedOption === "Orders"
            ? "text-white transtion ease-in duration-300"
            : ""
        }`}
        onClick={() => handleOptionClick("Orders")}
      >
        <img src={orders} className="h-7 w-7 aspect-square" alt="Orders"></img>
        <div className="bg-gray-500 text-lg font-semibold ">Orders</div>
      </div>
      <div
        className={`flex flex-col items-center justify-center w-[33%] ${
          selectedOption === "Profile"
            ? "text-white transtion ease-in duration-300"
            : ""
        }`}
        onClick={() => handleOptionClick("Profile")}
      >
        <img
          src={profile}
          className="h-7 w-7 aspect-square"
          alt="Profile"
          onClick={handleLogout}
        ></img>
        <div className="bg-gray-500 text-lg font-semibold ">Profile</div>
      </div>
      <div
        className={`flex flex-col items-center justify-center  w-[33%] ${
          selectedOption === "Cart"
            ? "text-white transtion ease-in duration-300"
            : ""
        }`}
        onClick={() => handleOptionClick("Cart")}
      >
        <img src={cart} className="h-7 w-7 aspect-square" alt="Cart"></img>
        <div className="bg-gray-500 text-lg font-semibold ">Cart</div>
      </div>
    </div>
  );
};

export default NavbarMobile;
