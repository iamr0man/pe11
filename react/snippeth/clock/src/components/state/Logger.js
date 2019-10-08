import React from 'react'
import ReactDOM from 'react-dom'


class Logger extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor, 1')
    }
    componentWillMount() {
        console.log('componentWillMount is triggered, 2')
    }
    componentDidMount(e) {
        console.log('componentDidMount is triggered, 4')
        console.log('DOM node: ', ReactDOM.findDOMNode(this))
    }
    // componentWillReceiveProps(newProps) {
    //     console.log('componentWillReceiveProps is triggered')
    //     console.log('new props: ', newProps)
    // }
    // shouldComponentUpdate(newProps, newState) {
    //     console.log('shouldComponentUpdate is triggered')
    //     console.log('new props: ', newProps)
    //     console.log('new state: ', newState)
    //     return true
    // }
    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate is triggered')
        console.log('new props: ', newProps)
        console.log('new state: ', newState)
    }
    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate is triggered')
        console.log('old props: ', oldProps)
        console.log('old state: ', oldState)
    }
    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }
    render() {
        console.log('rendering... Display, 3')
        return (
            <div>{this.props.time}</div>
        )
    }
}

export default Logger;