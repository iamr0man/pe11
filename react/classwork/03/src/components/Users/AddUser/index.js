import React, { Component } from 'react'

export default class AddUser extends Component {
    
    maxId = 100;

    state = {
        userName: ''
    }
    
    onFormSubmit(e){
        e.preventDefault();
        this.props.onUserAdd({
            userName: this.state.userName,
            id: this.maxId++
        })
    }

    onUserChange(e) {
        this.setState({
            userName: e.target.value
        })
    }
    
    // onUserChange = (e) => {
    //     this.setState({
    //         userName: e.target.value
    //     })
    // }

    render(){
        return (
            <form onSubmit={(e) => this.onFormSubmit(e)}>
                <input type="text" 
                value={this.state.userName}
                onChange={this.onUserChange.bind(this)} />
                <button type="submit">Add User</button>
            </form>
        )
    }
}