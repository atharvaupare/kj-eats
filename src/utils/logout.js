import { auth } from "../config/firebase";

export const logout = async (navigate) => {
  try {
    await auth.signOut();
    console.log("Logged out");
    navigate("/");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
