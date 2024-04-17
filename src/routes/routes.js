import Cart from "../pages/Cart";
import HomePage from "../pages/HomePage";
import Kitchen from "../pages/Kitchen";
import Landing from "../pages/Landing";
import OrderPage from "../pages/OrderPage";
import Test from "../pages/Test";
import Checkout from "../pages/Checkout";
import Token from "../pages/Token";

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
  {
    path: "/test",
    element: <Test/>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/token",
    element: <Token></Token>,
  },
];

export default routes;
