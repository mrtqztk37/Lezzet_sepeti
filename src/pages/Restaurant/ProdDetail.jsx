import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useSelector } from "react-redux";
import { FaFireAlt } from "react-icons/fa";
import Card from "./Card";

const ProdDetail = () => {
  const { isLoading, products, restaurant } = useSelector(
    (store) => store.product
  );
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2 className="text-2xl flex items-center gap-2 font-bold">
            <FaFireAlt className="text-red-500" />
            Popüler
          </h2>
          <p className="text-sm font-normal mt-3">
            Restoranın En Çok Tercih Edilen Ürünleri
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                restName={restaurant.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdDetail;
