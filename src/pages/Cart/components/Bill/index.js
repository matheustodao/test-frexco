/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import {
  Container,
  BillHeader,
  ListItems,
  Item,
  Total,
} from './styles';

import { formatPrice } from '../../../../utils/formatPrice';

export default function Bill({ products, quantity, subtotal }) {
  return (
    <Container id="bill">
      <BillHeader>
        <strong>The Bill</strong>
      </BillHeader>

      <ListItems>
        <thead>
          <Item>
            <th>Name</th>
            <th>QTD.</th>
            <th>Subtotal</th>
          </Item>
        </thead>

        <tbody>
          {products.map((item) => (
            <Item key={item.id}>
              <td>
                <strong>{item.name}</strong>
              </td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.price * item.quantity)}</td>
            </Item>
          ))}
        </tbody>
      </ListItems>

      <Total>
        <span>
          Subtotal ({quantity} itens): {subtotal}
        </span>
        <a href="#">Proceed to checkout</a>
      </Total>
    </Container>
  );
}

Bill.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape).isRequired,
  quantity: PropTypes.number.isRequired,
  subtotal: PropTypes.string.isRequired,
};
