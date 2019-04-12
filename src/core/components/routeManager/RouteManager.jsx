import React, { Component } from 'react';
import { Switch, Redirect } from "react-router-dom";

import { _routes } from "./../../providers/routes/routes";
const HOME_ROUTE_INDEX = 0;

export class RouteManager extends Component {

    render() {
        return <div>
            <Switch>
                {/* Load all routes as Route component */}
                {_routes.getMapedRoutes()}

                {/*To define default route*/}
                <Redirect from='*' to={_routes.getRouteByIndex(HOME_ROUTE_INDEX).route} />
            </Switch>
        </div>;
    }
}
