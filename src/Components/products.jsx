import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    render() {
        console.log("Products", this.props);
        return (
            <React.Fragment>
                {this.props.products.map((p) => (
                    <Product key={p.id} product={p} />
                ))}
            </React.Fragment>
        );
    }
}

export default Products;