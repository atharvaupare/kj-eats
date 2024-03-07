import React, { useContext, useEffect } from "react";
import authContext from "../context/authContext";

const Landing = () => {
  const { bag, setBag } = useContext(authContext);

  console.log(bag);

  return <div className="text-3xl font-semibold">Landing lol</div>;
};

export default Landing;
