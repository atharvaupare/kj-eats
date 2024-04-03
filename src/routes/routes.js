import Cart from "../pages/Cart";
import HomePage from "../pages/HomePage";
import Kitchen from "../pages/Kitchen";
import Landing from "../pages/Landing";

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
];

export default routes;
