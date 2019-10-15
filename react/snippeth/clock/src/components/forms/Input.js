import React, { Component } from 'react'

export default class Input extends Component {

    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({ title: e.target.value })
    }

    render() {
        return (
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
        )
    }
}

