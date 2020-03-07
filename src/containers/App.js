import {connect} from 'react-redux';
import {setBooks} from '../actions/books';
import {setFilter} from '../actions/filter';
import App from "../components/App";
import orderBy from 'lodash/orderBy';

const sortBy = (books, filterBy) => {
  switch (filterBy) {

    case 'all':
    return books;
    break;
    case 'price_high':
    return orderBy(books, 'price', 'desc');
    break;
    case 'price_low':
    return orderBy(books, 'price', 'asc');
    break;
    case 'author':
    return orderBy(books, 'author', 'asc');
    break;
    default:
      return books
  }
};
const filterBooks = (books, searchQuery) =>
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );
const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy)
};

const mapStateToProps = ({books}) => ({
  books: books.items && searchBooks(books.items, books.filterBy, books.searchQuery),
  isReady: books.isReady
});

export default connect(mapStateToProps, {setBooks, setFilter})(App);
