import React, { Component } from 'react';
import {
  Container
} from 'react-bootstrap';

class AddBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  render() {
    return(
      <Container>
        ini page add books
      </Container>
    );
  }
}

export default AddBooks;