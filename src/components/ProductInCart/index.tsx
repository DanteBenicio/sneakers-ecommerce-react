import { DeleteIcon } from '../../icons/icon-delete';
import { ImagesType } from '../../types/context';
import {
  Container, Image, ProductContent, ProductTitle,
} from './styles';

type ProductInCartProps = {
  imageSrc: string
  sneakerValue: number
  quantity: number
  sneakerName: string
  sneakerId: number
  sneakersInCart: ImagesType[]
  images: ImagesType[]
  setSneakersInCart: (sneakers: ImagesType[]) => void
  setImages: (images: ImagesType[]) => void
}

export default function ProductInCart({
  imageSrc, sneakerValue, quantity, sneakerName, sneakerId,
  setSneakersInCart, sneakersInCart, setImages, images,
}: ProductInCartProps) {
  function removeSneaker(id: number) {
    const sneakersFiltered = sneakersInCart.filter((sneaker) => sneaker.id !== id);
    const imagesWithoutIsInCart = images.map((image) => {
      if (image.id === id) {
        return { ...image, isInCart: false };
      }

      return image;
    });
    setSneakersInCart(sneakersFiltered);
    setImages(imagesWithoutIsInCart);
  }

  return (
    <Container>
      <Image src={imageSrc} />
      <ProductContent>
        <ProductTitle>{sneakerName}</ProductTitle>
        <p>
          $
          {sneakerValue.toFixed(2)}
          {' '}
          x
          {' '}
          {quantity}
          {' '}
          <strong>
            $
            {(sneakerValue * quantity).toFixed(2)}
          </strong>
        </p>
      </ProductContent>
      <span style={{ cursor: 'pointer' }} onClick={() => removeSneaker(sneakerId)}>
        <DeleteIcon />
      </span>
    </Container>
  );
}
