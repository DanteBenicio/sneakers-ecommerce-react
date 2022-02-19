import { ButtonProps } from '../../types/button';
import { ButtonComponent } from './styles';

export default function Button({
  text, iconSrc, buttonWidth, addProductInCart, buttonHeight,
}: ButtonProps) {
  return (
    <ButtonComponent
      type="button"
      style={{ maxWidth: buttonWidth || '100%' }}
      onClick={addProductInCart}
      buttonHeight={buttonHeight}
    >
      <img src={iconSrc} alt="" />
      {text}
    </ButtonComponent>
  );
}
