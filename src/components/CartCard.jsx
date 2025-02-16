import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeItem } from "../redux/cartSlice";

function CartCard({ name, id, price, image, quantity }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[full] h-[100px] p-2 shadow-xl rounded-xl flex justify-between">
      <div className="w-[90%] h-full flex gap-2">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img
            src={image}
            alt="food image"
            className="object-cover  h-full w-full"
          />
        </div>
        <div className="w-full h-full flex flex-col gap-2 pb-2">
          <div className="text-md text-gray-900 font-semibold">{name}</div>
          <div className="w-[40%] h-[50px] flex rounded-lg overflow-hidden border border-blue-700">
            <button
              className="w-[30%] h-full bg-white cursor-pointer hover:bg-gray-200"
              onClick={() =>
                quantity > 0 ? dispatch(decrementQty({ id })) : null
              }
            >
              -
            </button>
            <span className="w-[40%] h-full bg-gray-400 flex justify-center items-center">
              {quantity}
            </span>
            <button
              className="w-[30%] h-full bg-white cursor-pointer hover:bg-gray-200"
              onClick={() => dispatch(incrementQty({ id }))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <div className="text-md font-semibold">{price}</div>
        <div
          className="cursor-pointer"
          onClick={() => dispatch(removeItem(id))}
        >
          <MdDelete size={20} className="text-red-600 " />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
