import { useState } from "react";
import authContext from "./authContext";

const AuthState = (props) => {
  const [menuItems, setMenuItems] = useState([

    {
          cuisine: "Chinese",
          name: "Kung Pao Tofu",
          price: 150,
          stock: true,
        },
        {
          cuisine: "Chinese",
          name: "Mapo Tofu",
          price: 130,
          stock: true,
        },
        {
          cuisine: "Chinese",
          name: "Egg Drop Soup",
          price: 80,
          stock: true,
        },
        {
          cuisine: "Chinese",
          name: "Szechuan Chicken",
          price: 160,
          stock: true,
        },
        {
          cuisine: "Chinese",
          name: "Hot and Sour Soup",
          price: 90,
          stock: true,
        },
        {
          cuisine: "Italian",
          name: "Margherita Pizza",
          price: 200,
          stock: true,
        },
        {
          cuisine: "Italian",
          name: "Spaghetti Carbonara",
          price: 180,
          stock: true,
        },
        {
          cuisine: "Italian",
          name: "Bruschetta",
          price: 120,
          stock: true,
        },
        {
          cuisine: "Italian",
          name: "Tiramisu",
          price: 160,
          stock: true,
        },
        {
          cuisine: "Italian",
          name: "Lasagna",
          price: 220,
          stock: true,
        },
        {
          cuisine: "Indian",
          name: "Butter Chicken",
          price: 170,
          stock: true,
        },
        {
          cuisine: "Indian",
          name: "Chicken Tikka Masala",
          price: 180,
          stock: true,
        },
        {
          cuisine: "Indian",
          name: "Saag Paneer",
          price: 140,
          stock: true,
        },
        {
          cuisine: "Indian",
          name: "Chana Masala",
          price: 120,
          stock: true,
        },
        {
          cuisine: "Indian",
          name: "Aloo Gobi",
          price: 130,
          stock: true,
        },
        {
          cuisine: "Mexican",
          name: "Tacos",
          price: 100,
          stock: true,
        },
        {
          cuisine: "Mexican",
          name: "Enchiladas",
          price: 120,
          stock: true,
        },
        {
          cuisine: "Mexican",
          name: "Chiles Rellenos",
          price: 140,
          stock: true,
        },
        {
          cuisine: "Mexican",
          name: "Pozole",
          price: 110,
          stock: true,
        },
        {
          cuisine: "Mexican",
          name: "Flan",
          price: 90,
          stock: true,
        },
        {
          cuisine: "Japanese",
          name: "Sushi",
          price: 250,
          stock: true,
        },
        {
          cuisine: "Japanese",
          name: "Ramen",
          price: 180,
          stock: true,
        },
        {
          cuisine: "Japanese",
          name: "Okonomiyaki",
          price: 150,
          stock: true,
        },
        {
          cuisine: "Japanese",
          name: "Yakitori",
          price: 160,
          stock: true,
        },
        {
          cuisine: "Japanese",
          name: "Miso Soup",
          price: 70,
          stock: false,
        },
  ]);

  const [currUser, setCurrUser] = useState({})
  const [tokenNo, setTokenNo] = useState()

  const [cart, setCart] = useState(
    {
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
    },
    
  );

  return (
    <authContext.Provider value={{ cart, setCart, menuItems, setMenuItems, currUser, setCurrUser , tokenNo, setTokenNo}}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
