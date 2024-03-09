import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const getMenu = async () => {
  try {
    const menuItems = [];
    const querySnapshot = await getDocs(collection(db, "menu"));
    querySnapshot.forEach((doc) => {
      const menuItem = {
        id: doc.id,
        ...doc.data(),
      };
      // console.log(menuItem);
      menuItems.push(menuItem);
    });
    return menuItems;
  } catch (error) {
    console.error("Error getting menu items:", error);
    throw error;
  }
};
