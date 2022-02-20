import { useContext } from 'react';
import { CloseIcon } from '../../icons/icon-close';
import { AppContext } from '../../context';
import {
  Container, ImageList, ImageWrapper,
  PreviousImage, Wrapper, NextImage, CloseIconWrapper, ImageItem,
} from './styles';
import { PreviousIcon } from '../../icons/icon-previous';
import { NextIcon } from '../../icons/icon-next';

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

    if (imageSelected.id - 1 > 0) {
      const previousImage = imageSelected.id - 1;

      handleShowModalWithImage(previousImage, true);
    }
  }

  function showNextImage() {
    const [imageSelected] = images.filter((image) => image.selectedImage);

    if (imageSelected.id + 1 < 4) {
      const nextImage = imageSelected.id + 1;

      handleShowModalWithImage(nextImage, true);
    }
  }

  if (modal) {
    return (
      <Container showModal={modal}>
        <Wrapper>
          <ImageWrapper>
            <CloseIconWrapper onClick={() => setModal(false)}>
              <CloseIcon />
            </CloseIconWrapper>
            {modal && renderImage()}
            <PreviousImage onClick={() => showPreviousImage()}>
              <PreviousIcon />
            </PreviousImage>
            <NextImage onClick={() => showNextImage()}>
              <NextIcon />
            </NextImage>
          </ImageWrapper>
          <ImageList>
            {images.map((image) => (
              <ImageItem
                onClick={() => handleShowModalWithImage(image.id, true)}
                imgSelected={image.selectedImage}
                key={image.src}
              >
                <img src={image.src} alt="" />
              </ImageItem>
            ))}
          </ImageList>
        </Wrapper>
      </Container>
    );
  }
  return (
    <span style={{ display: 'none' }} />
  );
}
