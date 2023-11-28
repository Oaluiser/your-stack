"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function BottomContainer({ database, toggle }) {
  const [stackArray, setStackArray] = useState([])

  useEffect(() => {
    setStackArray(JSON.parse(localStorage.getItem("stackArray")))
  },[])

  return (
    <div
      className={
        "mx-3 mt-[1vh] bg-white/80 rounded-t-2xl h-[5vh] toggleBottom transition-all duration-300"
      }
    >
      <div className="pt-3">
        <div
          className="flex justify-center pb-2"
          onClick={toggle}
        >
          <Image
            src="/chevron.svg"
            width={40}
            height={40}
            alt="chevron"
            className="chevron transition-all duration-300 delay-150"
          />
        </div>

        <div className="flex gap-3 w-full px-4">
          {stackArray.length !== 0 && localStorage.getItem("toggle") === "true"
            ? stackArray.map((item, index) => (
                <div
                  className="bg-white rounded-full w-16 h-16 flex justify-center items-center"
                  key={index}
                >
                  {database.map((item2) => {
                    if (item2.nome === item) {
                      return (
                        <Image
                          src={item2.imagem}
                          width={100}
                          height={100}
                          className="object-contain p-2"
                          alt={item2.nome}
                          key={index}
                        />
                      )
                    }
                  })}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}
