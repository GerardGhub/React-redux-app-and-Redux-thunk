import * as actionTypes from "../constants/action-types";
import axios from "axios";

//action creator functions
export const fetchTasks = () => async (dispatch, getState) => {
    dispatch({ type: actionTypes.FETCH_TASKS_REQUEST });

    try {
        var response = await axios.get("http://localhost:7000/tasks");

        //dispatch response data to FETCH_TASKS_REQUEST action; it will be received by the reducer
        dispatch({
            type: actionTypes.FETCH_TASKS_SUCCESS,
            payload: response.data
        });
    }
     catch (error) {
        dispatch({
            type: actionTypes.FETCH_TASKS_ERROR,
            payload: error
        });
    }
};


//action creator is a function that returns an action  object
export const createTask = (newTask) => {
    return {
        type: actionTypes.CREATE_TASK,
        payload: newTask
    };
};


export const deleteTask = (taskId) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: taskId
    }
};