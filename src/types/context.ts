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
  images: ImagesType[]
  setModal: (modal: any) => void
  setImages: (images: any) => void
  handleShowModalWithImage: (id: number) => void
}

export type ContextProviderProps = {
  children: React.ReactNode
}
