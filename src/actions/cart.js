export const addToCart = obj => ({
  type: 'ADD_BOOK_TO_CART',
  payload: obj
});
export const removeFromCart = id => ({
  type: 'REMOVE_BOOK_FROM_CART',
  payload: id
});