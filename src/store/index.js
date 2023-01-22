import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
// import * as actionTypes from "../constants/action-types";

//basic logs
//var logger  = createLogger();

//collapse all logs
// var logger = createLogger({
//     collapsed: true
// });


// //collapse only FETCH_TASKS_REQUEST
// var logger = createLogger({
//     collapsed: (getState, action, logEntry) => {
// return action.type === actionTypes.FETCH_TASKS_REQUEST
//     }
// });


//expand only when state ha a "error" object
// var logger = createLogger({
//     collapsed: (getState, action, logEntry) => {
//         return !logEntry.nextState.tasks.error;
//     }
// });


//expand only when environment is development
var logger = createLogger({
    predicate: (getState, action) => {
        return process.env.REACT_APP_ENVIRONMENT === "development";
    }
});





var store = createStore(allReducers, composeWithDevTools
    (applyMiddleware(reduxThunk, logger)));
export default store;