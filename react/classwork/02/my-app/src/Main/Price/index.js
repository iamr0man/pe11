import React, {Component} from 'react';
import {
    PRICE_TYPE_FREE,
    PRICE_TYPE_PRO,
    PRICE_TYPE_ENTERPRISE
} from '../../consts/'
import Item from './Item'

export default class Price extends Component {
    render() {
        const priceItems = [{
            id: 1,
            type: PRICE_TYPE_FREE,
            title: 'Free',
            price: 0,
            benefits: ['10 users included',
                '2 GB of storage',
                'Email support',
                'Help center access'
            ],
            btnText: 'Sign Up For Free'
        },{
            id: 2,
            type: PRICE_TYPE_PRO,
            title: 'Pro',
            price: 29,
            benefits: ['20 users included',
                '10 GB of storage',
                'Priority email support',
                'Help center access'
            ],
            btnText: 'Get Started'
        },{
            id: 3,
            type: PRICE_TYPE_ENTERPRISE,
            title: 'Enterprise',
            price: 59,
            benefits: ['30 users included',
                '15 GB of storage',
                'Phone and email support',
                'Help center access'
            ],
            btnText: 'Contact Us'
        },]
        return ( 
        <div className = "card-deck mb-3 text-center" >
            { priceItems.map(e => <Item key={e.id} item={e}/>)}
        </div>
        );
    }
}