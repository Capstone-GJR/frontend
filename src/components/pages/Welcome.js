import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from '../buttons/Button';

function Home() {
  return (
    <Container>
      <Button title="LOGIN" />
      <Button title="NEW ACCOUNT?" />
    </Container>
  )
}

export default Home;