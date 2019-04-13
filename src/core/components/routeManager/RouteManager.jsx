import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { _routes } from "./../../providers/routes/routes";

export const RouteManager = props => {
  const HOME_ROUTE_INDEX = 0;
  return (
    <div>
      <Switch>
        {/* Load all routes as Route component */}
        {_routes.getMapedRoutes(props.routes)}

        {/*To define default route*/}
        <Redirect
          from="*"
          to={_routes.getRouteByIndex(props.routes, HOME_ROUTE_INDEX).route}
        />
      </Switch>
    </div>
  );
};
