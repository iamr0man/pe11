import React, {Component} from 'react';

export default class BenefitItem extends Component {
    render() {
        const item = this.props.item || '';

        return (
            <li>{item}</li>
        );
    }
}