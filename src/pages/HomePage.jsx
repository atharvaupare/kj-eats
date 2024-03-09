import React, { useContext, useEffect } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/logout";
import AuthContext from "../context/authContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { menuItems, setMenuItems } = useContext(AuthContext);

  const handleCheckout = () => {
    navigate("/checkout");
  };
  // Logout function
  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <div>
      <h1>Menu Items</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Cuisine: {item.cuisine}</p>
            <p>Price: {item.price}</p>
            <p>Stock: {item.stock ? "Available" : "Out of Stock"}</p>
          </li>
        ))}
      </ul>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default HomePage;
