import React, { Component } from 'react';
import Logo from './Logo'
import Nav from './Nav'
import Sign from './Sign'

export default class Header extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <Logo />
                <Nav />
                <Sign />
            </div>
        );
    }
}