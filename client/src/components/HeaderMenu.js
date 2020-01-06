import React, { Component } from 'react'
import Cart from './Cart'
import PropTypes from 'prop-types';

export class HeaderMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-9">
                    <h1>Shopping Cart Application</h1>
                    <hr/>
                </div>
                <div className="col-md-3 pl-5 pt-3">
                    <button className="btn btn-dark">
                    <i className="fa fa-shopping-cart fa-2x" onClick={(e) => this.props.handleShowCart(e)}> Cart ( {this.props.cartItems.length} )</i>
                    </button>
                </div>
                {this.props.showCart ? 
                    <div className="dialog-styles">
                        <button className="dialog-close-button" onClick={(e) => this.props.handleShowCart(e)}>x</button>
                        <Cart showCart={this.props.showCart} cartItems={this.props.cartItems} handleRemoveFromCart={this.props.handleRemoveFromCart}/> 
                    </div> : null}
            </React.Fragment>
        )
    }
}

HeaderMenu.propTypes = {
    showCart: PropTypes.bool.isRequired,
    cartItems: PropTypes.array.isRequired,
    handleShowCart: PropTypes.func.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default HeaderMenu
