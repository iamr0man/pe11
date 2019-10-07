import React, { Component } from 'react'

import ItemUser from './ItemUser'

export default class ListUser extends Component {
    
    render(){
        console.log(this.props.users)
        return (
            <div className="user-list">
                {this.props.users.map(i => {
                    return <ItemUser key={i.id} user={i}/>
                })}
            </div>
        )
    }
}