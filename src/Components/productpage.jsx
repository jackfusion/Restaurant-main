import React from 'react'
import axios from 'axios';


class productpage extends React.Component {
    state = { product: [], };
    server = "http://localhost:3001/products"
    componentDidMount = () => {
        const id = this.props.match.params.id;
        axios
            .get(this.server + "/" + id)
            .then((res, err) => {
                const product = res.data;
                this.setState({ product });
            });
    };
    render() {
        return (
            <React.Fragment>
                <div className="card space shadow-sm">
                    <div className="card-body">
                        <h4 className="card-title">{this.state.product.name}</h4>
                        <img src={this.state.product.imagePath} alt={this.state.product.name} className="img-responsive float-end card-img" />
                        <div className="card-text">
                        <p>{this.state.product.description}</p>
                        <p>$ {this.state.product.price}</p>
                        <p dangerouslySetInnerHTML={{__html: this.state.product.imageDescription }}></p>
                            <button
                            className="btn btn-primary snipcart-add-item"
                            data-item-id={this.state.product.id}
                            data-item-name={this.state.product.name}
                            data-item-description={this.state.product.description}
                            data-item-price={this.state.product.price}
                            data-item-image={this.state.product.imagePath}
                            data-item-custom1-name="Sies"
                                data-item-custom1-options="Small|Medium[+3]|Large[+5]">Add to Cart</button>
                            <p></p>
                        <p>To select your sizes please add to cart</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}

    export default productpage;