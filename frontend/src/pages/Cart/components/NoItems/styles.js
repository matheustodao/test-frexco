import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 0;

  h1, a {
    font-size: 3.6rem;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.dark};
    line-height: 6.4rem;
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    text-decoration: none;
    background: ${({ theme }) => theme.colors.primary.main};
    color: #FFF;
    border-radius: 8px;
    font-size: 14px;
    text-transform: capitalize;
    margin-top: 32px;
    line-height: 2.4rem;

    svg {
      margin-right: 24px;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 2.8rem;
      line-height: 28px;
    }

    a {
      padding: 14px 24px;
      font-size: 13px;
    }
  }

  @media screen and (max-width: 332px) {
    h1 {
      font-size: 2rem;
    }

    a {
      padding: 1rem 2.4rem;
      font-size: 13px;
    }
  }
`;
