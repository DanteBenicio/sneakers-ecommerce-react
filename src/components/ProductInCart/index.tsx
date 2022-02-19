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
  setSneakersInCart: (sneakers: ImagesType[]) => void
  sneakersInCart: ImagesType[]
}

export default function ProductInCart({
  imageSrc, sneakerValue, quantity, sneakerName, sneakerId, setSneakersInCart, sneakersInCart,
}: ProductInCartProps) {
  function removeSneaker(id: number) {
    const sneakersFiltered = sneakersInCart.filter((sneaker) => sneaker.id !== id);
    setSneakersInCart(sneakersFiltered);
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
