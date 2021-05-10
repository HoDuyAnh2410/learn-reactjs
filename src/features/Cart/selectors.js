import { createSelector } from '@reduxjs/toolkit';

const cardItemsSelector = (state) => state.cart.cartItems;

//count number of product in cart
export const cartItemsCountSelector = createSelector(
  cardItemsSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

//calculate totle product in cart
export const cartTotalSelector = createSelector(
  cardItemsSelector,
  (cartItems) =>
    cartItems.reduce(
      (total, item) => total + item.product.salePrice * item.quantity,
      0
    )
);
