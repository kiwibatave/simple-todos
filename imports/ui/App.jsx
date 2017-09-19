// On importe React et le component depuis React
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
// On importe également le Task du ficher du même nom
import Task from './Task.jsx';

// App component répresente l'appli entière

export default class App extends Component {
    getTasks() {
        return [
            { _id: 1, text: 'Ceci est la tâche 1' },
            { _id: 2, text: 'Ceci est la tâche 2' },
            { _id: 3, text: 'Ceci est la tâche 3' },
        ];
    }

    renderTasks() {
        return this.getTasks().map((task) => (
                <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}

// App.propTypes = {
//     tasks: PropTypes.array.isRequired,
// };

// export default createContainer(() => {
//     return {
//         tasks: Tasks.find({}).fetch(),
//     };
// }, App);
