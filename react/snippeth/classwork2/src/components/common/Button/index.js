import React, {Component } from 'react';

export default class Button extends Component {

    render(){
        const {text, onClick = () => {}} = this.props;

        return (
            <button type="button" onClick={onClick} className="btn btn-lg btn-block btn-outline-primary">{text}</button>
        )
    }
}