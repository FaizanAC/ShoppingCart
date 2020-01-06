import React, { Component } from 'react'
import Util from '../Util';
import PropTypes from 'prop-types';

export class Cart extends Component {
    render() {
        const  { cartItems } = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length === 0 ? "Your Cart is empty" : <div> You have {cartItems.length} products in your cart </div>}
                {cartItems.length > 0 && 
                    <div>
                        <ul className="cart-items">
                            {cartItems.map(item =>  
                                <li className="m-3 cart-list" key={item.id}>
                                    <img src={`/products/${item.unique}.jpg`} alt={item.name} />
                                    <b>  -  {item.name} </b>
                                    x {item.count} = {item.price * item.count}
                                    <button className="btn btn-danger ml-3"
                                    onClick = {(e) => this.props.handleRemoveFromCart(e, item)}>
                                    X    
                                    </button>
                                </li>
                                )}
                        </ul>
                        <b>
                            Total: {Util.formatCurrency(cartItems.reduce((a, c) => a + c.price * c.count, 0))}
                            <button className="btn btn-primary m-3" onClick={() => alert("Checkout still needs to be added")}>Checkout</button>
                        </b>
                    </div>
                }
            </div>
        )
    }
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart
