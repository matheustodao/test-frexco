import { useContext } from 'react';

import { shopCartContext } from '../../contexts/ShopCartContext';
import { CardItemShopCart } from './components/CardItemShopCart';

import Bill from './components/Bill';
import NoItems from './components/NoItems';
import { Container, ListProducts, CartHeader } from './styles';

export default function Cart() {
  const {
    cartItens,
    onEditQuantity,
    onRemoveToCart,
    subTotalItens,
    subTotalValue,
    cleanTheCart,
  } = useContext(shopCartContext);

  if (cartItens.length <= 0) {
    return <NoItems />;
  }

  return (
    <Container>
      <CartHeader>
        <div>
          <h1>Shopping Cart</h1>
          <button type="button" onClick={cleanTheCart}>Clean The Cart</button>
        </div>

        <a href="#bill">Checkout The Bill</a>
      </CartHeader>

      <ListProducts>
        {cartItens.length > 0
          ? cartItens.map((item) => (
            <CardItemShopCart
              key={item.id}
              product={item}
              onChangeQuantity={onEditQuantity}
              onRemoveItem={onRemoveToCart}
            />
          ))
          : <h3>No itens</h3>}
      </ListProducts>

      {cartItens.length > 0 && (
        <Bill
          products={cartItens}
          quantity={subTotalItens}
          subtotal={subTotalValue}
        />
      )}
    </Container>
  );
}
