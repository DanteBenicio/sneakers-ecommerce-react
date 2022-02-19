import styled from 'styled-components';
import { ButtonComponentProps } from '../../types/button';

export const ButtonComponent = styled('button')<ButtonComponentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  height: ${({ buttonHeight }) => (buttonHeight || '100%')};
  width: 100%;
  /* line-height: ; */

  border: none;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.6rem;
  box-shadow: 0 0.8rem 2.0rem hsla(26, 100%, 55%, 0.8);

  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: hsla(26, 100%, 60%);
  }

  img {
    margin-right: 0.8rem;
  }
`;
