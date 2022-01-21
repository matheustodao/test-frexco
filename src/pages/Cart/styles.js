import styled from 'styled-components';
import { fadeInAnimation } from '../../components/Animations/fadeIn';

export const Container = styled.main`
  display: grid;
  grid-template-areas: "header bill" "list bill";
  grid-template-columns: 676px 1fr;
  grid-template-rows: 5rem 1fr;
  column-gap: 24px;
  row-gap: 36px;
  width: 100%;
  padding: 0 24px;
  height: 100%;
  margin-top: 170px;

  @media screen and (max-width: 1140px) {
    grid-template-columns: 600px 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 550px 1fr;
  }

  @media screen and (max-width: 935px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CartHeader = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.colors.primary.dark};
      font-size: 3.2rem;
    }

    button {
      border: none;
      background: none;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.info.main};
      cursor: pointer;
    }

  }

  a {
    padding: 1rem 12px;
    background: ${({ theme }) => theme.colors.grey.dark};
    border-radius: 4px;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: 600;
    font-size: 11px;
    text-decoration: none;
    display: none;
    text-align: center;
  }

  @media screen and (max-width: 935px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 690px;
    width: 100%;

    div {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
    }
    a {
      display: flex;
    }
  }

  @media screen and (max-width: 420px) {
    div {
      h1 {
        font-size: 2rem;
      }
    }
  }

  @media screen and (max-width: 302px) {
    flex-direction: column;

    a {
      margin-top: 16px;
      align-self: flex-start;
    }
  }
`;

export const ListProducts = styled.div`
  grid-area: list;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 490px;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  transition: all 1s ease;
  animation: ${fadeInAnimation} ease 2s forwards;
  max-width: 690px;
  width: 100%;

`;
