import {
  FETCH_GOAT_START,
  FETCH_GOAT_SUCCESS,
  FETCH_GOAT_FAIL
} from "../actions/index";

const initialState = {
  url: "http://placegoat.com/200",
  image: "",
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOAT_START:
      console.log("fetch goat started");
      return { ...state, isFetching: true, error: "" };
    case FETCH_GOAT_SUCCESS:
      console.log("fetch goat success");
      return { ...state, isFetching: false, image: action.payload };
    case FETCH_GOAT_FAIL:
      console.log("fetch goat failed", action.payload);
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
