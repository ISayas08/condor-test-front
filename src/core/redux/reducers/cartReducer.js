import { CART } from "./../../../shared/const/actions_consts";

export const shoppingCart = (shoppingCart = { id: "", products: {} }, action) => {
    switch (action.type) {
        case CART.SET_CART:
            return Object.assign({}, shoppingCart, { id: action.payload.cartId });
        case CART.UPDATE_CART:
            return Object.assign({}, shoppingCart, { id: action.payload._id, products: action.payload.doc.products });
        default:
            return shoppingCart;
    }
}