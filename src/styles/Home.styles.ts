import styled, { css } from 'styled-components';
import { ImageItemProps } from '../types/home-styles';

export const Container = styled.section`
  max-width: 100vw;
  min-height: 50vh;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;

  @media screen and (max-width: 450px) {
    padding: 0;
  }
`;

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100%;
  gap: 5.6rem;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 1.6rem;
  }
`;

export const ProductImage = styled.div`
  max-width: 500px;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    width: 100%;
    gap: 1.6rem;
    margin-top: 1.6rem;
  }

  @media screen and (max-width: 700px) {
    ul {
      display: none;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const NextIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
  width: 4.0rem;
  height: 4.0rem;
  border-radius: 50%;
  background-color: white;
  overflow: hidden;
  right: 2%;
  cursor: pointer;

  > svg {
    width: 4.0rem;
    height: 4.0rem;
    padding-top: 1.0rem;
    padding-left: 1.4rem;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PreviousIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: none;
  width: 4.0rem;
  height: 4.0rem;
  background-color: white;
  border-radius: 50%;
  left: 2%;
  cursor: pointer;

  > svg {
    width: 4.0rem;
    height: 4.0rem;
    padding-top: 1.0rem;
    padding-left: 1.2rem;
  }

  @media screen and (max-width: 700px) {
    display: inline-block;
  }
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
  ` : '')}

  &:hover {
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

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 1.6rem;

  @media screen and (max-width: 450px) {
    border-radius: 0;
  }
`;

export const ProductInfo = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 1.6rem;

  > span {
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.6rem;
  }

  > h1 {
    font-size: clamp(2.4rem, 4vw, 4.0rem);
    font-weight: 700;
    margin-bottom: 3.2rem;
  }

  > p {
    font-weight: 400;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    margin-bottom: 3.2rem;
  }
`;

export const ProductPrice = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 3.2rem;
`;

export const ProductValue = styled.span`
  display: inline-block;
  font-size: clamp(2.8rem, 3vw, 3.2rem);
  font-weight: 700;
  margin-right: 1.6rem;
`;

export const ProductOff = styled.span`
  display: inline-block;
  padding: 0.8rem;
  position: absolute;
  top: 0;

  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.8rem;
`;

export const ProductPreviousValue = styled.s`
  display: block;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};

  @media screen and (max-width: 450px) {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 5.0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    height: 11.8rem;
  }
`;

export const ProductQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 100%;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};

  span {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* width: 50px; */
    line-height: 100%;
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
    gap: 1.6rem;
  }
`;
