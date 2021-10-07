import React from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import Product from './product';


class productpage extends React.Component {
    state = { products: [], };
    server = "http://localhost:3001/products"
    handleBlur = (id) => {

            axios.get(this.server + id)
                .then((res, err) => {
                    const products = res.data;
                    this.setState({ products });
                });
    };
    render() {
        return (
            <React.Fragment>
                
                {this.state.products.map(e => this.handleBlur(e.name))}
            </React.Fragment>
        );
    };
}

    export default productpage;
// const ProductPage = ({ match }) => {
//     const {
//         params: { id },
//         params: { name },
//     } = match;

//     return (
//         <React.Fragment>
//             Products detail: {id} {match.name}
//         </React.Fragment>)
// }

// export default ProductPage;