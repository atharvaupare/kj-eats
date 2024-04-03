import React, { useEffect } from "react";
import routes from "./routes/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthState from "./context/AuthState";


const App = () => {
  const routings = createBrowserRouter(routes);

  // Function to detect and enforce portrait mode
  // const enforcePortraitMode = () => {
  //   const isPortrait = () => window.matchMedia("(orientation: portrait)").matches;
  //   const lockOrientation = () => {
  //     if (!isPortrait()) {
  //       alert("Please rotate your device to portrait mode for better experience.");
  //     }
  //   };

  //   lockOrientation(); // Initially check orientation
  //   window.addEventListener("orientationchange", lockOrientation); // Listen for orientation changes
  // };

  // useEffect(() => {
  //   enforcePortraitMode(); // Call the function on component mount
  // }, []);

  return (
    <div>
      <AuthState>
      
          <RouterProvider router={routings}></RouterProvider>
     
      </AuthState>
    </div>
  );
};

export default App;
