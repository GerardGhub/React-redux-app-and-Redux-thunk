import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk  from "redux-thunk";



var store = createStore(allReducers, composeWithDevTools(applyMiddleware(reduxThunk)));
export default store;