import React, { Component } from 'react';

const Product = props => {
    return (
        <React.Fragment>
            <div className="card space shadow-sm">
                <div className="card-body">
                    <h4 className="card-title">{ props.name}</h4>
                    <img src="{props.imagePath}" alt="{ props.name }" className="img-responsive float-end card-img" />
                    <div className="card-text">
                        <p>{props.description}</p>
                        <p>$ {props.price}</p>
                        <span>{props.imageDescription}</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Product;
