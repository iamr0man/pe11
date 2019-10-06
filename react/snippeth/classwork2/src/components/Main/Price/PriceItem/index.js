import React, {Component} from 'react';
import Benefits from './Benefits';
// import Button from '../../../common/Button';
import './PriceItem.css';

export default class PriceItem extends Component {

    constructor(props){
        super(props);
        this.onClickItem = this.onClickItem.bind(this)
    }

    onClickItem(){
        this.props.onActivate(this.props.item);
    }

    render() {
        const {
            title,
            priceUSD: price,
            benefits = [],
            btnText
        } = this.props.item;

        return (
            <div className={ this.props.active ? "card mb-4 shadow-lg": "card mb-4 shadow-sm"}>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">
                        {title}
                    </h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                        {price}
                        <small className="text-muted">/ mo
                        </small>
                    </h1>
                    <Benefits items={benefits}/>
                    <button type="button" className={ this.props.active ? "btn btn-lg btn-block btn-primary" : "btn btn-lg btn-block btn-outline-primary"} onClick={this.onClickItem}>{btnText}</button>
                    {/*<Button text={btnText} onClick={this.onClickItem}/>*/}
                    {/*<Button text={btnText} onClick={() => this.onClickItem()}/>*/}
                    {/*<Button text={btnText} onClick={this
                .onClickItem.bind(this)}/>*/}
                </div>
            </div>
        );
    }
}