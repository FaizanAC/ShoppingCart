import React, { Component } from 'react';
import Util from '../Util';
import PropTypes from 'prop-types';

export class Products extends Component {
    render() {

        //const displayDesc = this.props.showDesc ? {display: 'none'} : {};
        const productItems = this.props.products.map(product => (
            <div className="col-md-4 pb-5" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={"javscript:;"}>
                        <img src={`/products/${product.unique}.jpg`} alt={product.name} />    
                        <p>
                            {product.name}
                        </p>
                    </a>
                    <div className="pb-3">
                        <b>{Util.formatCurrency(product.price)}</b>
                        <button className="btn btn-default"
                        onClick={(e) => this.props.handleAddToCart(e, product)}>Add to Cart</button>
                    </div>
                    <div>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        ))
        return (
            <div className="row">
                {productItems}
            </div>   
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Products
