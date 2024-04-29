import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../../redux/actions/cartActions";

const Card = ({ product, restName }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const found = cart.find((i) => i.productId === product.id);
  const handleAdd = () => {
    if (found) {
      dispatch(updateItem(found.id, found.amount + 1));
    } else {
      dispatch(addToBasket(product, restName));
    }
  };
  return (
    <div className="card justify-between mt-4 shadow rounded  cursor-pointer">
      <div className="hover:scale-75 p-3 flex flex-col justify-between ">
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p className="text-gray-500 text-sm mt-3">{product.desc}</p>
        </div>
        <p className="max-sm:mt-3">{product.price} TL</p>
      </div>
      <div className="w-[135px] h-[135px] relative">
        <img className="w-full h-full rounded-md " src={product.photo} alt="" />
        <button
          onClick={handleAdd}
          className="absolute end-2 bottom-2 bg-black rounded-full w-7 h-7 grid place-items-center hover:scale-150 hover:shadow-2xl "
        >
          {found ? (
            <span className="fount-bold">{found.amount}</span>
          ) : (
            <FaPlus />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
