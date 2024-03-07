import React from "react";

export const Button = ({ className, onClick, children }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`color-black flex justify-center items-center bg-darkOrange  rounded-[0.7rem] duration-500 font-semibold hover:shadow-lg ${className}  `}
      >
        {children}
      </button>
    </>
  );
};
