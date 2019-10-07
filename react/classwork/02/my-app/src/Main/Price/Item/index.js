import React, { Component } from 'react';
import Benefits from './Benefits';

export default class Item extends Component {
    render() {
        const {title, price, benefits, btnText } = this.props.item;
        return (
            <div className="card mb-4 shadow-sm">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{title}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">${price} <small className="text-muted">/ mo</small></h1>
                    <Benefits items={benefits}/>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">{btnText}</button>
                </div>
            </div>
        );
    }
}