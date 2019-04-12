import React from 'react';
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { HomePage } from '../../../modules/marketplace/pages/home/home_page';
import { ProductDetail } from '../../../modules/marketplace/pages/productDetail/product_detail_page';


let instance;

class Routes {

    constructor() {
        if (!instance) {
            instance = this
        }

        this.BASIC_ROUTE = '/market-place';
        this.routes = [
            { title: 'Home', route: `${this.BASIC_ROUTE}/home`, component: HomePage },
            { title: '', route: `${this.BASIC_ROUTE}/product/:id`, component: ProductDetail },
            { title: 'Cart', route: `${this.BASIC_ROUTE}/cart`, component: null }
        ];

        return instance;
    }

    //====================================================================
    //  Getters
    //====================================================================

    getBasicRoute() {
        return this.BASIC_ROUTE;
    }

    getRouteByIndex(index) {
        return this.routes[index] ? this.routes[index] : this.routes[0];
    }

    getRoutes() {
        return this.routes;
    }

    getMapedRoutesAsLinks() {
        return this.routes.map((route, i) => <NavLink className='mItem' activeClassName='active' key={i} to={route.route}>
            {route.title}
        </NavLink>);
    }

    getMapedRoutes() {
        return this.routes.map((route, i) => <Route key={i} path={route.route} component={route.component} />);
    }

}

export const _routes = new Routes();