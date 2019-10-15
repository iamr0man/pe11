import React, { Component } from 'react'

import Icon from '../Icon'
import NavBar from '../NavBar'

export default class Header extends Component {
    render(){
        return (
            <div className="header d-flex justify-content-around">
                <Icon />
                <NavBar />
            </div>
        )
    }
}