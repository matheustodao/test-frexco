import styled from 'styled-components';

export const Container = styled.div`
  grid-area: bill;
  max-width: 480px;
  padding: 4.4rem 1.8rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgrounds.main};
  box-shadow: 0px .4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: relative;

  a {
    text-decoration: none;
    padding: 1.3rem 0;
    background: ${({ theme }) => theme.colors.grey.dark};
    border-radius: 4px;
    font-size: 13px;
    color: #FFFFFF;
    text-align: center;
    font-weight: 500;
    width: 100%;
  }
`;

export const BillHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: 500;

  strong {
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 2.4rem;
    line-height: 42px;
  }

  margin-bottom: 2rem;
`;

export const ListItems = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

`;

export const Item = styled.tr`
  width: 100%;

  td, th {
    padding: 1rem;
  }

  th {
    font-weight: 400;
    font-size: 1rem;
  }

  td {
    strong {
      font-weight: 500;
      font-size: 14px;
      color: #121212;
    }

    color: ${({ theme }) => theme.colors.info.dark};
    font-weight: 500;
    font-size: 12px;
    background: #F3F3F3;
  }

  margin: 25px 0;

  & + & {
    border-top: 13px solid ${({ theme }) => theme.colors.backgrounds.main};
  }

`;

export const Total = styled.div`;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
  float: bottom;
  bottom: 0;

  span {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    color: ${({ theme }) => theme.colors.info.dark};
    font-size: 16px;
    font-weight: 500;
    line-height: 27px;
    margin-bottom: 16px;
    text-align: center;
  }

  a {
    background: ${({ theme }) => theme.colors.primary.dark};
    color: #FFFFFF;
  }

  @media screen and (max-width: 471px) {
    width: 100%;
  }

  @media screen and (max-width: 307px) {
    span {
      font-size: 12px;
    }
  }
`;
