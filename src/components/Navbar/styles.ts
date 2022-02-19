import styled, { keyframes } from 'styled-components';

export const Container = styled.header`
  max-width: 100vw;
  width: 100%;
  height: 15vh;
  padding: 0 5%;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #cbcbcb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WrapperLogoList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 4.0rem;
`;

export const WrapperCartAvatar = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;
`;

export const Logo = styled.img`

`;

export const List = styled.ul`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  /* justify-content: center; */
  list-style: none;
  gap: 2.4rem;

  li {
    cursor: pointer;
    position: relative;

    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    border-bottom: 3px solid transparent;

    height: 100%;
    padding-top: 0.8rem;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    transition: color, border-bottom 0.2s ease-in-out;
  }

  li:hover {
    color: ${({ theme }) => theme.colors.veryVarkBlue};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

const showCartInfo = keyframes`
  from {
    display: none;
    opacity: 0;
    transform: translateY(-10%);
  }

  to {
    transform: translateY(0);
    opacity: 1;
    display: block
  }
`;

export const CartInfo = styled.div`
  display: none;
  position: absolute;
  top: 160%;
  left: -250%;
  width: 300px;
  height: 200px;

  font-size: 1.6rem;

  border-radius: 0.8rem;
  box-shadow: 0 0 4.0rem rgba(0, 0, 0, 0.180);

  p {
    padding: 1.6rem;
    border-bottom: 1px solid #cbcbcb;
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem;
  }
`;

export const Cart = styled.span`
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;

  &:hover ~ ${CartInfo} {
    display: block;
    animation: ${showCartInfo} 0.2s forwards;
  }

  span {
    position: absolute;
    display: inline-block;
    text-align: center;

    width: 20px;
    top: -250%;
    left: 50%;
    transform: translateY(250%);

    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
  }
`;

export const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  padding: 0.2rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CartEmpty = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
`;

export const Avatar = styled.img`
  object-fit: contain;
  width: 100%;
`;
