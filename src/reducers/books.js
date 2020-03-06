const initialState = {
  books: [{
    id: 0,
    title: 'fdfdfd'
  }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        books: [
          ...state.books,
          action.payload]
      };
      break;
    case 'SET_BOOKS':
      return {books: action.payload};
      break;
    default:
      return state
  }
}