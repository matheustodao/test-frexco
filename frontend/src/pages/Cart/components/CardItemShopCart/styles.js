import styled from 'styled-components';

export const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 674px;
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgrounds.light};
  box-shadow: ${({ theme }) => theme.boxShadow[300]};

  & + & {
    margin-top: 1.2rem;
  }

  @media screen and (max-width: 1140px) {
    width: 100%;
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
    width: 260px;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    width: 220px;
  }

`;

export const WrapperImage = styled.div`
  max-width: 255px;
  max-height: 205px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 602px) {
    max-width: 170px;
    min-height: 205px;
    display: flex;
    align-items: center;
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 205px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px 12px;

  .about__product {
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: 100%;
    h2 {
      color: ${({ theme }) => theme.colors.primary.dark};
      font-weight: 500;
      font-size: 24px;

      @media screen and (max-width: 1000px) {
        margin-top: 1.6rem;
      }
    }

    span {
      color: ${({ theme }) => theme.colors.info.dark};
      font-weight: 500;
      font-size: 12px;
    }
  }
`;

export const DeleteAndNutritional = styled.div`
  display: flex;
  align-self: flex-end;
  height: 36px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: ${({ theme }) => theme.colors.info.dark};
    border: none;
    background: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 400;

    + button {
      margin-left: 8px;

      @media screen and (max-width: 420px) {
        margin-right: 8px;
        margin-left: 0;
      }
    }

    &#trash {
      padding: 6px;
    }

    &#nutritional {
      padding: .8rem 1.2rem;
      background: #DCEDBA;

      svg {
        margin-right: 1rem;
      }
    }

  }

  @media screen and (max-width: 500px) {
    align-self: flex-start;
    margin-bottom: 18px;
  }

  @media screen and (max-width: 420px) {
    flex-direction: row-reverse;
  }

`;

export const PriceAndQTD = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  strong {
    font-weight: 500;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

`;
export const QuantityChange = styled.div`
  display: flex;
  align-items: center;

  button, input {
    border: none;
    background: none;
  }

  input {
    width: 60px;
    height: 32px;
    text-align: center;
    appearance: none
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    background: #F3F3F3;
    padding: 6px;
  }

`;
