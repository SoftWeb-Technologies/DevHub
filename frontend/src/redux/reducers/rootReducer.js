import { combineReducers } from "redux";
import { apiReducer } from "./apiReducer";
import { userReducer } from "./reducer";

const rootReducer = combineReducers({
  user: userReducer,
  apiData: apiReducer,
});

export default rootReducer;
