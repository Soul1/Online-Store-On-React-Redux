const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK_TO_CART':
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };
      break;
    case 'REMOVE_BOOK_FROM_CART':
      return {
        ...state,
        items: state.items.filter(o => o.id != action.payload)
      };
      break;
    default:
      return state
  }
}