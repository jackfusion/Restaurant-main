import React, { Component } from 'react';
import Product from './product';
import axios from 'axios';

class Products extends Component {
    state = {
        products: [],
    };
    componentDidMount() {
        axios
            .get('https://fast-chamber-72182.herokuapp.com/products')
            .then((res) => {
                this.setState({ products: res.data });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <React.Fragment>
                {this.state.products.map((p) => (
                    <Product key={p.id} product={p} />
                ))}
            </React.Fragment>
        );
    }
}

export default Products;