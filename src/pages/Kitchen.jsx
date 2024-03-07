import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/logout";
import { Button } from "../components/Button";

const Kitchen = () => {
  const navigate = useNavigate();

  //   const handleLogout = async () => {
  //     try {
  //       await auth.signOut();
  //       console.log("Logged out");
  //       navigate("/");
  //     } catch (error) {
  //       console.error("Error signing out:", error);
  //     }
  //   };

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <div>
      <div>HomePage</div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Kitchen;
