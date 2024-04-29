import { FaStar } from "react-icons/fa";
import { TbClockHour10 } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";
import { Link } from "react-router-dom";

const RestCard = ({ data }) => {
  return (
    <Link
      to={`/restaurant/${data.id}`}
      className=" rounded-lg overflow-hidden hover:opacity-60 cursor-pointer hover:shadow-lg"
    >
      <img
        className="w-full  h-[200px] object-cover max-md:w-90 max-md:h-2/3"
        src={data.photo}
        alt={data.name}
      />
      <div className="p-3 border-red-500">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold"> {data.name}</h3>
          <p className="flex gap-2 items-center">
            <FaStar className="text-red-500" />
            {data.rating}
          </p>
        </div>
        <p className="text-sm my-2 text-gray-500">
          <span>{data.minPrice} TL minimum</span>
        </p>
        <div className="flex gap-4 items-center ">
          <div className="flex items-center gap-2">
            <TbClockHour10 />

            <span>{data.estimatedDelivery} dak.</span>
          </div>
          {data.isDeliveryFree && (
            <div className="flex gap-3 items-center">
              <MdDeliveryDining className="text-red-500 text-xl" />
              <span className="text-red-500 text-sm">Ücretsiz</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestCard;
