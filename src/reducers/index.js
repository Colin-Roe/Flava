import { combineReducers } from "redux";
import posts from "./postReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  posts, //shorthand property name posts: post
  authors
});

export default rootReducer;
