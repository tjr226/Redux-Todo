export const ADD_TASK = "ADD_TASK" ; 

export const addTask = taskText => {
    console.log(taskText);
    return {
        type: ADD_TASK,
        payload: taskText
    }
}