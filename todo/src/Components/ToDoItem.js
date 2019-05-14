import React from 'react';
import { connect } from 'react-redux';
import { completeTask, deleteTask } from '../Actions';

class ToDoItem extends React.Component {
    completeTask = e => {
        e.preventDefault();
        this.props.completeTask(this.props.todo.id);
    }

    deleteTask = e => {
        e.preventDefault();
        this.props.deleteTask(this.props.todo.id);
    }

    render() {
        return (
            <div>
                {this.props.todo.task} 
                <button onClick={this.completeTask}>Toggle Complete</button>
                <button onClick={this.deleteTask}>Delete Task</button>
            </div>
        )
    }
};



export default connect(null, { completeTask, deleteTask })(ToDoItem)