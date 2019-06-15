import React, { Component } from 'react';

import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Auxx/Auxx';
class OrderSummary extends Component {
    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with following ingredients:</p>
                <p>
                    <strong>Current Price: ₹ {this.props.price.toFixed(0)}</strong>
                </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Continue to checkout?</p>
                <Button btnType="Danger"
                    clicked={this.props.purchaseCanceled}
                >Cancel</Button>
                <Button btnType="Success"
                    clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
}

export default OrderSummary;