import React from 'react';
import {Card, Container} from 'semantic-ui-react'
import axios from "axios";
import Book from '../containers/BookCard'
import Filter from '../containers/Filter'
import Menu from '../containers/Menu'

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
        <Menu />
        <Filter/>
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Loading...'
            : books.map((book, i) =>
              <Book key={i} {...book}/>)}
        </Card.Group>
      </Container>
    )
  }
}

export default App;
