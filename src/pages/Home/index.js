import {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Check, Funnel, X } from 'phosphor-react';

import FruitsService from '../../services/FruitsService';

import {
  Container,
  ListProducts,
  MainHeader,
  OrderProducts,
  OrderBy,
} from './styles';

import CardItem from '../../components/CardItem';
import { shopCartContext } from '../../contexts/ShopCartContext';
import Loader from '../../components/Loader';

export default function Home() {
  const [fruits, setFruits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checkOne, setCheckOne] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);
  const { onAddToCart, isAdded } = useContext(shopCartContext);

  const loadFruits = useCallback(async () => {
    try {
      setIsLoading(true);
      const allFruits = await FruitsService.listAllFruits();
      // Put a price in the fruits
      const randomPrice = () => (Math.random() * (100 - 10) + 10).toFixed(2);
      const fruitsWithPrice = allFruits.map((fruit) => ({ ...fruit, price: randomPrice() }));
      setFruits(fruitsWithPrice);
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  }, [setFruits]);

  useEffect(() => {
    loadFruits();
  }, [loadFruits]);

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <MainHeader>
        <h1>All Fruits</h1>
        <OrderProducts>
          <OrderBy
            isChecked={checkOne}
            type="button"
            onClick={() => setCheckOne((prevState) => !prevState)}
          >
            <span>Bromeliaceae</span>
            {checkOne ? <Check size={24} weight="thin" /> : <X size={24} weight="thin" />}
          </OrderBy>

          <OrderBy
            isChecked={checkTwo}
            type="button"
            onClick={() => setCheckTwo((prevState) => !prevState)}
          >
            <span>Citrus</span>
            {checkTwo ? <Check size={24} weight="thin" /> : <X size={24} weight="thin" />}
          </OrderBy>

          <div className="wrapper__icon">
            <Funnel size={24} weight="thin" />
          </div>
        </OrderProducts>
      </MainHeader>

      <ListProducts>
        <CardItem products={fruits} isAdded={isAdded} onAddToCart={onAddToCart} />
      </ListProducts>
    </Container>
  );
}
