import React from 'react'
import Products from '../../server/products';

    const productpage = props => {
            return (
                <React.Fragment>
                   <div className="container" >
                    <div className="card space shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">{ Products.name}</h4>
                            <img src={props.imagePath} alt={ props.name } className="img-responsive float-end card-img" />
                            <div className="card-text">
                                <p>{props.description}</p>
                                <p>$ {props.price}</p>
                                <span dangerouslySetInnerHTML={{__html: props.imageDescription }}></span>
                            </div>
                        </div>
                    </div>
                </div>
                </React.Fragment>
            );
    };

    export default productpage;
