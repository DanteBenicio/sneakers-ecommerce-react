import styled, { css } from 'styled-components';
import { ImageItemProps } from '../../types/home-styles';
import { ContainerProps } from '../../types/modal-container-styles';

export const Container = styled('div')<ContainerProps>`
  display: ${({ showModal }) => (showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  position: fixed;
  z-index: 999;
  background-color: rgba(0,0,0,0.750);
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 500px;

  img {
    width: 100%;
  }
`;

export const ImageList = styled.ul`
  display: flex;
  width: 100%;
  gap: 2.4rem;
  padding: 0 4.0rem;
`;

export const ImageItem = styled('li')<ImageItemProps>`
  flex: 1;
  border-radius: 1.6rem;
  position: relative;
  border: 2px solid transparent;
  overflow: hidden;

  ${({ imgSelected }) => (imgSelected ? css`
    border: 2px solid ${({ theme }) => theme.colors.primary};
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255,0.4);
    }
  ` : '')};

  &:hover {
    border: 2px solid transparent;
    border-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }

  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255,0.2);
  }

  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-top: 6.4rem;
`;

export const CloseIconWrapper = styled.span`
  display: flex;
  position: absolute;
  top: 2.0rem;
  right: 0;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  > svg {
    width: 30px;
    height: 30px;

    path {
      transform: scale(1.9);
    }

  }

  &:hover svg path{
    transition: fill 0.2s ease-in-out;
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const PreviousImage = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 999;
    top: 55%;
    left: -2%;
    transform: translateY(-55%);
    cursor: pointer;

    width: 40px;
    height: 40px;
    padding: 1rem 1.4rem 1rem 1rem;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;

    img {
      width: 100%;
      object-fit: cover;
    }
`;

export const NextImage = styled(PreviousImage)`
  padding: 1rem 1rem 1rem 1.2rem;
  left: 94%;
  transform: translateX(-100%);
  transform: translateY(-55%);
`;
