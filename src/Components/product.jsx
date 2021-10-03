import React from 'react';

const Product = props => {
    return (
        <React.Fragment>
            <div className="container" >
                <div className="card space shadow-sm">
                    <div className="card-body">
                        <h4 className="card-title">{ props.product.name}</h4>
                        <img src={props.product.imagePath} alt={ props.product.name } className="img-responsive float-end card-img" />
                        <div className="card-text">
                            <p>{props.product.description}</p>
                            <p>$ {props.product.price}</p>
                            <span dangerouslySetInnerHTML={{__html: props.product.imageDescription }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Product;
