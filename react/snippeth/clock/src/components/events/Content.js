import React, { Component } from 'react'

import ClickCounterButton from './ClickCounterButton'
import Counter from './Counter'

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = { counter: 0 };
    }

    handleClick() {
        const oldValue = this.state.counter;
        this.setState({ counter: oldValue + 1 })
    }

    render() {
        return (
            <div>
                <ClickCounterButton
                    handleClick={this.handleClick} />
                <br />
                <Counter counter={this.state.counter} />
            </div>
        )
    }
}