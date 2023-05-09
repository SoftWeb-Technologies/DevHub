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
import { remainderReducer, tasksReducer, trashReducer } from "./tasksReducer";

const rootReducer = combineReducers({
  user: userReducer,
  tasks: tasksReducer,
  remainder: remainderReducer,
  lib: libReducer,
  trashStore: trashReducer,
  newsAppleApi: apiNewsAppleReducer,
  newsTeslaApi: apiNewsTeslaReducer,
  newsKeywordApi: apiNewsKeywordReducer,
  blogGithubReposApi: apiGithubReposReducer,
  blogDevToArticlesApi: apiDevToArticlesReducer,
  contestApi: apiContestReducer,
  techHuntApi: apiTechHuntReducer,
});

export default rootReducer;
