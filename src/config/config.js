/** NOTE:
 * This production validation is unnecessary due to the scope of the project.
 * It is only to maintain the good practice of separating environmental settings
 */
// Back base URL.
export const BACK_URL =
  process.env.NODE_ENV === "production"
    ? "https://us-central1-condor-labs-test.cloudfunctions.net/api"
    : "https://us-central1-condor-labs-test.cloudfunctions.net/api";

// ===============================================================
//   User service
// ===============================================================
export const USER_SERVICE = `${BACK_URL}/users`;

// User service endpoints
export const CREATE_USER_ENDPOINT = `${USER_SERVICE}/`;
export const UPDATE_USER_ENDPOINT = `${USER_SERVICE}/{PARAM}`;

// ===============================================================
//   Cart service
// ===============================================================
export const CART_SERVICE = `${BACK_URL}/shoppingCart`;

// Car service endpoints
export const GET_CART_DETAIL = `${CART_SERVICE}/{PARAM}`;
export const CREATE_CART = `${CART_SERVICE}/`;
export const UPDATE_CART = `${CART_SERVICE}/{PARAM}`;

// ===============================================================
//   Products service
// ===============================================================
export const PRODUCT_SERVICE = `${BACK_URL}/products`;

// Products service endpoints
export const GET_PRODUCT_DETAIL = `${PRODUCT_SERVICE}/{PARAM}`;
export const GET_ALL_PRODUCTS = `${PRODUCT_SERVICE}/`;
