import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import users from "./ducks/users";
import filter from "./ducks/filter";

const reducers = combineReducers({ users, filter });

export const store = createStore(reducers, applyMiddleware(thunk));
