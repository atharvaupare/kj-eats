import { getAuth } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { logout } from "../utils/logout";

const Profile = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  console.log(currentUser);

  if (!currentUser) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-3xl font-semibold">No user</p>
      </div>
    );
  }
  const handleLogout = () => {
    logout(navigate)
  } 

  return (
    <div className="w-full h-screen mob fadeSide">
      <div
        className="absolute top-[2%] text-2xl font-semibold bg-white rounded-md left-[2%] p-1 w-1/6 text-center"
        onClick={() => {
          navigate("/homepage");
        }}
      >
        &#x2190;
      </div>

      <div className="w-full h-[10%] flex items-center justify-center bg-darkOrange text-xl font-semibold ">
        <div className="text-black font-semibold text-3xl">Profile</div>
      </div>
      <div className="w-full h-full flex  py-4 flex-col items-center">
        <div className="rounded-full h-[25%]">
          <img
            src={currentUser?.photoURL}
            alt=""
            className="rounded-full h-40"
          />
        </div>
        <div className="w-[85%] flex flex-col gap-y-4">
          <p className="text-xl">Name: {currentUser?.displayName}</p>
          <p className="text-xl">Email: {currentUser?.email}</p>
        </div>
        <Button className={"px-16 py-4 absolute bottom-[5%]"} onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default Profile;
