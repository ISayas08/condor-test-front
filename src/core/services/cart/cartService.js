import { _http } from "./../http/http";
import {
  CREATE_CART,
  GET_CART_DETAIL,
  UPDATE_CART
} from "../../../config/config";

let instance;

class CartService {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  getOne(cartId) {
    return _http.get(GET_CART_DETAIL, [cartId]);
  }

  createOne() {
    return _http.post(CREATE_CART, {});
  }

  addProductToCart(cartId, productId, quantity) {
    return _http.put(UPDATE_CART, { productId: productId, quantity: quantity }, [cartId]);
  }
}

export const _cart = new CartService();
