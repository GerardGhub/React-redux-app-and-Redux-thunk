import { initialTasks } from "../data/tasks";
import * as actionTypes from "../constants/action-types";


//reducer is a function that receives an action and returns new state.
let initialState = { data: initialTasks, loading: false, error: "" };

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_TASKS_REQUEST:
            return { data: [], loading: true, error: "" };

        case actionTypes.FETCH_TASKS_SUCCESS:
            return { data: action.payload, loading: false, error: "" };

        case actionTypes.FETCH_TASKS_ERROR:
            return { data: state, loading: false, error: action.payload };

        case actionTypes.CREATE_TASK:
            return [...state, action.payload];

        case actionTypes.DELETE_TASK:
            return state.filter(task => task.id !== action.payload)

        default:
            return state;
    }
};