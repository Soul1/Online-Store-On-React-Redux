import React from 'react';
import {Card, Container} from 'semantic-ui-react'
import axios from "axios";
import Menu from './Menu'
import Book from './BookCard'
import Filter from '../containers/Filter'

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
