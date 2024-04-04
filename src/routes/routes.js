import Cart from "../pages/Cart";
import HomePage from "../pages/HomePage";
import Kitchen from "../pages/Kitchen";
import Landing from "../pages/Landing";
import OrderPage from "../pages/OrderPage";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/kitchen",
    element: <Kitchen />,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/orders",
    element: <OrderPage></OrderPage>,
  },
];

export default routes;
