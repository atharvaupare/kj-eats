import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

export const login = async () => {
  let provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
    //   console.log(result);
    })
    .catch((error) => {
      console.error(error.code);
    });
};
