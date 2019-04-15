import React from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

let instance;

class Routes {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  //====================================================================
  //  Getters
  //====================================================================

  getMapedRoutesAsLinks(routes, routeClass = "mlink", activeClass = "active") {
    return routes.map((route, i) => (
      <NavLink
        className={routeClass}
        activeClassName={activeClass}
        key={i}
        to={route.route}
      >
        {route.title}
      </NavLink>
    ));
  }

  getMapedRoutes(routes) {
    return routes.map((route, i) => (
      <Route key={i} path={route.route} component={route.component} />
    ));
  }

  getRouteByIndex(routes, index) {
    return routes[index] ? routes[index] : routes[0];
  }
}

export const _routes = new Routes();
