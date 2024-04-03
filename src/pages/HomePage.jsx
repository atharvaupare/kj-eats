import React, { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/logout";
import AuthContext from "../context/authContext";
import search from "../assets/search.png";
import NavbarMobile from "../components/NavbarMobile";

const debounce = (func, delay) => {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const HomePage = () => {
  const navigate = useNavigate();
  const { menuItems, setMenuItems } = useContext(AuthContext); // TODO: uncomment later
  // const menuItems = [
  //   {
  //     cuisine: "Chinese",
  //     name: "Kung Pao Tofu",
  //     price: 150,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Chinese",
  //     name: "Mapo Tofu",
  //     price: 130,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Chinese",
  //     name: "Egg Drop Soup",
  //     price: 80,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Chinese",
  //     name: "Szechuan Chicken",
  //     price: 160,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Chinese",
  //     name: "Hot and Sour Soup",
  //     price: 90,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Italian",
  //     name: "Margherita Pizza",
  //     price: 200,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Italian",
  //     name: "Spaghetti Carbonara",
  //     price: 180,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Italian",
  //     name: "Bruschetta",
  //     price: 120,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Italian",
  //     name: "Tiramisu",
  //     price: 160,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Italian",
  //     name: "Lasagna",
  //     price: 220,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Indian",
  //     name: "Butter Chicken",
  //     price: 170,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Indian",
  //     name: "Chicken Tikka Masala",
  //     price: 180,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Indian",
  //     name: "Saag Paneer",
  //     price: 140,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Indian",
  //     name: "Chana Masala",
  //     price: 120,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Indian",
  //     name: "Aloo Gobi",
  //     price: 130,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Mexican",
  //     name: "Tacos",
  //     price: 100,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Mexican",
  //     name: "Enchiladas",
  //     price: 120,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Mexican",
  //     name: "Chiles Rellenos",
  //     price: 140,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Mexican",
  //     name: "Pozole",
  //     price: 110,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Mexican",
  //     name: "Flan",
  //     price: 90,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Japanese",
  //     name: "Sushi",
  //     price: 250,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Japanese",
  //     name: "Ramen",
  //     price: 180,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Japanese",
  //     name: "Okonomiyaki",
  //     price: 150,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Japanese",
  //     name: "Yakitori",
  //     price: 160,
  //     stock: true,
  //   },
  //   {
  //     cuisine: "Japanese",
  //     name: "Miso Soup",
  //     price: 70,
  //     stock: true,
  //   },
  // ];
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   // Initially, display all menu items
  //   setFilteredItems(menuItems);
  // }, []);

  const debouncedSearch = debounce((query) => {
    setSearchQuery(query);
  }, 300);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    // Execute the debouncedSearch function
    debouncedSearch(query);
  };

  useEffect(() => {
    // Filter menu items based on search query whenever it changes
    if (searchQuery.trim() === "") {
      // If search query is empty, show all menu items
      setFilteredItems(menuItems);
    } else {
      const filtered = menuItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [searchQuery, menuItems]);

  // const handleCheckout = () => {
  //   navigate("/checkout");
  // };
  // // Logout function
  // const handleLogout = () => {
  //   logout(navigate);
  // };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[4%] flex items-center justify-center bg-white text-xl font-semibold ">
        <div className="text-gray-300">Welcome to KJ Eats!</div>
      </div>
      <div className="w-full h-[8%] flex items-center justify-between bg-white text-3xl font-semibold border-b-2 border-darkOrange px-4 gap-x-2 pb-4 bg-darkOrange ">
        {/* <div className="text-gray-500">Menu</div> */}
        <input
          type="text"
          id="search"
          placeholder="Search..."
          className="px-4 py-2 text-lg border border-gray-200 rounded-3xl focus:outline-none focus:border-darkOrange w-[90%] h-full "
          onChange={handleSearch}
        />
        <Button className={"h-full"}>
          <img src={search} className="h-full w-full px-2"></img>
        </Button>
      </div>
      <div className="h-[80%] overflow-y-auto  gap-y-4 flex items-center justify-center w-full flex-col pt-32">
        {filteredItems.map((item) => (
          // <li key={item.id}>
          //
          // </li>
          <div className="w-[80%] h-[70%] p-4 bg-[#E9C48B] rounded-xl flex flex-col  justify-center gap-y-2 ">
            <div className="flex justify-between items-start  text-2xl font-semibold">
              <p>{item.name}</p>

              <p className="p-2 text-base bg-darkOrange rounded-xl">
                {item.cuisine}
              </p>
            </div>
            <div className="flex justify-between ">
              <div className="flex items-center gap-y-4">
                <span className=" text-3xl">₹</span>
                <span className="text-lg">{item.price}</span>
              </div>
              <div className="flex gap-x-2">
                <Button className={"px-3"} onClick={() => {console.log("hello")}}>-</Button>
                <Button className={"px-3"}>+</Button>
             
              </div>
            </div>

            <p>Stock: {item.stock ? "Available" : "Out of Stock"}</p>
          </div>
        ))}
      </div>

      <NavbarMobile />
      {/* <Button onClick={handleLogout}>Logout</Button> */}
    </div>
  );
};

export default HomePage;
