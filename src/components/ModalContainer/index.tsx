import React from 'react';
import {
  Container, ImageList, ImageWrapper, PreviousImage, Wrapper, NextImage,
} from './styles';

export default function ModalContainer() {
  const {
    modal, setModal, images, handleShowModalWithImage,
  } = useContext(AppContext);

  function renderImage() {
    const [imageSelected] = images.filter((image) => image.selectedImage);
    const changeSelectedImageSrc = imageSelected.src.replace('-thumbnail', '');

    return <img src={changeSelectedImageSrc} alt="" />;
  }

  function showPreviousImage() {
    const [imageSelected] = images.filter((image) => image.selectedImage);

    if (imageSelected.id - 1 >= 0) {
      const previousImage = imageSelected.id - 1;

      handleShowModalWithImage(previousImage);
    }
  }

  function showNextImage() {
    const [imageSelected] = images.filter((image) => image.selectedImage);

    if (imageSelected.id + 1 <= 4) {
      const nextImage = imageSelected.id + 1;

      handleShowModalWithImage(nextImage);
    }
  }

  if (modal) {
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
