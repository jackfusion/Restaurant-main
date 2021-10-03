import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import axios from "axios";
import Header from "./Components/header";
import Home from "./Components/home";
import Cart from "./Components/cart";
import Login from "./Components/login";
import Register from "./Components/register";
import Products from "./Components/products";


class App extends Component {
  render(){
    
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/products' component={Products} />
              <Route path='/cart' component={Cart} />
              <Route path='/login' component={Login} />
              <Route path='/Register' component={Register} />
            </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
