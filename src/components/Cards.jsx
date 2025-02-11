import React from "react";
const Cards = ({ name, image, price, type }) => {
  return (
    <div className="w-[150px] h-[200px] md:w-[250px] md:h-[300px] bg-slate-200 p-3 rounded-md flex flex-col gap-0 md:gap-2 shadow-2xl hover:border-2 border-slate-700 ">
      <div className="w-full h-[70%] md:h-[60%] overflow-hidden rounded-md mt-1">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="text-md md:text-2xl font-semibold">{name}</div>
      <div className="flex justify-between">
        <div className="text-sm md:text-md font-semibold">{price}</div>
        <div className="text-sm md:text-md font-semibold">{type}</div>
      </div>
      <button className="w-full p-2 rounded-md bg-blue-700 text-white hover:bg-blue-600 cursor-pointer text-sm md:text-xl">
        Add to basket
      </button>
    </div>
  );
};

export default Cards;
