import React, { Component } from 'react'

export default class ProductReview extends Component {
    render(){
        return (
            <div className="card card-outline-secondary my-4">
                <div className="card-header">Product Reviews</div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                    <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                    <hr>
                </div>
            </div>
        )
    }
}