export const ADD_TASK = "ADD_TASK" ; 
export const COMPLETE_TASK = "COMPLETE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTask = taskText => {
    // console.log(taskText);
    return {
        type: ADD_TASK,
        payload: taskText
    }
}

export const completeTask = taskID => {
    // console.log(taskID);
    return {
        type: COMPLETE_TASK,
        payload: taskID
    }
}

export const deleteTask = taskID => {
    // console.log(taskID);
    return {
        type: DELETE_TASK,
        payload: taskID
    }
}