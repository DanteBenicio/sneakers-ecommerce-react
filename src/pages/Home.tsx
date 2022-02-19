import { useState } from 'react';
import Button from '../components/Button';
import {
  ButtonGroup,
  Container, Image, ProductImage,
  ProductInfo, ProductOff,
  ProductPreviousValue, ProductPrice, ProductQuantityWrapper, ProductValue, Wrapper,
} from '../styles/Home.styles';

function Home() {
  const {
    images, handleShowModalWithImage,
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

  return (
    <Container>
      <Wrapper>
        <ProductImage>
          <Image src="assets/image-product-1.jpg" alt="" />
          <ul>
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
              <span>
                <img src="assets/icon-minus.svg" alt="" />
              </span>
              <span>0</span>
              <span>
                <img src="assets/icon-plus.svg" alt="" />
              </span>
            </ProductQuantityWrapper>
            <Button text="Add to Cart" icon="assets" />
          </ButtonGroup>
        </ProductInfo>
      </Wrapper>
    </Container>
  );
}

export default Home;
