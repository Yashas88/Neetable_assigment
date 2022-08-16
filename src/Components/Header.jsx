import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='https://neetable.com/'>
            <img
              alt=''
              src='https://neetable.com/img/neetablelogo.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />
            {'    '}
            Neetable
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
