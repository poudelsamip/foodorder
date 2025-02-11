import { createContext, useState } from "react";
import { food_items } from "../Food";

export const contextData = createContext();

function UserContext({ children }) {
  const [foods, setFoods] = useState(food_items);
  const [searching, setSearching] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const data = {
    foods,
    setFoods,
    searching,
    setSearching,
    showCart,
    setShowCart,
  };
  return (
    <div>
      <contextData.Provider value={data}>{children}</contextData.Provider>
    </div>
  );
}

export default UserContext;
