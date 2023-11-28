import Image from "next/image"

export default function MainModal({ toggle }) {
  return (
    <div className="bg-black">
      <Image
        src="/background.png"
        width={1200}
        height={1200}
        alt="texture"
        className="absolute top-0 left-0 z-20 bg-black w-screen h-screen"
      />
      <div className="absolute w-screen h-screen left-0 top-0 z-20 flex flex-col justify-between cursor-pointer">
        <div></div>
        <div className="flex justify-center items-center">
          <p className="text-7xl font-black text-white">
            pick <strong className="text-primary">your</strong> stack!
          </p>
        </div>
        <div className="flex justify-center pb-3 animate-bounce">
          <Image
            src="/mainChevron.svg"
            width={40}
            height={40}
            alt="chevron"
            className="transition-all duration-300 delay-150 rotate-180"
            onClick={toggle}
          />
        </div>
      </div>
    </div>
  )
}
