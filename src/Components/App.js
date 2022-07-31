import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import Home from "./Home";
import Maintainance from './Maintainance';
import About from './About';
import {Route, Switch } from 'react-router-dom';
import Footer from './Footer';

function App() {
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/maintainance">
          <Maintainance/>
        </Route>
      </Switch >
      

      <Footer />
    </div>
  );
}

export default App;
