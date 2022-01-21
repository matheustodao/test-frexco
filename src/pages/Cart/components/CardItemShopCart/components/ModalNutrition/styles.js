import styled from 'styled-components';
import { fadeInAnimation } from '../../../../../../components/Animations/fadeIn';

export const Overlay = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.backgrounds.light};
  border-radius: 8px;
  padding: 12px 16px;
  animation: ${fadeInAnimation} .400s ease-in forwards;

`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 420px) {
    align-items: center;
    overflow-y: scroll;
  }

  .container__pie__chart {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2.4rem;

    @media screen and (max-width: 420px) {
      flex-direction: column;
    }
  }

  .wrapper__pie__chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    small {
      margin-top: 1.6rem;
      font-family: ${({ theme }) => theme.fontFamily.secondary};
      color: ${({ theme }) => theme.colors.grey.dark};
      font-weight: 500;
      font-size: 1rem;
    }

    + .wrapper__pie__chart {
      margin-left: 24px;

      @media screen and (max-width: 556px) {
        margin-left: 14px;
      }

      @media screen and   (max-width: 420px) {
        margin-left: 0;
        margin-top: 24px;
      }
    }
  }

  button {
    padding: 8px 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    border: none;
    background: ${({ theme }) => theme.colors.backgrounds.dark};
    color: ${({ theme }) => theme.colors.info.dark};
    border-radius: 4px;
    cursor: pointer;

    font-weight: 400;
    svg {
      margin-right: 10px;
    }
  }
`;

export const PieChart = styled.div`
  width: 6.4rem;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.info.dark};

  &:before {
    --trickness-border: 7px;
    --percentage: ${({ percentage }) => percentage};
    --color: ${({ color }) => color};
    content: '';
    position: absolute;
    border-radius: 50%;
    inset: 0;
    background: conic-gradient(transparent, calc(var(--percentage)*1%), var(--color) 0);
    -webkit-mask:radial-gradient(farthest-side, transparent calc(99% - var(--trickness-border)),#fff calc(100% - var(--trickness-border)));
          mask:radial-gradient(farthest-side, transparent calc(99% - var(--trickness-border)),#fff calc(100% - var(--trickness-border)));
  }

  @media screen and (max-width: 556px) {
    width: 4.8rem;
    font-size: 14px;
  }
`;
