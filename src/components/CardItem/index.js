/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Container,
  WrapperImage,
  Content,
  Info,
  PriceAndAddToCart,
} from './styles';

import addShopCart from '../../assets/images/icons/add-shop-cart.svg';
import { formatPrice } from '../../utils/formatPrice';

export default function CardItem({ products, onAddToCart, isAdded }) {
  return (
    products.map((product) => (
      <Container key={product.id}>
        <WrapperImage>
          <a href="#">
            <img
              src="https://www.varaka.com/wp-content/uploads/2020/07/resim-yok.png"
              alt="no"
            />
          </a>
        </WrapperImage>
        <div className="margin__bottom__custom" />

        <Content>

          <a href="#">
            <Info>
              <h2>{product.name}</h2>
              <span>{product.genus}</span>
            </Info>
          </a>

          <PriceAndAddToCart added={isAdded(product.id)}>
            <a href="#">
              <span>{formatPrice(product.price)}</span>
            </a>
            <button
              type="button"
              onClick={() => onAddToCart(product)}
            >
              <img src={addShopCart} alt="Add to cart" width={24} height={24} />
            </button>
          </PriceAndAddToCart>
        </Content>
      </Container>
    ))
  );
}
