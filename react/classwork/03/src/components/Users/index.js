import React, { Component } from 'react'

import AddUser from './AddUser'
import ListUser from './ListUser'

export default class Users extends Component {
    
    state = {
        users: [
            {id: 0, userName: 'Big Roma'},
            {id: 1, userName: 'Smallest'}
        ]
    };

    onUserAdd = (user) => {
        const users = this.state.users.concat([user])
        this.setState({
            users
        })
    }

    render(){
        return (
            <>
                <ListUser users={this.state.users}/>
                <AddUser onUserAdd={this.onUserAdd}/>
            </>
        )
    }
}