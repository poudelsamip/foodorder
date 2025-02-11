import image1 from "../assets/image1.avif";
import { MdDelete } from "react-icons/md";

function CartCard() {
  return (
    <div className="w-[full] h-[100px] p-2 shadow-xl rounded-xl flex justify-between">
      <div className="w-[65%] h-full flex gap-3">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img
            src={image1}
            alt="food image"
            className="object-cover  h-full w-full"
          />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-3 pb-2">
          <div className="text-lg text-gray-900 font-semibold">Pancake</div>
          <div className="w-[80%] h-[50px] bg-amber-400 flex rounded-lg overflow-hidden border border-blue-700">
            <button className="w-[30%] h-full bg-white cursor-pointer hover:bg-gray-200">
              -
            </button>
            <span className="w-[40%] h-full bg-gray-400 flex justify-center items-center">
              1
            </span>
            <button className="w-[30%] h-full bg-white cursor-pointer hover:bg-gray-200">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <div className="text-md font-semibold">Rs.500</div>
        <div>
          <MdDelete size={20} className="text-red-600" />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
