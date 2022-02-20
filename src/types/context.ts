export type ImagesType = {
  src: string
  id: number
  selectedImage: boolean
  isInCart: boolean
  sneakerName: string
  pairsQuantity: number
  value: number
}

export type ContextValue = {
  modal: boolean
  burger: boolean
  images: ImagesType[]
  setModal: (modal: any) => void
  setImages: (images: any) => void
  setBurger: (burger: boolean) => void
  handleShowModalWithImage: (id: number, handleShowModal: boolean) => void
}

export type ContextProviderProps = {
  children: React.ReactNode
}
