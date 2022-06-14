import { combineReducers } from "redux";
import {
  apiContestReducer,
  apiNewsAppleReducer,
  apiNewsKeywordReducer,
  apiNewsTeslaReducer,
} from "./apiReducer";
import {
  apiDevToArticlesReducer,
  apiGithubReposReducer,
} from "./blogApiReducer";
import { libReducer } from "./libReducer";
import { userReducer } from "./reducer";

const rootReducer = combineReducers({
  user: userReducer,
  lib: libReducer,
  newsAppleApi: apiNewsAppleReducer,
  newsTeslaApi: apiNewsTeslaReducer,
  newsKeywordApi: apiNewsKeywordReducer,
  blogGithubReposApi: apiGithubReposReducer,
  blogDevToArticlesApi: apiDevToArticlesReducer,
  contestApi: apiContestReducer,
});

export default rootReducer;
