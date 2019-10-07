import React, { Component } from 'react'

export default class ItemUser extends Component {

    render(){
        const {userName} = this.props.user;
        
        return (
            <div>
                Username: <strong>{userName}</strong>
            </div>
        )
    }
}