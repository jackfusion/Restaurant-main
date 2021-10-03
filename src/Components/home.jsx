import React from 'react';
import Products from './products';

class home extends React.Component {

    return() {
            return (
                <React.Fragment>
                    <div className="header text-center">
                        <h2>Welcome to the Restaurant!</h2>
                        <h3>What is your choice.</h3>
                    </div>
                    <Products />
                </React.Fragment>
            );
        }
}

export default home;
