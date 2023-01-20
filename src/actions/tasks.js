import * as actionTypes from "../constants/action-types";
import axios from "axios";

export const fetchTasks = () => async (dispatch, getState) => {

    var response = await axios.get("http://localhost:7000/tasks");

    // console.log(responseData);

    //dispatch response data to FETCH_TASKS action; it will be received by the reducer
    dispatch({
        type: actionTypes.FETCH_TASKS,
        payload: response.data
    });
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