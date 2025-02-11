import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { contextData } from "../context/UserContext";
import { food_items } from "../Food";

const Navbar = () => {
  let { setFoods, setSearching, setShowCart } = useContext(contextData);

  const handleChange = (search) => {
    search ? setSearching(true) : setSearching(false);
    let filteredFoods = search
      ? food_items.filter((item) =>
          item.food_name.toLowerCase().includes(search)
        )
      : food_items;
    setFoods(filteredFoods);
  };

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-3 md:px-8 sticky top-0 bg-slate-700">
      <div className="w-[50px] h-[50px] bg-slate-100 flex justify-center items-center rounded-md shadow-xl cursor-pointer">
        <MdFastfood className="w-[30px] h-[30px] text-blue-700 " />
      </div>
      <form
        className="w-[60%] md:w-[70%] h-[50px] flex items-center gap-4 px-2 rounded-md bg-slate-200 shadow-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="w-[30px] h-[30px] text-blue-700 cursor-pointer" />
        <input
          type="text"
          placeholder="Search Foods"
          className="w-full h-full outline-none text-md md:text-2xl"
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
      <div
        className="w-[50px] h-[50px] bg-slate-100 flex justify-center items-center rounded-md shadow-xl relative"
        onClick={() => setShowCart(true)}
      >
        <span className="absolute top-0 right-[5px] font-semibold">0</span>
        <FaBasketShopping className="w-[30px] h-[30px] text-blue-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
