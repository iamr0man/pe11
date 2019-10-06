import React, { Component } from 'react';

export default class Benefits extends Component {
    render() {
        const items = this.props.items || [];
        return (
            <ul className="list-unstyled mt-3 mb-4">
                { items.map((e, i) => {
                   return <li key={i}>{e}</li>
                })}
            </ul>
        );
    }
}