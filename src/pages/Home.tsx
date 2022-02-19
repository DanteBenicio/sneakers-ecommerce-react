/* eslint-disable no-restricted-globals */
import { useContext, useState } from 'react';
import Button from '../components/Button';
import { AppContext } from '../context';
import { MinusIcon } from '../icons/icon-minus';
import { PlusIcon } from '../icons/icon-plus';
import {
  ButtonGroup,
  Container, Image, ImageItem, ProductImage,
  ProductInfo, ProductOff,
  ProductPreviousValue, ProductPrice, ProductQuantityWrapper, ProductValue, Wrapper,
} from '../styles/Home.styles';
import { ContextValue } from '../types/context';

function Home() {
  const {
    images, setImages, handleShowModalWithImage,
  } = useContext<ContextValue>(AppContext);
  const [quantityProduct, setQuantityProducts] = useState<number>(0);

  function verifyQuantityProducts(operator: unknown) {
    if (operator === '+') {
      setQuantityProducts((previousValue) => previousValue + 1);
    }

    if (operator === '-') {
      if (quantityProduct > 0) {
        setQuantityProducts((previousValue) => previousValue - 1);
      }
    }

    return '';
  }

  function addProductInCart() {
    const newImages = images.map((image) => {
      if (image.selectedImage) {
        return { ...image, isInCart: true, pairsQuantity: quantityProduct };
      }

      return image;
    });

    scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setImages(newImages);
  }

  function ShowProductImage() {
    const [imageSelected] = images.filter((image) => image.selectedImage);

    if (!imageSelected) {
      return <Image src="assets/image-product-1.jpg" alt="" />;
    }

    const formatSrcImageSelected = imageSelected.src.replace('-thumbnail', '');

    return <Image src={formatSrcImageSelected} alt="" />;
  }

  return (
    <Container>
      <Wrapper>
        <ProductImage>
          <ShowProductImage />
          <ul>
            {images.map((image) => (
              <ImageItem
                key={image.src}
                onClick={() => handleShowModalWithImage(image.id)}
                imgSelected={image.selectedImage}
              >
                <img src={image.src} alt="" />
              </ImageItem>
            ))}
          </ul>
        </ProductImage>
        <ProductInfo>
          <span>Sneaker Company</span>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <ProductPrice>
            <ProductValue>$125.00</ProductValue>
            <ProductOff>50%</ProductOff>
            <ProductPreviousValue>$250.00</ProductPreviousValue>
          </ProductPrice>
          <ButtonGroup>
            <ProductQuantityWrapper>
              <span onClick={() => verifyQuantityProducts('-')}>
                <MinusIcon />
              </span>
              <span>{quantityProduct}</span>
              <span onClick={() => verifyQuantityProducts('+')}>
                <PlusIcon />
              </span>
            </ProductQuantityWrapper>
            <Button
              text="Add to Cart"
              iconSrc="assets/icon-cart-white.svg"
              addProductInCart={addProductInCart}
            />
          </ButtonGroup>
        </ProductInfo>
      </Wrapper>
    </Container>
  );
}

export default Home;
