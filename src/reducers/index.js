import { combineReducers } from "redux";
import posts from "./postReducer";
import authors from "./authorReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  posts, //shorthand property name posts: post
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
