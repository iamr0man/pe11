import React, {Component} from 'react';
import BenefitItem from "./BenefitItem/index";

export default class Benefits extends Component {
    render() {
        const items = this.props.items || [];

        return (
            <ul className="list-unstyled mt-3 mb-4">
                {items.map((item, index) =>
                    <BenefitItem item={item}
                                 key={(new Date()).getTime() + index}/>
                )}
            </ul>

        );
    }

}

