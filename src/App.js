import React, { Component } from 'react';

import Navbar from "./components/Navbar";
import User from "./components/User";


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="Mesut" />

        <User salary="5000" department="Bilişim" />
        <User name="Mert Sarıtaş" salary="5000" department="Bilişim" />
      </div>
    );

  }
}

export default App;
