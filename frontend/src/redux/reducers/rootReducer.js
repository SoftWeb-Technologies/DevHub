import { combineReducers } from "redux";
import {
  apiContestReducer,
  apiNewsAppleReducer,
  apiNewsKeywordReducer,
  apiNewsTeslaReducer,
  apiTechHuntReducer,
} from "./apiReducer";
import {
  apiDevToArticlesReducer,
  apiGithubReposReducer,
} from "./blogApiReducer";
import { libReducer } from "./libReducer";
import { userReducer } from "./reducer";

const rootReducer = combineReducers({
  user: userReducer,
  // auth: authReducer,
  lib: libReducer,
  newsAppleApi: apiNewsAppleReducer,
  newsTeslaApi: apiNewsTeslaReducer,
  newsKeywordApi: apiNewsKeywordReducer,
  blogGithubReposApi: apiGithubReposReducer,
  blogDevToArticlesApi: apiDevToArticlesReducer,
  contestApi: apiContestReducer,
  techHuntApi: apiTechHuntReducer,
});

export default rootReducer;
