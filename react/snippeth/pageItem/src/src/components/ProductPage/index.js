import React, { Component } from 'react'

import ProductDetails from '../ProductDetails'
import ProductReviews from '../ProductReviews'

export default class ProductPage extends Component {
    render(){
        return (
            <div>
                <ProductDetails />
                <ProductReviews />
            </div>
        )
    }
}