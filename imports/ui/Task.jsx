
import React, { Component, PropTypes } from 'react';

export default class Task extends Component {
    render() {
        return (
            <li>{this.props.task.text}</li>
        );
    }
}

Task.prototypes = {
    task: PropTypes.object.isRequired,
};


