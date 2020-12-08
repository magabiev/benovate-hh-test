import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import application from "./application";

export const store = createStore(application, applyMiddleware(thunk));
