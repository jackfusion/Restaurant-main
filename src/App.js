import './App.css';
import Product from './Components/products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
// function App() {
//   return
//       <Product></Product>
// }
// eslint-disable-next-line no-undef
class App extends Component {
  render() {
    
    return (
      state = {
        procducts: [],
      };
      
    componentDidMount() {
      axios.get('http://localhost:3001/products')
        .then(res, err) => {
        this.setState({ products: res.data})
      });
      }
      <React.Fragment>
        <Product products={this.state.products} />
      </React.Fragment>
    );
  }
}

export default App;
