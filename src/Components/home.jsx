import React from 'react';
import Products from './products';

const home = () => {
    return (
        <React.Fragment>
        <div class="header text-center">
            <h2>Welcome to the Restaurant!</h2>
            <h3>What is your choice.</h3>
        </div>
            <Products products={this.state.products} />
        </React.Fragment>
    )
}

export default home
