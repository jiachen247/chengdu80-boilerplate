import { combineReducers } from "redux";
import postsReducer from "./PostReducer";

export default combineReducers({ posts: postsReducer });
