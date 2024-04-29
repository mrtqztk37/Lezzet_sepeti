import api from "../../utils/api";
import Actions from "../actionTypes";

export const getDataByRestId = (id) => async (dispatch) => {
  try {
    dispatch({ type: Actions.PROD_LOADING });

    const req1 = await api.get(`/restaurants/${id}`);
    const req2 = await api.get(`/products?restaurantId=${id}`);

    const responses = await Promise.all([req1, req2]);

    dispatch({ type: Actions.PROD_SUCCESS, payload: responses });
  } catch (err) {
    dispatch({
      type: Actions.PROD_ERROR,
      payload: err.message,
    });
  }
};
