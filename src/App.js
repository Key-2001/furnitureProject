import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Loading from "./pages/Loading";
import SingleProduct from "./components/SingleProduct";
import Cart from "./pages/Cart";
function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/products/:id'>
          <SingleProduct/>
        </Route>
        <Route  path='/products'>
          <Products/>
        </Route>
        <Route  path='/cart'>
          <Cart/>
        </Route>
        <Route path='*'>
          <Loading/>
        </Route>
      </Switch>
      <footer>
        <h5>
          2021 <span>comfySloth</span>
        </h5>
        <h5>
          ALL rights reserved
        </h5>
      </footer>
    </Router>
  );
}

export default App;