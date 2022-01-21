import {
  useState,
  createContext,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../utils/formatPrice';

export const shopCartContext = createContext();

export function ShopCartContextProvider({ children }) {
  const [cartItens, setCartItens] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
      return [];
    }
  });

  const subTotalValue = cartItens?.reduce((acc, currentValue) => (
    acc + (currentValue.price * currentValue.quantity)
  ), 0).toFixed(2);

  const subTotalItens = cartItens?.reduce((acc, currentValue) => (
    acc + currentValue.quantity
  ), 0);

  const isAdded = useCallback((_id) => cartItens.find((item) => item.id === _id));

  const handleRemoveToCart = useCallback((_id) => {
    setCartItens((prevState) => (
      prevState.filter((item) => item.id !== _id)
    ));
  }, [setCartItens]);

  async function handleAddToCart(product) {
    const productAlreadyExists = cartItens.find((item) => item.id === product.id);
    if (productAlreadyExists) {
      return handleRemoveToCart(product.id);
    }

    setCartItens((prevState) => [...prevState, { ...product, quantity: 1 }]);
  }
  const handleChangeQuantity = useCallback((_id, { type, quantity }) => {
    switch (type) {
      case 'minus':
        setCartItens((prevState) => prevState.map((item) => {
          if (item.id === _id) {
            return { ...item, quantity: item.quantity - 1 };
          }

          return item;
        }));
        break;
      case 'plus':
        setCartItens((prevState) => prevState.map((item) => {
          if (item.id === _id) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        }));
        break;
      case 'edit':
        setCartItens((prevState) => prevState.map((item) => {
          if (item.id === _id) {
            return { ...item, quantity };
          }

          return item;
        }));
        break;
      default:
        break;
    }
  }, [setCartItens]);

  const hasQuantityInvalid = useCallback(() => cartItens.filter((item) => (
    item.quantity <= 0 && handleRemoveToCart(item.id)
  )), [cartItens, handleRemoveToCart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItens));
    hasQuantityInvalid();
  }, [hasQuantityInvalid]);

  const values = useMemo(() => (({
    subTotalItens,
    subTotalValue: formatPrice(subTotalValue),
    cartItens,
    onAddToCart: (product) => handleAddToCart(product),
    onRemoveToCart: (_id) => handleRemoveToCart(_id),
    cleanTheCart: () => setCartItens([]),
    onEditQuantity: (_id, { type, quantity }) => handleChangeQuantity(_id, { type, quantity }),
    isAdded: (_id) => isAdded(_id),
  })), [
    subTotalItens,
    subTotalValue,
    cartItens,
  ]);

  return (
    <shopCartContext.Provider
      value={values}
    >
      {children}
    </shopCartContext.Provider>
  );
}

ShopCartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
