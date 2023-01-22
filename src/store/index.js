import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";


var logger = createLogger();

var store = createStore(allReducers, composeWithDevTools
    (applyMiddleware(reduxThunk, logger)));
export default store;