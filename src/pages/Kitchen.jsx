import logo from "../assets/logo.png";
import wallet from "../assets/wallet.png";
import cog from "../assets/cog.png";
import logoutimg from "../assets/logoutimg.png";
import stock from "../assets/stock.png";
import { logout } from "../utils/logout";
import { useNavigate } from "react-router-dom";


export default function OrderArea() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate)
  };

  return (
    <div className="flex ">
      <div className="flex flex-col justify-between bg-sideBar w-1/6 h-screen">
        <div className="flex flex-col items-center justify-center">
          <img src={logo} className="h-20 m-5" />

          <ul className="flex flex-col gap-2 justify-center items-center">
            <li className="py-6  w-40 rounded hover:bg-sideBarHover flex justify-center items-center gap-2 text-2xl font-semibold">
                <img src={wallet} className="size-4" />
              Orders
            </li>
            <li className="py-6  w-40 rounded hover:bg-sideBarHover flex justify-center items-center gap-2 text-2xl font-semibold">
            <img src={stock} className="size-5" />
              Stock
            </li>
            <li className="py-6  w-40 rounded hover:bg-sideBarHover flex justify-center items-center gap-2 text-2xl font-semibold">
            <img src={cog} className="size-4" />
              Insights
            </li>
          </ul>
        </div>
        <div className="m-5 flex justify-center">
          <button className="bg-sideBarLogout py-1 px-10 rounded-lg text-sideBar flex items-center justify-center gap-2" onClick={handleLogout}>
            Logout
            <img src={logoutimg} className="size-4" />

          </button>
        </div>
      </div>
    
  
      <div className="bg-red-300 w-full">
    
        <div className="w-full h-[15%] text-5xl font-semibold px-12 py-10">Orders</div>
      </div>
    </div>
  );
}
