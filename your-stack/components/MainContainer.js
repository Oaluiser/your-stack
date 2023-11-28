"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function MainContainer({ database, toggle }) {
  useEffect(() => {
    console.log(database)
  }, [])

  const [infoModal, setInfoModal] = useState(false)
  const [modalData, setModalData] = useState({})

  const handleAdd = (e) => {
    localStorage.setItem("toggle", "true")
    document.querySelector(".toggleBottom").classList.remove("h-[5vh]")
    document.querySelector(".toggleBottom").classList.add("h-[15vh]")
    document.querySelector(".toggleMain").classList.remove("h-[87vh]")
    document.querySelector(".toggleMain").classList.add("h-[77vh]")
    document.querySelector(".chevron").classList.add("rotate-180")
    if (localStorage.getItem(e.target.id) === "false") {
      localStorage.setItem(e.target.id, "true")
      e.target.src = "/minus.svg"
    } else {
      localStorage.setItem(e.target.id, "false")
      e.target.src = "/plus.svg"
    }

    const stackArray = JSON.parse(localStorage.getItem("stackArray"))
    if (stackArray.includes(e.target.id)) {
      stackArray.splice(stackArray.indexOf(e.target.id), 1)
      localStorage.setItem("stackArray", JSON.stringify(stackArray))
    } else {
      stackArray.push(e.target.id)
      localStorage.setItem("stackArray", JSON.stringify(stackArray))
    }
  }

  const toggleInfoModal = (e, item) => {
    if (e.target.id === "close") {
      setInfoModal(!infoModal)
      return
    }

    if (e.target.id !== item.nome) {
      setInfoModal(!infoModal)
      setModalData(item)
    }
  }

  return (
    <div className="mx-3 bg-white/80 rounded-2xl h-[87vh] overflow-y-scroll p-8 toggleMain transition-all duration-300">
      <div className="grid grid-cols-4 gap-4">
        {database.map((item, index) => (
          <div
            className="bg-white drop-shadow-lg rounded-2xl hover:bg-primary/80 transition-all duration-300 cursor-pointer"
            key={index}
            onClick={(e) => toggleInfoModal(e, item)}
          >
            <div className="bg-secondary flex justify-center rounded-t-2xl p-4">
              <div className="bg-white rounded-full w-24 h-24 flex justify-center items-center overflow-hidden">
                <Image
                  src={item.imagem}
                  width={100}
                  height={100}
                  className="object-contain p-2"
                  alt={item.nome}
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-bold text-black">{item.nome}</p>
              <p className="font-light text-black">{item.tipo}</p>
            </div>
            <div className="flex justify-end m-3">
              <div className="bg-primary rounded-full flex justify-center w-10 h-10 items-center">
                <Image
                  src="/plus.svg"
                  width={40}
                  height={40}
                  className="object-contain p-2"
                  alt={item.nome}
                  id={item.nome}
                  onClick={(e) => handleAdd(e)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {infoModal ? (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center">
          <div className="bg-secondary rounded-t-2xl w-11/12">
            <div className="flex justify-end pt-4 pr-3">
              <div className="bg-primary rounded-full flex justify-center w-8 h-8 items-center">
                <Image
                  src="/plus.svg"
                  width={32}
                  height={32}
                  className="object-contain p-2 rotate-45"
                  alt={modalData.nome}
                  onClick={toggleInfoModal}
                  id="close"
                />
              </div>
            </div>
            <div className="flex justify-center align-middle pb-4">
              <div className="bg-white rounded-full w-40 h-40 flex justify-center items-center overflow-hidden -mt-4">
                <Image
                  src={modalData.imagem}
                  width={250}
                  height={250}
                  className="object-contain p-2"
                  alt={modalData.nome}
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-b-2xl p-8 w-11/12">
            <h1 className="font-bold text-3xl mb-4 text-black">{modalData.nome}</h1>
            <p className="text-xs font-light text-black">{modalData.descricao}</p>
          </div>
        </div>
      ) : null}
    </div>
  )
}
