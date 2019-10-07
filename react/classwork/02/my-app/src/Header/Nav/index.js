import React, { Component } from 'react';
import Item from './Item'

export default class Nav extends Component {
    render() {
        const navItems = [
        {
            title: 'Features',
            url: '#',
            id: '2'
        },
        {
            title: 'Enterprise',
            url: '#',
            id: '22'
        },
        {
            title: 'Support',
            url: '#',
            id: '222'
        },
        {
            title: 'Pricing',
            url: '#',
            id: '2222'
        }]
        
        return (
            <nav className="my-2 my-md-0 mr-md-3">
                { navItems.map(e => <Item key={e.id} item={e}/>)}
            </nav>
        );
    }
}