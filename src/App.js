import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div classname="container">
            <Navbar href="/">Ristorante Con Fusion</Navbar>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
