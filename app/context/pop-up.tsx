"use client"

import { ReactNode, createContext, useState } from "react"

type PopUpContextType = {
  isToastOpen: boolean
  displayToast: () => void
  isModalOpen: boolean
  displayModal: () => void
}

export const PopUpContext = createContext<PopUpContextType | null>(null)

function PopUpContextProvider({ children }: { children: ReactNode }) {
  const [isToastOpen, setIsToastOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function displayToast() {
    setIsToastOpen(true)

    alert(isToastOpen)
    setTimeout(() => {
      setIsToastOpen(false)
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
      value={{ isToastOpen, displayToast, isModalOpen, displayModal }}
    >
      {children}
    </PopUpContext.Provider>
  )
}

export default PopUpContextProvider
