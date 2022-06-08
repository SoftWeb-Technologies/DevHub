import { combineReducers } from "redux";
import {
  apiNewsAppleReducer,
  apiNewsKeywordReducer,
  apiNewsTeslaReducer,
} from "./apiReducer";
import { userReducer } from "./reducer";

const rootReducer = combineReducers({
  user: userReducer,
  newsAppleApi: apiNewsAppleReducer,
  newsTeslaApi: apiNewsTeslaReducer,
  newsKeywordApi: apiNewsKeywordReducer,
});

export default rootReducer;
