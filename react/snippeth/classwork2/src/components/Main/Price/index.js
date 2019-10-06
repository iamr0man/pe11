import React, {Component} from 'react';
import PriceItem from './PriceItem';
import {
    PRICE_TYPE_FREE,
    PRICE_TYPE_PRO,
    PRICE_TYPE_ENTEPRISE
} from '../../../const';

export default class Price extends Component {

    constructor(props){
        super(props);
        this.state = {
            status: false,
            activeItem: {}
        }
    }

    onActivate(item){
        this.setState(prevState => ({
            status: !prevState.status,
            activeItem: item
        }))
    }

    render() {
        const priceItems = [
            {
                id: 1,
                type: PRICE_TYPE_FREE,
                title: 'Free',
                priceUSD: 0,
                benefits: [
                    '10 users included',
                    '2 GB of storage',
                    'Email support',
                    'Help center access'
                ],
                btnText: 'Sign up for free'
            },
            {
                id: 2,
                type: PRICE_TYPE_PRO,
                title: 'Pro',
                priceUSD: 15,
                benefits: [
                    '20 users included',
                    '10 GB of storage',
                    'Priority email support',
                    'Help center access'
                ],
                btnText: 'Get started'
            },
            {
                id: 3,
                type: PRICE_TYPE_ENTEPRISE,
                title: 'Enterprise',
                priceUSD: 29,
                benefits: [
                    '30 users included',
                    '15 GB of storage',
                    'Phone and email support',
                    'Help center access'
                ],
                btnText: 'Contact us'
            }
        ];

        return (
            <div className="card-deck mb-3 text-center">
                { priceItems.map(item =>
                    <PriceItem
                        item={item}
                        key={item.id}
                        onActivate={this.onActivate.bind(this)}
                        active={item.id === this.state.activeItem.id}
                    />
                ) }
            </div>
        );
    }
}