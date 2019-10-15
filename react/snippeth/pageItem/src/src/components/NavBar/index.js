import React, { Component } from 'react'

export default class NavBar extends Component {
    render(){
        return (
            <ul className="d-flex">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        )
    }
}