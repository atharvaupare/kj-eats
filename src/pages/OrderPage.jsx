/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./App.css";

function ExpandedList({keyName, value}){
  return <li>{keyName} : {value}</li>
}

function OrderCard({orderID, timeElapsed, order}){
  const [expand, setExpand] = useState(false);

  function handleClick(){ 
    setExpand((prev) => !prev)
  }

  const navigate = useNavigate();

  return <div className="w-60 p-2 border border-black">
     <div
        className="absolute top-[2%] text-2xl font-semibold bg-white rounded-md left-[2%] p-1 w-1/6 text-center"
        onClick={() => {
          navigate("/homepage");
        }}
      >
        &#x2190;
      </div>
    <div className="flex justify-between border-y">
      <div>
        <p>#{orderID}</p>
        <p>{timeElapsed} mins</p>
      </div>
      <button>Show Coupon</button>
    </div>
    <div className="flex flex-col items-end">
      <button onClick={handleClick}>🔽</button>
      {expand ? (<ul className="self-start">
        {Object.entries(order).map(([key, value], index) => <ExpandedList key={index} keyName={key} value={value}/>)}
      </ul>): (<p></p>)}
    </div>
  </div>
}

const temp = [
  {"Vada Pav":2, "Pepsi":1},
  {"Rajma":4, "Shikanji":4, "Salad":2},
  {"Rasmalai":8}
];

function Orders(){
  return <div className="flex flex-col gap-2">
    <OrderCard orderID={3894790137} timeElapsed={7} order={temp[0]}/>
    <OrderCard orderID={3894790137} timeElapsed={5} order={temp[1]}/>
    <OrderCard orderID={3894790137} timeElapsed={15} order={temp[2]}/>
  </div>
}

export default function OrderPage(){
  return <div className="w-screen flex justify-center my-4">
    <Orders />
  </div>;
}