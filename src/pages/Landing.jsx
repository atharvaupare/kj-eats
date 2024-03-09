import React, { useContext, useEffect } from "react";
import authContext from "../context/authContext";
import { Button } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import googleicon from "../assets/google-icon.png";
import Navbar from "../components/Navbar";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { login } from "../utils/login";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { getMenu } from "../utils/getMenu";

const Landing = () => {
  //   const { bag, setBag } = useContext(authContext);
  //   console.log(bag);
  const navigate = useNavigate();

  const staffLogins = ["atharvaupare5@gmail.com"]; //redirect to kitchen if login mail belongs to this array
  const { menuItems, setMenuItems } = useContext(authContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);

      if (user)
        if (user) {
          if (staffLogins.includes(user.email)) {
            navigate("/kitchen");
          } else {
            try {
              const userDocRef = doc(collection(db, "users"), user.uid);
              const userDoc = await getDoc(userDocRef);
              // console.log(userDoc.data)

              if (!userDoc.exists()) {
                const userData = {
                  name: user.displayName,
                  email: user.email,
                  photoURL: user.photoURL,
                  uid: user.uid,
                };

                await setDoc(userDocRef, userData);
              }

              const newMenuItems = await getMenu();
              const uniqueNewMenuItems = newMenuItems.filter(
                (newItem) =>
                  !menuItems.some(
                    (existingItem) => existingItem.id === newItem.id
                  )
              );
              setMenuItems((prevMenuItems) => [
                ...prevMenuItems,
                ...uniqueNewMenuItems,
              ]);

              console.log(menuItems);
              console.log(newMenuItems);

              navigate("/homepage");
            } catch (error) {
              console.error("Error processing authentication:", error);
            }
          }
        } else {
          // User is not authenticated
          navigate("/errorpage");
          console.log("User is not authenticated.");
        }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <div className="mob fadeSide flex flex-col justify-center items-center  h-[100vh]">
        <div className="flex flex-col mt-[65%] gap-6 justify-center items-center">
          <img src={logo} alt="" className="h-40 w-40" />
          <h1 className="text-center font-bold text-xl text-dark-main">
            <p>Order with ease,</p>
            <p>Skip the queues</p>
          </h1>
        </div>
        <div className=" h-[20rem] w-full flex flex-col items-center justify-center gap-6 ">
          <Link to="/" className="w-[80%] flex justify-center">
            <Button
              className="h-14 mt-[20%] w-[90%]  text-white flex gap-x-2 items-center justify-center"
              onClick={login}
            >
              <p className="font-medium text-xl">Login with Google</p>
              <img src={googleicon} alt="" className="mt-1" />
            </Button>
          </Link>
          <div className="flex gap-2"></div>
        </div>
      </div>
      {/* 
      <div className="desk">
        <div className="fade deskLanding h-[100vh] bg-no-repeat bg-cover">
          <Navbar />
          <div className=" flex flex-col  gap-8 w-[55%] ml-[10%] mt-[5%]  ">
            <h1 className=" text-[3rem] font-bold">
              Inspect and switch to phone!
            </h1>
            <div className=" flex flex-col">
              <p className=" text-[2rem] font-semibold text-[#0000008a]">
                Local treasures await,
              </p>
              <p className=" text-[2rem] font-semibold text-[#0000008a]">
                Shop smart, collect easy, embrace community vitality.
              </p>
            </div>
            <Link to="/signup">
              <Button className=" join bg-transparent  w-[11rem]  h-11">
                Join Now
              </Button>
            </Link>
            <div className=" h-48 flex items-end ">
              <div className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-2 w-[100%]">
                <div className="flex  items-center  text-4xl text-darkOrange font-semibold border-r-2 border-solid border-black">
                  0+
                </div>
                <div className="count flex  items-center  text-4xl text-darkOrange font-semibold border-r-2 border-solid border-black">
                  0+
                </div>
                <div className="count flex  items-center text-4xl text-darkOrange font-semibold  ">
                  0+
                </div>
                <div className="flex  items-center  font-[400] text-[2rem] ">
                  Downloads
                </div>
                <div className="flex  items-center  font-[400] text-[2rem] ">
                  Transactions
                </div>
                <div className="flex  items-center  font-[400] text-[2rem] ">
                  Shopkeepers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
