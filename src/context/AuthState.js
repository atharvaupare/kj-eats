import { useState } from "react";
import authContext from "./authContext";

const AuthState = (props) => {
  const [bag, setBag] = useState([
    {
      orderToken: "#ADADX",
      orderItemName: "Green Kurta",
      orderCategory: "Clothes",
      orderPrice: 500,
      onGoing: false,
      orderDate: "24/01/2024, 08:00pm",
    },
    {
      orderToken: "#ADADX",
      orderItemName: "Yellow Kurta",
      orderCategory: "Ethnic",
      orderPrice: 5000,
      onGoing: true,
      orderDate: "31/01/2024, 04:00pm",
    },
    {
      orderToken: "#ADADX1",
      orderItemName: "Kurta",
      orderCategory: "Clothes",
      orderPrice: 500,
      onGoing: false,
      orderDate: "24/01/2024, 08:00pm",
    },
    {
      orderToken: "#ADADX2",
      orderItemName: "Kurta2",
      orderCategory: "Ethnic",
      orderPrice: 5000,
      onGoing: false,
      orderDate: "20/01/2024, 04:00pm",
    },
    {
      orderToken: "#ADADX3",
      orderItemName: "Kurta3",
      orderCategory: "Marriage",
      orderPrice: 500,
      onGoing: true,
      orderDate: "30/01/2024, 02:00pm",
    },
  ]);

  return (
    <authContext.Provider value={{ bag, setBag }}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
