import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding-top: 0;

  > p {
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 0.8rem;

    > strong {
      color: black;
    }
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
`;
