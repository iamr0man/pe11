import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Email extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.prompt = 'Please enter your email to win $1,000,000.'
    }
    submit(event) {
        event.preventDefault()
        let emailAddress = this.refs.emailAddress
        let comments = this.refs.comments
        console.log(ReactDOM.findDOMNode(emailAddress).value)
        console.log(ReactDOM.findDOMNode(comments).value)
    }
    render() {
        return (
            <div className="well">
                <p>{this.prompt}</p>
                <div className="form-group">
                    Email: <input ref="emailAddress" className="form-control" type="text" placeholder="hi@azat.co" />
                </div>
                <div className="form-group">
                    Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!" />
                </div>
                <div className="form-group">
                    <a href="/" className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
                </div>
            </div>
        )
    }
}