"use client"

import { PopUpContext } from "@/app/context/pop-up"
import { useContext } from "react"

function Toast() {
  const popUpContext = useContext(PopUpContext)

  return popUpContext?.isToastOpen ? (
    <div className="fixed bg-white right-5 bottom-5 z-50 w-96 px-10 py-5 border border-black">
      {popUpContext?.toastMessage}
    </div>
  ) : null
}

export default Toast
