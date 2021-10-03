import React from 'react'
import { useParams } from 'react-router';


    const productpage = ({ match }) => {
        const {
            params: { id },
        } = match;
        //const Product = props;
    
            return (
                <React.Fragment>
                    <h2>{id} {props.product.name}</h2>
                </React.Fragment>
            );
    };

    export default productpage;
