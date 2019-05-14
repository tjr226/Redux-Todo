import {ADD_TASK, COMPLETE_TASK, DELETE_TASK} from '../Actions';

const initialState = {
    toDoList: [
        { task: 'Learn Redux', id: 0, completed: false },
        { task: 'Eat dinner', id: 1, completed: false }
    ],
    nextID: 2
}


export const reducer = (state = initialState, action) => {
    // console.log("reducer state", state);
    // console.log("reducer action payload", action.payload);
    // console.log("reducer action", action)
    switch (action.type) {
        case ADD_TASK:
            return {
                toDoList: [...state.toDoList, {
                        task:action.payload,
                        id: state.nextID,
                        completed: false
                    }],
                nextID: state.nextID + 1
            };
        case COMPLETE_TASK:
            // console.log('complete task');
            return {
                ...state,
                toDoList: state.toDoList.map(todo => todo.id === action.payload ? 
                    { ...todo, completed: !todo.completed } : todo)
            };
        case DELETE_TASK:
            // console.log('delete task');
            return {
                ...state,
                toDoList: state.toDoList.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
}