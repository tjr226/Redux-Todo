import React from 'react';

const ToDoItem = props => {
    // console.log("todoitem props", props)
    return (
        <div>
            {props.todo.task}
        </div>
    )
};

export default ToDoItem