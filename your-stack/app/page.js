"use client"

import MainContainer from "@/components/MainContainer"
import BottomContainer from "@/components/BottomContainer"
import { useEffect, useState } from "react"
import { database } from "@/public/database"
import MainModal from "@/components/MainModal"

export default function Main() {
  const [mainModal, setMainModal] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("toggle") === null) {
      localStorage.setItem("toggle", "false")
    } else if (localStorage.getItem("toggle") === "true") {
      document.querySelector(".toggleBottom").classList.add("h-[15vh]")
      document.querySelector(".toggleMain").classList.add("h-[77vh]")
      document.querySelector(".chevron").classList.add("rotate-180")
    }

    database.map((item) => {
      if (localStorage.getItem(item.nome) === null) {
        localStorage.setItem(item.nome, "false")
      }
    })

    if (localStorage.getItem("stackArray") === null) {
      localStorage.setItem("stackArray", JSON.stringify([]))
    } else {
      const stackArray = JSON.parse(localStorage.getItem("stackArray"))
      stackArray.map((item) => {
        document.getElementById(item).src = "/minus.svg"
      })
    }
  }, [])

  const toggleSize = () => {
    if (localStorage.getItem("toggle") === "false") {
      localStorage.setItem("toggle", "true")
      document.querySelector(".toggleBottom").classList.remove("h-[5vh]")
      document.querySelector(".toggleBottom").classList.add("h-[15vh]")
      document.querySelector(".toggleMain").classList.remove("h-[87vh]")
      document.querySelector(".toggleMain").classList.add("h-[77vh]")
      document.querySelector(".chevron").classList.add("rotate-180")
    } else {
      localStorage.setItem("toggle", "false")
      document.querySelector(".toggleBottom").classList.remove("h-[15vh]")
      document.querySelector(".toggleBottom").classList.add("h-[5vh]")
      document.querySelector(".toggleMain").classList.remove("h-[77vh]")
      document.querySelector(".toggleMain").classList.add("h-[87vh]")
      document.querySelector(".chevron").classList.remove("rotate-180")
    }
  }

  const toggleMainModal = () => {
    setMainModal(!mainModal)
  }

  return (
    <div>
      {mainModal ? <MainModal toggle={toggleMainModal} /> : null}
      <MainContainer
        database={database}
        toggle={toggleSize}
      />
      <BottomContainer
        database={database}
        toggle={toggleSize}
      />
    </div>
  )
}
