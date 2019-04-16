import { CART } from "./../../../shared/const/actions_consts";
import { pick } from "../../../shared/utils/objets";

export const shoppingCart = (shoppingCart = { products: [] }, action) => {
  switch (action.type) {
    case CART.ADD_PRODUCT:
      const newProductArray = [...shoppingCart.products];

      let productExist = false;

      newProductArray.forEach(p => {
        if (p.id === action.payload.id) {
          p.quantity += 1;
          productExist = true;
        }
      });

      if (!productExist) {
        newProductArray.push(
          Object.assign(
            {},
            pick(action.payload, "id", "imgURL", "name", "price"),
            { quantity: 1 }
          )
        );
      }

      const newState = Object.assign({}, shoppingCart, {
        products: newProductArray
      });

      localStorage.setItem("cart", JSON.stringify(newState));

      return newState;

    case CART.REMOVE_PRODUCT:
      const newState2 = Object.assign({}, shoppingCart, {
        products: shoppingCart.products.filter(
          p => p.id !== action.payload.productId
        )
      });

      localStorage.setItem("cart", JSON.stringify(newState2));
      return newState2;

    case CART.UPDATE_CART:
      return Object.assign({}, shoppingCart, action.payload);

    default:
      return shoppingCart;
  }
};
