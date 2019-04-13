import React from "react";

import { RouteManager } from "./../../../../core/components/routeManager/RouteManager";
import { marketPlace_routes } from "./../../../../config/routes";

export const MarketPlaceMain = () => {
  return (
    <div>
      Main work. Child route:
      <RouteManager routes={marketPlace_routes} />
    </div>
  );
};
