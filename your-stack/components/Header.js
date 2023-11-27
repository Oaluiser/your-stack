"use client"

import { database } from "@/public/database"
import { useEffect, useState } from "react"
import { get, useForm } from "react-hook-form"
import Image from "next/image"

export default function Header() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [generateArray, setGenerateArray] = useState([])
  const [generateModal, setGenerateModal] = useState(false)
  const [nameModal, setNameModal] = useState(false)
  const [name, setName] = useState("")

  const toggleName = () => {
    setNameModal(!nameModal)

    const stackArray = JSON.parse(localStorage.getItem("stackArray"))
    let result = []
    stackArray.map((item) => {
      database.map((item2) => {
        if (item2.nome === item) {
          result.push(item2)
        }
      })
    })
    setGenerateArray(result)
  }

  const toggleGenerate = (e) => {
    setGenerateModal(!generateModal)
  }

  const onSubmit = () => {
    toggleGenerate()
    setName(getValues("name"))
  }

  return (
    <header className="flex justify-between items-center font-bold px-8 h-[5vh] my-[1vh]">
      <div>
        <p className="text-white">
          <em className="text-primary not-italic">your</em>stack.com
        </p>
      </div>
      <div
        className="px-4 bg-primary rounded-full cursor-pointer hover:bg-white transition-all duration-300"
        onClick={() => toggleName()}
      >
        <p>generate</p>
      </div>

      {nameModal && (
        <div className="absolute top-0 left-0 z-20 w-full h-full bg-black/50 flex flex-col justify-center items-center">
          <div className="bg-secondary rounded-t-2xl w-6/12 p-6">
            <div className="flex justify-end">
              <div className="bg-primary rounded-full flex justify-center w-8 h-8 items-center">
                <Image
                  src="/plus.svg"
                  width={32}
                  height={32}
                  className="object-contain p-2 rotate-45"
                  alt="close"
                  onClick={() => toggleName()}
                  id="close"
                />
              </div>
            </div>
            <p className="text-center text-white text-2xl">
              what is your name?
            </p>
          </div>
          <form
            className="bg-white rounded-b-2xl w-6/12 p-6 flex flex-col justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="px-4 text-white rounded-full cursor-pointer flex justify-center p-2  mb-4 shadow-inner border-[1px] border-gray-200">
              <input
                className="bg-transparent text-black"
                {...register("name", { required: true })}
              ></input>
            </div>
            <div className="-mt-4 mb-4 text-red-500 text-xs">
              {errors.name && "Campo obrigatório"}
            </div>
            <button
              className="px-4 bg-primary text-white rounded-full cursor-pointer flex justify-center p-2"
              type="submit"
            >
              <p>generate your stack file</p>
            </button>
          </form>
        </div>
      )}

      {generateModal && (
        <div
          className="absolute top-0 left-0 z-30 w-screen h-screen bg-black/50 flex flex-col justify-center items-center generateBackground"
          onClick={toggleGenerate}
        >
          <div className="w-[500px] bg-black p-8 text-center rounded-2xl">
            <p className="text-white text-2xl">
              <strong className="text-primary">{name + " "}</strong>
              stack
            </p>

            <div className="flex flex-wrap gap-4 pt-8 justify-center">
              {generateArray.map((item, index) => (
                <div
                  className="flex flex-col items-center"
                  key={index}
                >
                  <div
                    className="bg-white rounded-full w-16 h-16 flex justify-center items-center overflow-hidden"
                    key={index}
                  >
                    <Image
                      src={item.imagem}
                      width={100}
                      height={100}
                      className="object-contain p-2"
                      alt={item.nome}
                    />
                  </div>
                  <p className="text-white font-light">{item.nome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
