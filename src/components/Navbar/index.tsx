import React from 'react';
import {
  Avatar, AvatarContainer, Cart, CartInfo, Container, List, Logo,
  Wrapper, WrapperCartAvatar, WrapperLogoList,
} from './styles';

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <WrapperLogoList>
          <Logo src="assets/logo.svg" alt="logo" />

          <List>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </List>
        </WrapperLogoList>

        <WrapperCartAvatar>
          <Cart>
            <img src="assets/icon-cart.svg" alt="cart" />
            <span>1</span>
          </Cart>

          <CartInfo>
            <p>Cart</p>
            <div>Your cart is empty</div>
          </CartInfo>

          <AvatarContainer>
            <Avatar src="assets/image-avatar.png" alt="avatar" />
          </AvatarContainer>
        </WrapperCartAvatar>
      </Wrapper>
    </Container>
  );
}
