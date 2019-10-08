import React, { Component } from 'react';

export default class Counter extends Component {

    render() {
        return (
            <span>Clicked {this.props.counter} times</span>
        )
    }
}