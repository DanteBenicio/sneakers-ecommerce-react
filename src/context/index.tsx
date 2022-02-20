/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, useState,
} from 'react';
import { ContextProviderProps, ContextValue, ImagesType } from '../types/context';

const initialValue = {
  modal: false,
  setModal: (modal: boolean) => {},
  images: [{
    src: '',
    id: 0,
    selectedImage: false,
    isInCart: false,
    sneakerName: '',
    pairsQuantity: 0,
    value: 0,
  }],
  setImages: (images: ImagesType[]) => {},
  handleShowModalWithImage: (id: number, handleShowModal: boolean) => {},
  burger: false,
  setBurger: (burger: boolean) => {},
};

export const AppContext = createContext<ContextValue>(initialValue);

export default function ContextProvider({ children }: ContextProviderProps) {
  const [modal, setModal] = useState<boolean>(false);
  const [images, setImages] = useState<ImagesType[]>([
    {
      src: 'assets/image-product-1-thumbnail.jpg',
      id: 0,
      selectedImage: false,
      isInCart: false,
      sneakerName: 'Autumn Limited Edition | White',
      pairsQuantity: 0,
      value: 125.00,
    },
    {
      src: 'assets/image-product-2-thumbnail.jpg',
      id: 1,
      selectedImage: false,
      isInCart: false,
      sneakerName: 'Autumn Limited Edition | White',
      pairsQuantity: 0,
      value: 125.00,
    },
    {
      src: 'assets/image-product-3-thumbnail.jpg',
      id: 2,
      selectedImage: false,
      isInCart: false,
      sneakerName: 'Autumn Limited Edition | White',
      pairsQuantity: 0,
      value: 125.00,
    },
    {
      src: 'assets/image-product-4-thumbnail.jpg',
      id: 3,
      selectedImage: false,
      isInCart: false,
      sneakerName: 'Autumn Limited Edition | White',
      pairsQuantity: 0,
      value: 125.00,
    },
  ]);
  const [burger, setBurger] = useState<boolean>(false);

  function handleShowModalWithImage(id: number, handleShowModal: boolean) {
    const [imageSelected] = images.filter((image) => image.id === id);

    const newImages = images.map((image) => {
      if (image.id === imageSelected.id) {
        return { ...imageSelected, selectedImage: true };
      }

      image.selectedImage = false;

      return image;
    });

    if (handleShowModal) {
      setModal(true);
    }
    setImages(newImages);
  }

  return (
    <AppContext.Provider value={{
      modal,
      setModal,
      images,
      setImages,
      handleShowModalWithImage,
      burger,
      setBurger,
    }}
    >
      {children}
    </AppContext.Provider>
  );
}
