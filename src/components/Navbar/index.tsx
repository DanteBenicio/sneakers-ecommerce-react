import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { AppContext } from '../../context';
import { MenuIcon } from '../../icons/icon-menu';
import { ImagesType } from '../../types/context';
import Button from '../Button';
import ProductInCart from '../ProductInCart';
import {
  Avatar, AvatarContainer, Cart, CartEmpty, CartInfo, Container, List, Logo,
  Wrapper, WrapperCartAvatar, WrapperLogoList,
} from './styles';

export default function Navbar() {
  const {
    images, setBurger, burger, setImages,
  } = useContext(AppContext);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [sneakersInCart, setSneakersInCart] = useState<ImagesType[]>([]);

  useEffect(() => {
    const sneakersIsInCart = images.filter((image) => image.isInCart);

    setSneakersInCart(sneakersIsInCart);
  }, [images]);

  function ShowRenderSneakers() {
    return (
      <>
        {sneakersInCart.map((sneaker) => (
          <ProductInCart
            imageSrc={sneaker.src}
            quantity={sneaker.pairsQuantity}
            sneakerName={sneaker.sneakerName}
            sneakerValue={sneaker.value}
            sneakerId={sneaker.id}
            sneakersInCart={sneakersInCart}
            setSneakersInCart={setSneakersInCart}
            images={images}
            setImages={setImages}
          />
        ))}
      </>
    );
  }

  return (
    <Container>
      <Wrapper>
        <WrapperLogoList>
          <span onClick={() => setBurger(!burger)}>
            <MenuIcon />
          </span>

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
          <Cart onClick={() => setShowCart(!showCart)}>
            <img src="assets/icon-cart.svg" alt="cart" />
            {sneakersInCart.length ? (
              <span>{sneakersInCart.length}</span>
            ) : (
              ''
            )}
          </Cart>

          <CartInfo showCart={showCart}>
            <p>Cart</p>
            {sneakersInCart.length
              ? (
                <>
                  <ShowRenderSneakers />
                  <div>
                    <Button text="Checkout" buttonHeight="50px" />
                  </div>
                </>
              )
              : (
                <CartEmpty>Your cart is empty</CartEmpty>
              )}
          </CartInfo>

          <AvatarContainer>
            <Avatar src="assets/image-avatar.png" alt="avatar" />
          </AvatarContainer>
        </WrapperCartAvatar>
      </Wrapper>
    </Container>
  );
}
