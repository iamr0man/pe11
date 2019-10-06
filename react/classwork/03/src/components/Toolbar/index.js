import React, { Component } from 'react'

export default class ToolBar extends Component {
    
    constructor(){
        super()
        this.state = {
            users: []
        }
    }
    
    render(){
        return (
            <div>
                Users: <strong>{this.state.users.length}</strong>
            </div>
        )
    }
}