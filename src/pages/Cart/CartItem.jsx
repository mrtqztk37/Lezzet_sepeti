import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { deleteItem, updateItem } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const decrease = () => {
    if (item.amount > 1) {
      dispatch(updateItem(item.id, item.amount - 1));
    } else {
      dispatch(deleteItem(item.id));
    }
  };

  const increase = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };

  return (
    <div className="hover:bg-gray-900 flex gap-5 border mb-10 rounded-lg p-4 hover:shadow-md cursor-pointer">
      <div className="">
        <img className=" w-[215px] rounded-lg" src={item.photo} alt="" />
      </div>
      <div className=" w-full">
        <h1 className="text-red-500 font-semibold">{item.title}</h1>
        <p className="text-gray-500 mt-3">{item.restaurantName}</p>
        <div className="flex items-center justify-between  mt-7 w-50">
          <p className="font-semibold mt-4">{item.price} TL</p>
          <div className="border rounded-lg text-md">
            <button
              onClick={decrease}
              className="p-3 rounded-lg text-red-500 transition hover:bg-red-100"
            >
              {item.amount > 1 ? <FaMinus /> : <BsTrash3 />}
            </button>
            <span className="p-3">{item.amount}</span>
            <button
              onClick={increase}
              className="p-3 rounded-lg text-red-500 transition hover:bg-red-100"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
