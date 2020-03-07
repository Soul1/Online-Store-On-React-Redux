import React from 'react';
import {connect} from 'react-redux';
import {setBooks} from './actions/books';
import {Container} from 'semantic-ui-react'
import axios from "axios";
import Menu from './components/Menu'
import Book from './components/BookCard'
import {Card } from 'semantic-ui-react'

class App extends React.Component {
  componentWillMount() {
    const {setBooks} = this.props;
    axios.get('/books.json').then(({data}) => {
      setBooks(data)
    })
  }

  render() {
    const {books, isReady} = this.props;
    return (
      <Container>
        <Menu/>
        <Card.Group itemsPerRow={4}>
          {!isReady ? 'Loading...'
            : books.map((book, i) => book.map(b =>
            <li><Book key={i} {...b}/></li>))
          }
          </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = ({books}) => ({
  books: books.items,
  isReady: books.isReady
});

// const mapDispatchToProps = dispatch => ({
//   setBooks: books => dispatch(setBooks(books))
// });

export default connect(mapStateToProps, {setBooks})(App);
