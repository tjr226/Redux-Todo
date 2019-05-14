import {ADD_TASK} from '../Actions';

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
        default:
            return state;
    }
}