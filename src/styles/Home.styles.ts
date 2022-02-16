import styled from 'styled-components';

export const Container = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
`;

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100%;
  gap: 5.6rem;
`;

export const ProductImage = styled.div`
  max-width: 500px;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    width: 100%;
    gap: 1.6rem;
    margin-top: 1.6rem;

    li {
      flex: 1;
      border-radius: 1.6rem;
      position: relative;
      border: 2px solid transparent;
      overflow: hidden;

      &:hover {
        border: 2px solid transparent;
        border-color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
      }

      &:hover::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255,0.4);
      }

      img {
        object-fit: cover;
        width: 100%;
      }
    }
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 1.6rem;
`;

export const ProductInfo = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 1.6rem;

  > span {
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.6rem;
  }

  > h1 {
    font-size: 4.0rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
  }

  > p {
    font-weight: 400;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    margin-bottom: 3.2rem;
  }
`;

export const ProductPrice = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 3.2rem;
`;

export const ProductValue = styled.span`
  display: inline-block;
  font-size: 3.2rem;
  font-weight: 700;
  margin-right: 1.6rem;
`;

export const ProductOff = styled.span`
  display: inline-block;
  padding: 0.8rem;
  position: absolute;
  top: 0;

  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.8rem;
`;

export const ProductPreviousValue = styled.s`
  display: block;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 100%;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};

  span {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* width: 50px; */
    line-height: 100%;
    cursor: pointer;
  }
`;
