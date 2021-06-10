import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "../reducer/counterReducer";
import thunk from "redux-thunk"
import logger from 'redux-logger'
import rootReducer from "../reducer/rootReducer";

const middleWare = [thunk, logger]

export const store = createStore(rootReducer, applyMiddleware(...middleWare))