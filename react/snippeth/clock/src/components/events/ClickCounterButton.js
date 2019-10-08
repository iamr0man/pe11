import React, { Component } from 'react'

export default class ClickCounterButton extends Component {

    render() {

        const { handleClick } = this.props;

        return (
            <button className="btn btn-danger"
                onClick={handleClick}>
                Don`t touch me your dirty handes
            </button>
        )
    }
}