import React, { Component } from 'react';
import Item from './Item'

export default class Nav extends Component {
    render() {
        const navItems = [
            {
            id: 1,
            title: 'Features',
            url: '#'
            },
            {
                id: 2,
                title: 'Enterprise',
                url: '#'
            },
            {
                id: 3,
                title: 'Support',
                url: '#'
            },
            {
                id: 4,
                title: 'Pricing',
                url: '#'
            }];

        return (
            <nav className="my-2 my-md-0 mr-md-3">
                { navItems.map(item =>
                    <Item key={item.id}
                          item={item}/>
                )}
            </nav>
        );
    }
}