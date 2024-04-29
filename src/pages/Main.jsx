import api from "../utils/api";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
api;
import actionTypes from "../redux/actionTypes";
import Loader from "../components/Loader";
import Error from "../components/Error";
import RestCard from "../components/RestCard";
import { getRestaurants } from "../redux/actions/restaurantActions";
import Container from "../components/Container";

const Main = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurant
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Container className="max-w-[1040px] mx-auto p-5">
      <h1 className="text-3xl">Tüm Restoranlar</h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error msg={error} retry={() => dispatch(getRestaurants())} />
      ) : (
        <div className="grid gap-5 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols:3 ">
          {restaurants.map((rest) => (
            <RestCard data={rest} key={rest.id} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Main;
