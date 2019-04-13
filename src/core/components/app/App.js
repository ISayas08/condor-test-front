import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { RouteManager } from "./../routeManager/RouteManager";
import './App.scss';

import { module_routes } from "./../../../config/routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RouteManager routes={module_routes} />
      </BrowserRouter>
    );
  }
}

export default App;
