import React from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';

function Header() {
  return(
    <Navbar bg='light'>
      <Navbar.Brand>Books Store</Navbar.Brand>
      <Nav>
        <Link to='/' className='mr-5'>Home</Link>
        <Link to='/add' className='mr-5'>Tambah Buku</Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
