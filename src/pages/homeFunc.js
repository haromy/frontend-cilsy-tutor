import React, { useState, useEffect } from 'react';
import {
  Container,
  Spinner,
  Row,
} from 'react-bootstrap';
import axios from 'axios';

import CardBooks from '../components/book';

function Home(props) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function callApi() {
      setLoading(true);
      axios({
        method: 'GET',
        url: '/books'
      }).then((res) => setBooks(res.data.data)).finally(() => setLoading(false))
    };
    callApi();
  }, []);
  
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

export default Home;