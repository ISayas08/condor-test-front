import { _http } from "./../http/http";
import { GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from "../../../config/config";

let instance;

class ProductService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  getAll() {
    return _http.get(GET_ALL_PRODUCTS);
  }

  getOne(productId) {
    return _http.get(GET_PRODUCT_DETAIL, [productId]);
  }
}

export const _product = new ProductService();
