import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import Contact from './component/contact/contact'
import Navbar from './component/navbar/navbar'
import Master from './component/master'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route path="/home" component={Master} exact></Route>
        <Route path="/contact" component={Contact}></Route>
      </BrowserRouter>
    );
  }
}

export default App;

