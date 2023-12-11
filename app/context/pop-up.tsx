"use client"

import { ReactNode, createContext, useState } from "react"

type PopUpContextType = {
  isToastOpen: boolean
  displayToast: (message: string) => void
  toastMessage: string
  isModalOpen: boolean
  displayModal: () => void
}

export const PopUpContext = createContext<PopUpContextType | null>(null)

function PopUpContextProvider({ children }: { children: ReactNode }) {
  const [isToastOpen, setIsToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  function displayToast(message: string) {
    setIsToastOpen(true)
    setToastMessage(message)

    setTimeout(() => {
      setIsToastOpen(false)
      setToastMessage("")
    }, 5000)
  }

  function displayModal() {
    setIsModalOpen(true)

    setTimeout(() => {
      setIsModalOpen(false)
    }, 5000)
  }

  return (
    <PopUpContext.Provider
      value={{
        isToastOpen,
        displayToast,
        toastMessage,
        isModalOpen,
        displayModal
      }}
    >
      {children}
    </PopUpContext.Provider>
  )
}

export default PopUpContextProvider
