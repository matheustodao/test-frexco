/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import { MagnifyingGlass, ShoppingCart, User } from 'phosphor-react';
import { Link } from 'react-router-dom';

import {
  Container,
  BoxSearch,
  Navigation,
  Route,
} from './styles';

import { shopCartContext } from '../../contexts/ShopCartContext';

export default function Header() {
  const { subTotalItens } = useContext(shopCartContext);

  return (
    <Container>
      <Link to="/" id="logo">Logo</Link>

      <BoxSearch>
        <MagnifyingGlass size={24} weight="thin" />
        <input type="search" placeholder="Search..." />
      </BoxSearch>

      <Navigation>
        <ul>
          <Route>
            <Link to="/cart">
              <ShoppingCart size={20} weight="thin" />
            </Link>
            {subTotalItens > 0 && (
              <div className="floatQtdCart">
                <span>
                  {subTotalItens > 99 ? '99+' : subTotalItens}
                </span>
              </div>
            )}
          </Route>
          <Route>
            <a href="#">
              <User size={20} weight="thin" />
            </a>
          </Route>
        </ul>
      </Navigation>
    </Container>
  );
}
