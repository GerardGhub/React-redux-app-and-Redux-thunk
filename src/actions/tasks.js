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


export const createTask = (newTask) => async (dispatch) => {
    //dispatch response data to CREATE_TASK_REQUEST action; it will be received by the reducer.
    dispatch({ type: actionTypes.CREATE_TASK_REQUEST });

    try {
        var response = await axios.post("http://localhost:7000/tasks", newTask);

        //dispatch response data to CREATE_TASKS_SUCCESS action; it will be received by the reducer
        dispatch({
            type: actionTypes.CREATE_TASK_SUCCESS,
            payload: response.data
        });
    }
    catch (error) {
        dispatch({
            type: actionTypes.CREATE_TASK_ERROR,
            payload: error
        });
    }
};


export const deleteTask = (taskId) => async (dispatch) => {
    //dispatch response data to DELETE_TASK_REQUEST action; it will be received by the reducer.
    dispatch({ type: actionTypes.DELETE_TASK_REQUEST });

    try {
       await axios.delete(`http://localhost:7000/tasks/${taskId}`);

        //dispatch response dta to DELETE_TASKS_SUCCESS action; it will be received by the reducer
        dispatch({
            type: actionTypes.DELETE_TASK_SUCCESS,
            payload: taskId
        });
    }
    catch (error) {
        //dispatch error to DELETE_TASKS_ERROR action; it will be received by the reducer
        dispatch({
            type: actionTypes.DELETE_TASK_ERROR,
            payload: error
        });
    }
};



