import rootReducer from "./reducers";
import { createStore } from "redux";

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const store = createStore(rootReducer, initialState);

export default store;
