const initialState = {
  isReady: false,
  items: null,
  filterBy: 'all',
  searchQuery: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state,
        items: action.payload,
        isReady: true
      };
      break;
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
    case 'SET_IS_READY':
      return {
        ...state,
        isReady: action.payload
      };
      break;
    default:
      return state
  }
}