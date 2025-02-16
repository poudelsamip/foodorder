import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { categories } from "../Category";
import { food_items } from "../Food";
import Cards from "../components/Cards";
import { contextData } from "../context/UserContext";
import { IoClose } from "react-icons/io5";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { foods, setFoods, searching, showCart, setShowCart } =
    useContext(contextData);
  const filterFoods = (category) => {
    if (category === "All") {
      setFoods(food_items);
    } else {
      let newFoodItem = food_items.filter(
        (item) => item.food_category == category
      );
      setFoods(newFoodItem);
    }
  };

  const items = useSelector((state) => state.cart);
  let subTotal = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  let taxes = Math.floor(subTotal * 0.13);
  let deliveryFee = 50;
  let total = subTotal + taxes + deliveryFee;

  return (
    <div className="w-full min-h-screen bg-slate-700">
      <Navbar />
      {!searching && (
        <div className="flex flex-wrap justify-center items-center gap-5">
          {categories.map((item) => (
            <div
              className="w-[100px] h-[100px] bg-slate-200 flex flex-col items-center justify-center gap-2 rounded-md font-semibold shadow-xl hover:bg-blue-200 cursor-pointer transition-all duration-250"
              onClick={() => filterFoods(item.name)}
              key={item.id}
            >
              <div>{item.image}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      )}
      <div className="w-full flex flex-wrap justify-center gap-3 px-5 py-8">
        {foods.map((item) => (
          <Cards
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            id={item.id}
            category={item.food_category}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>

      <div
        className={`w-full md:w-[40vw] h-[100vh] overflow-auto fixed top-0 right-0 bg-slate-200 shadow-2xl p-5 transition-all duration-500 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between items-center">
          <span className="text-2xl font-semibold text-blue-700">
            Order Items
          </span>
          <span
            className="text-blue-700 cursor-pointer hover:text-blue-500"
            onClick={() => setShowCart(false)}
          >
            <IoClose size={40} />
          </span>
        </header>
        <div>
          {items.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="w-full border-y-2 p-5 border-gray-400 mt-5">
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Sub-total</span>
            <span className="text-lg font-bold">Rs. {subTotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Tax</span>
            <span className="text-lg font-bold">Rs. {taxes}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-semibold">Delivery Fee</span>
            <span className="text-lg font-bold">Rs. {deliveryFee}</span>
          </div>
        </div>
        <div className="flex justify-between px-5">
          <span className="text-xl font-bold">Total</span>
          <span className="text-xl font-bold">Rs. {total}</span>
        </div>
        <button className="mt-3 float-right px-7 py-3 rounded-md bg-blue-700 text-white hover:bg-blue-600 cursor-pointer text-smd md:text-xl">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Homepage;
