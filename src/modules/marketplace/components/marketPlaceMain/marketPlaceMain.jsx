import React from "react";

import { RouteManager } from "./../../../../core/components/routeManager/RouteManager";
import { marketPlace_routes } from "./../../../../config/routes";
import { HeaderComponent } from "../../../../shared/components/header/header_component";
import { FooterComponent } from "../../../../shared/components/footer/footer_component";

export const MarketPlaceMain = () => {
  return (
    <div className="marketplace">
      <header className="marketplace__header">
        <HeaderComponent />
      </header>
      <section className="marketplace__page-box">
        <RouteManager routes={marketPlace_routes} />
      </section>
      <footer className="marketplace__footer">
        <FooterComponent />
      </footer>
    </div>
  );
};
