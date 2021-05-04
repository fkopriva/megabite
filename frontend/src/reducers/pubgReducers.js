import {
  PUBG_MAP_DETAILS_FAIL,
  PUBG_MAP_DETAILS_REQUEST,
  PUBG_MAP_DETAILS_SUCCESS,
  PUBG_MAP_LIST_FAIL,
  PUBG_MAP_LIST_REQUEST,
  PUBG_MAP_LIST_SUCCESS,
} from "../constants/pubgConstants";

export const mapListReducer = (
  state = { loading: true, pubgMaps: [] },
  action
) => {
  switch (action.type) {
    case PUBG_MAP_LIST_REQUEST:
      return { loading: true };
    case PUBG_MAP_LIST_SUCCESS:
      return { loading: false, pubgMaps: action.payload };
    case PUBG_MAP_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const pubgMapDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PUBG_MAP_DETAILS_REQUEST:
      return { loading: true };
    case PUBG_MAP_DETAILS_SUCCESS:
      return { loading: false, pubgMap: action.payload };
    case PUBG_MAP_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
