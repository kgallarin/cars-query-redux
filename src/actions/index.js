export const SET_API = "SET_API";
export const QUERY_STRING = "QUERY_STRING";

export const SET_API_PENDING = "SET_API_PENDING";
export const SET_API_FULFILLED = "SET_API_FULFILLED";
export const SET_API_REJECTED = "SET_API_REJECTED";

export const getQuery = jsonResult => ({
  type: QUERY_STRING,
  payload: jsonResult
});

export const setApi = () => ({
  type: SET_API,
  payload: fetch(`http://localhost:3001/cars`).then(response => response.json())
});
