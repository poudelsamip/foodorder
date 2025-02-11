import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast, MdOutlineFoodBank } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { GiFullPizza, GiHamburger } from "react-icons/gi";

export const categories = [
  {
    id: 1,
    name: "All",
    image: <TiThSmall className="w-[50px] h-[50px] text-blue-700" />,
  },
  {
    id: 2,
    name: "breakfast",
    image: <MdFreeBreakfast className="w-[50px] h-[50px] text-blue-700" />,
  },
  {
    id: 3,
    name: "soups",
    image: <TbSoupFilled className="w-[50px] h-[50px] text-blue-700" />,
  },
  {
    id: 4,
    name: "main_course",
    image: <MdOutlineFoodBank className="w-[50px] h-[50px] text-blue-700" />,
  },
  {
    id: 5,
    name: "pizza",
    image: <GiFullPizza className="w-[50px] h-[50px] text-blue-700" />,
  },
  {
    id: 6,
    name: "burger",
    image: <GiHamburger className="w-[50px] h-[50px] text-blue-700" />,
  },
];
