import React from 'react';
import {
  Col
} from 'react-bootstrap';

function CardBooks(props) {
  const {
    book
  } = props;
  return(
    <Col md={6} lg={4}>
      <div className='card-buku'>
        <h4>Judul: {book.judul}</h4>
        <h4>Rp. {book.harga}</h4>
        <h4>author: {book.author}</h4>
        <div>{book.deskripsi}</div>
      </div>
    </Col>
  );
}

export default CardBooks;