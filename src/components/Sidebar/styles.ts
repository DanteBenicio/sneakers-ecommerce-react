import styled, { css, keyframes } from 'styled-components';

type ContainerProps = {
  burgerActive: boolean
}

const showSidebar = keyframes`
  from {
    transform: translateX(-100%);
    display: none;
  }
  to {
    transform: translateX(0);
    display: flex;
  }
`;

const hiddenSidebar = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

export const Container = styled('aside')<ContainerProps>`
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 40%;
  width: 100%;
  height: 100vh;
  background-color: white;
  font-size: 1.6rem;
  z-index: 999;
  ${({ burgerActive }) => (burgerActive ? css`
    animation: ${showSidebar} 0.2s ease-in-out forwards;
  ` : css`
    animation: ${hiddenSidebar} 0.2s ease-in-out forwards;
  `)}

  @media screen and (max-width: 800px) {
    max-width: 50%;
  }
`;

export const MenuCloseIconContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`;

export const CloseIconWrapper = styled.span`
  align-self: flex-start;
  display: block;
  position: absolute;
  left: 10%;
  top: 36%;
  width: 25px;
  height: 25px;

  > svg {
    width: 100%;
    height: 100%;

    > path {
      transform: scale(1.6);
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 100%;
  width: 100%;
  background-color: white;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    cursor: pointer;
  }
`;
