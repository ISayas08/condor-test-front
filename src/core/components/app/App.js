import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { RouteManager } from "./../routeManager/RouteManager";
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RouteManager />
      </BrowserRouter>
    );
  }
}

export default App;
