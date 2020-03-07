const initialState = {
  filterBy: 'all',
  searchQuery: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filterBy: action.payload
      };
      break;
    case 'SET_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };
      break;
    default:
      return state
  }
}