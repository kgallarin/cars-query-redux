import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reduxPromiseMiddleware from "redux-promise-middleware";
import reduxThunk from "redux-thunk";

import rootReducer from "./reducers/index";

export default () => {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
      reduxThunk,
      reduxPromiseMiddleware(),
      createLogger({
        collapsed: false
      })
    )
  );
};
