import { combineReducers } from "redux";
import posts from "./postReducer";

const rootReducer = combineReducers({
  posts //shorthand property name posts: post
});

export default rootReducer;
