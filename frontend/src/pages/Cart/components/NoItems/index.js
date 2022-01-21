import { Link } from 'react-router-dom';

import { ArrowLeft } from 'phosphor-react';

import { Container } from './styles';

export default function NoItems() {
  return (
    <Container>
      <h1>Your Shopping Cart Is Empty</h1>
      <Link to="/">
        <ArrowLeft size={24} />
        Buy some fruit
      </Link>
    </Container>
  );
}
