export type ImagesType = {
  src: string
  id: number
  selectedImage: boolean
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
