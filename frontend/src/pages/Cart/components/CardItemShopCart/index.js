/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import {
  Info,
  Minus,
  Plus,
  TrashSimple,
} from 'phosphor-react';
import { useState, useEffect } from 'react';
import {
  Container,
  WrapperImage,
  DeleteAndNutritional,
  PriceAndQTD,
  QuantityChange,
  Content,
} from './styles';

import { formatPrice } from '../../../../utils/formatPrice';
import ModalNutrition from './components/ModalNutrition';

export function CardItemShopCart({ product, onChangeQuantity, onRemoveItem }) {
  const [value, setValue] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleIsVisibleModal() {
    setIsVisible((prevState) => !prevState);
  }

  useEffect(() => setValue(product.quantity), [product.quantity]);

  return (
    <Container>
      <ModalNutrition
        isVisible={isVisible}
        nutritions={product.nutritions}
        onToggle={() => handleToggleIsVisibleModal}
      />
      <WrapperImage>
        <a href="#">
          <img
            src="https://www.varaka.com/wp-content/uploads/2020/07/resim-yok.png"
            alt="no"
          />
        </a>
      </WrapperImage>

      <Content>
        <div className="about__product">
          <DeleteAndNutritional>
            <button type="button" onClick={() => onRemoveItem(product.id)} id="trash">
              <TrashSimple size={24} weight="thin" />
            </button>

            <button type="button" id="nutritional" onClick={handleToggleIsVisibleModal}>
              <Info size={24} weight="thin" />
              Nutritional
            </button>
          </DeleteAndNutritional>
          <h2>{product.name}</h2>
          <span>{product.genus}</span>
        </div>

        <PriceAndQTD>
          <strong>{formatPrice(product.price)}</strong>
          <QuantityChange>
            <button
              type="button"
              onClick={() => onChangeQuantity(product.id, { type: 'minus' })}
            >
              <Minus size={24} weight="thin" />
            </button>
            <input
              type="number"
              min="0"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onBlur={() => onChangeQuantity(product.id, { type: 'edit', quantity: value })}
            />
            <button
              type="button"
              onClick={() => onChangeQuantity(product.id, { type: 'plus' })}
            >
              <Plus size={24} weight="thin" />
            </button>
          </QuantityChange>
        </PriceAndQTD>
      </Content>
    </Container>
  );
}

CardItemShopCart.propTypes = {
  product: PropTypes.shape().isRequired,
  onChangeQuantity: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};
