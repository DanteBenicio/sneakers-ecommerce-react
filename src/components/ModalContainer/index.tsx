import React from 'react';
import {
  Container, ImageList, ImageWrapper, PreviousImage, Wrapper, NextImage,
} from './styles';

export default function ModalContainer() {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src="assets/image-product-1.jpg" alt="" />
          <PreviousImage>
            <img src="assets/icon-previous.svg" alt="" />
          </PreviousImage>
          <NextImage>
            <img src="assets/icon-next.svg" alt="" />
          </NextImage>
        </ImageWrapper>
        <ImageList>
          <li>
            <img src="assets/image-product-1-thumbnail.jpg" alt="" />
          </li>
          <li>
            <img src="assets/image-product-2-thumbnail.jpg" alt="" />
          </li>
          <li>
            <img src="assets/image-product-3-thumbnail.jpg" alt="" />
          </li>
          <li>
            <img src="assets/image-product-4-thumbnail.jpg" alt="" />
          </li>
        </ImageList>
      </Wrapper>
    </Container>
  );
}
