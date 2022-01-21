import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  background: #FFF;
  width: 100%;
  z-index: 1000;
  padding: 1.3rem  2.4rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  a {
    text-decoration: none;
  }
`;

export const BoxSearch = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.info.light};
  padding: 8px 16px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.info.main};
  width: 45%;

  .button__search {
    border: none;
    background: none;
  }

  input {
    border: none;
    color: ${({ theme }) => theme.colors.info.dark};
    background: none;
    ::placeholder {
      color: ${({ theme }) => theme.colors.info.light};
    }
    margin-left: 1.2rem;
    width: 100%;

  }
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
`;

export const Route = styled.li`
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow[300]};
  background: #F7F7F7;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.info.main};
  }

  .floatQtdCart {
    position: absolute;
    background: ${({ theme }) => theme.colors.secondary.light};
    color: #121212;
    font-weight: 500;
    padding: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: -10px;
    right: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .8rem;
  }
`;
