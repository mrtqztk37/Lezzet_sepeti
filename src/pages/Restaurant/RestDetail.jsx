import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { FaArrowDown } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { FaStar } from "react-icons/fa";

const RestDetail = () => {
  const { isLoading, error, restaurant, product } = useSelector(
    (store) => store.product
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        restaurant && (
          <div className=" flex gap-4">
            <img
              className=" w-[250px] h-[150px] max-md:w-[100px] rounded"
              src={restaurant.photo}
              alt=""
            />
            <div className="">
              <p className="flex gap-4">
                <span className="flex gap-2 items-center">
                  <FaArrowDown className="text-red-500" />
                  min {restaurant.minPrice} TL
                </span>
                <span className="flex gap-2 items-center">
                  {" "}
                  <GoClock className="text-red-500" />
                  {restaurant.estimatedDelivery} dak.
                </span>
              </p>

              <h1 className="mx-6 text-l lg:text-xl font-semibold mt-2">
                {restaurant.name}
              </h1>
              <p className="flex lg:mt-16  gap-2 items-center mt-6">
                <FaStar className="text-red-500 " />
                {restaurant.rating}
                <button className="hover:text-red-500">Yorumları Gör</button>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default RestDetail;
