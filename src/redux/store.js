import { combineReducers } from "redux";
import { cultureReducer } from "./reducers";
import { legacy_createStore as createStore } from "redux";

const rootReducer = combineReducers({
  culture: cultureReducer,
});

const store = createStore(rootReducer);

export default store;
