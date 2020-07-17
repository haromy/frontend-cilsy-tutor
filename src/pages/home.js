import React, { Component } from 'react';
import {
  Container,
  Spinner,
  Row,
} from 'react-bootstrap';
import axios from 'axios';

import CardBooks from '../components/book';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: false,
    }
  }

  async componentDidMount() {
    try {
      this.setState({
        loading: true,
      })
      const getBooks = await axios({
        method: 'GET',
        url: '/books'
      });
      if(getBooks) {
        this.setState({
          books: getBooks.data.data,
          loading: false,
        })
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { loading, books } = this.state;
    console.log(books);
    return(
      <Container>
        {
          loading && <Spinner animation='border' />
        }
        <Row>
          {
            books && books.map((book, index) => <CardBooks key={index} book={book} />)
          }
        </Row>
      </Container>
    );
  }
}

export default Home;