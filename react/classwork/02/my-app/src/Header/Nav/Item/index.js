import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <a className="p-2 text-dark"  href={this.props.item.url}>
                {this.props.item.title}
            </a>
        );
    }
}