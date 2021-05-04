import Axios from "axios";
import {
  PUBG_MAP_LIST_FAIL,
  PUBG_MAP_LIST_REQUEST,
  PUBG_MAP_LIST_SUCCESS,
  PUBG_MAP_DETAILS_REQUEST,
  PUBG_MAP_DETAILS_SUCCESS,
  PUBG_MAP_DETAILS_FAIL,
} from "../constants/pubgConstants";

export const listMaps = () => async (dispatch) => {
  dispatch({
    type: PUBG_MAP_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/pubgMaps");
    dispatch({ type: PUBG_MAP_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PUBG_MAP_LIST_FAIL, payload: error.message });
  }
};

export const detailsMap = (pubgMapId) => async (dispatch) => {
  dispatch({ type: PUBG_MAP_DETAILS_REQUEST, payload: pubgMapId });
  try {
    const { data } = await Axios.get(`/api/pubgMaps/${pubgMapId}`);
    dispatch({ type: PUBG_MAP_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PUBG_MAP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
