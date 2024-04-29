import { v4 } from "uuid";
import api from "../../utils/api";
import Actions from "../actionTypes";
import { toast } from "react-toastify";

export const getCart = () => (dispatch) => {
  dispatch({ type: Actions.CART_LOADING });

  api
    .get("/cart")
    .then((res) => dispatch({ type: Actions.CART_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: Actions.CART_ERROR, payload: err.message })
    );
};
export const addToBasket = (product, restName) => (dispatch) => {
  const newItem = {
    id: v4,
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: restName,
    amount: 1,
  };
  api
    .post("/cart", newItem)
    .then(() => {
      dispatch({ type: Actions.ADD_ITEM, payload: newItem });

      toast.success(`${newItem.title} sepete eklendi`);
    })
    .catch(() => toast.error("Üzgünüz bir sorun oluştu"));
};

export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    .then((res) => {
      dispatch({
        type: Actions.UPDATE_ITEM,
        payload: res.data,
      });
      toast.info(`Sepetiniz Güncellendi : ${newAmount}`);
    })
    .catch(() => toast.error("Üzgünüz Bir Sorun Oluştu!!"));
};

export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => {
      dispatch({ type: Actions.DELETE_ITEM, payload: id });
      toast.warning("Ürün Sepetten Kaldırıldı");
    })
    .catch(() => toast.error("Üzgünüz Bir Sorun Oluştu"));
};
