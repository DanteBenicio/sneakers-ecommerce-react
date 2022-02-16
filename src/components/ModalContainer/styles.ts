import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  position: fixed;
  z-index: 999;
  background-color: rgba(0,0,0,0.750);
  /* padding: 20rem; */
`;

export const Wrapper = styled.main`
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 500px;

  img {
    width: 100%;
  }
`;

export const ImageList = styled.ul`
  display: flex;
  width: 100%;
  gap: 2.4rem;
  padding: 0 4.0rem;

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
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const PreviousImage = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 999;
    top: 50%;
    left: -2%;
    transform: translateY(-50%);

    width: 40px;
    height: 40px;
    padding: 1rem 1.4rem 1rem 1rem;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;

    img {
      width: 100%;
      object-fit: cover;
    }
`;

export const NextImage = styled(PreviousImage)`
  top: 50%;
  padding: 1rem 1rem 1rem 1.2rem;
  left: 94%;
  transform: translateX(-100%);
  /* right: -2%; */
  transform: translateY(-50%);
`;
