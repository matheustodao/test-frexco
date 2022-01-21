import styled from 'styled-components';

export const Container = styled.article`
  max-width: 18rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow[700]};
  background: ${({ theme }) => theme.colors.backgrounds.light};
  .margin__bottom__custom {
    align-self: center;
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background: ${({ theme }) => theme.colors.grey.light};
    width: 90%;
  }
  a {
    text-decoration: none;
  }

  transition: all 350ms ease;
  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 432px) {
    flex-direction: row;
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: 432px) {
    .margin__bottom__custom {
      display: none;
    }
  }
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  border-radius: 0 4px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0 4px;
    object-fit: cover;
  }

  @media screen and (max-width: 432px) {
    width: 160px;
    min-height: 87px;
  }

  @media screen and (max-width: 360px) {
    width: 160px;
    height: 160px;
  }
`;

export const Content = styled.div`
  padding: 1.6rem 1.2rem;
  @media screen and (max-width: 432px) {
    width: 56%;
    padding: 1.6rem 1.2rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.colors.secondary.dark};
    font-size: 1.8rem;
    font-weight: 500;
  }

  span {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey.light};

  }
  margin-bottom: 14px;
`;

export const PriceAndAddToCart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.grey.dark};
    font-weight: 400;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 6px;
    background: ${({ theme, added }) => (added ? theme.colors.grey.light : '#273805')};
    color: #fff;
    border-radius: 4px;
    img {
      cursor: pointer;
    }

    transition: background 340ms ease-in-out;
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      font-size: 1.4rem;
    }

    button {
      width: 100%;
      margin-top: 1.6rem;

    }
  }

`;
