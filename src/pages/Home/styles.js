import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 13.2rem;
  max-width: 1200px;
  width: 100%;

  @media screen and (max-width: 1230px) {
    max-width: 1000px;
    width: 100%;
  }

  @media screen and (max-width: 1030px) {
    max-width: 800px;
    width: 100%;
  }

  @media screen and (max-width: 830px) {
    max-width: 600px;
    width: 100%;
  }

  @media screen and (max-width: 630px) {
    max-width: 400px;
    width: 100%;
  }

  @media screen and (max-width: 432px) {
    width: 100%;
    padding: 0 18px;
  }

`;

export const MainHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6rem;

  h1 {
    color: ${({ theme }) => theme.colors.primary.dark};
    font-weight: 600;
    font-size: 3.2rem;
  }

  @media screen and (max-width: 630px) {
    h1 {
      margin-bottom: 1.6rem;
    }
  }
`;

export const OrderProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  .wrapper__icon {
    box-shadow: ${({ theme }) => theme.boxShadow[300]};
    background: #F7F7F7;
    color: ${({ theme }) => theme.colors.primary.dark};
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const OrderBy = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  cursor: pointer;
  color: ${({ theme, isChecked }) => (!isChecked ? theme.colors.primary.main : '#F8F8F8')};
  background: ${({ theme, isChecked }) => (isChecked ? theme.colors.primary.main : '#E5E5E5')};;
  border-radius: 8px;

  span {
    margin-right: 1rem;
    font-weight: 500;
    font-size: 13px;
    min-width: 80px;
    padding-left: 6px;
    text-align: left;
  }

  & + & {
    margin-left: 10px;
  }

  :last-of-type {
    margin-right: 24px;
  }

  @media screen and (max-width: 630px) {
    display: none;
  }

`;

export const ListProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  @media screen and (max-width: 432px) {
    flex-direction: column;
    width: 100%;
  }
`;
