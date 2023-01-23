import { createStore, applyMiddleware } from "redux";
import allReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import * as actionTypes from "../constants/action-types";
import { v1 as uuid } from "uuid";

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

//custom middleware
const myLogger = (store) => (next) => (action) => {
    // console.log("my custom middleware executed");
    // console.log(store);
    // console.log(next);
    // console.log(action);

    if (action.type === actionTypes.CREATE_TASK_REQUEST) {
        action.payload.id = uuid();
    }

    next(action); // bypass the action into the subsequent middleware
};




var store = createStore(allReducers, composeWithDevTools
    (applyMiddleware(myLogger, reduxThunk, logger)));
// (applyMiddleware(reduxThunk, logger)));
export default store;