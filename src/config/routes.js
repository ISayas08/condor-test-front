import { MarketPlaceMain } from "../modules/marketplace/components/marketPlaceMain/marketPlaceMain";
import { HomePage } from "../modules/marketplace/pages/home/home_page";
import { ProductDetail } from "../modules/marketplace/pages/productDetail/product_detail_page";

export const module_routes = [
  { title: "Marketplace", route: `/market-place`, component: MarketPlaceMain }
];

export const marketPlace_routes = [
  {
    title: "Home",
    route: `${module_routes[0].route}/home`,
    component: HomePage
  },
  {
    title: "Cart",
    route: `${module_routes[0].route}/cart`,
    component: null
  },
  {
    title: "",
    route: `${module_routes[0].route}/product/:id`,
    component: ProductDetail
  }
];
