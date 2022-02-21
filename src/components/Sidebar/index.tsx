import { useContext, useMemo } from 'react';
import { AppContext } from '../../context';
import { CloseIcon } from '../../icons/icon-close';
import {
  Container, List, MenuCloseIconContainer, CloseIconWrapper,
} from './styles';

export default function Sidebar() {
  const { burger, setBurger } = useContext(AppContext);

  return useMemo(() => (
    <Container burgerActive={burger}>
      <MenuCloseIconContainer>
        <CloseIconWrapper onClick={() => setBurger(!burger)}>
          <CloseIcon />
        </CloseIconWrapper>
      </MenuCloseIconContainer>

      <List>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </List>
    </Container>
  ), [burger]);
}
