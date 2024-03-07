import React from "react";
import routes from "./routes/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthState from "./context/AuthState";

const App = () => {
  const routings = createBrowserRouter(routes);

  return (
    <div>
      <AuthState>
        <RouterProvider router={routings}></RouterProvider>
      </AuthState>
    </div>
  );
};

export default App;
