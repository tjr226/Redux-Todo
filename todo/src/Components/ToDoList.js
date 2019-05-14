import React from 'react';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';

import { addTask } from '../Actions'

class ToDoList extends React.Component {
    state = {
        newTask: ''
    }

    addTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask)
    };

    handleChanges = e => this.setState({ newTask: e.target.value });

    render() {

        return (
            <div>
                <h2>ToDoList Header</h2>
                {this.props.toDoList.map(todo => <ToDoItem key={todo.id} todo={todo} />)}
                <input onChange={this.handleChanges} value={this.state.newMovie} />
                <button onClick={this.addTask}>Add Task</button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        toDoList: state.toDoList,
    };
};

export default connect(mapStateToProps, { addTask })(ToDoList)