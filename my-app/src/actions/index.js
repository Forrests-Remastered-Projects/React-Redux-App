import axios from "axios";

export const FETCH_GOAT_START = "FETCH_GOAT_START";
export const FETCH_GOAT_SUCCESS = "FETCH_GOAT_SUCCESS";
export const FETCH_GOAT_FAIL = "FETCH_GOAT_FAIL";

function start() {
  return {
    type: FETCH_GOAT_START
  };
}

function http() {
  return axios.get("https://random.dog/woof.json");
}

function success(data) {
  return {
    type: FETCH_GOAT_SUCCESS,
    payload: data.url
  };
}

function fail(error) {
  return {
    type: fail,
    payload: error
  };
}

const getGoat = () => dispatch => {
  dispatch(start());
  return http()
    .then(res => {
      console.log("response", res);
      return dispatch(success(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(fail(err));
    });
};

export default getGoat;
