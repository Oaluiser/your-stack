import Image from "next/image"

export default function MainModal({ toggle }) {
  return (
    <div
      className="absolute w-screen h-screen left-0 top-0 bg-black z-20 flex flex-col justify-between cursor-pointer"
      onClick={toggle}
    >
      <div></div>
      <div className="flex justify-center items-center">
        <p className="text-7xl font-black text-white">
          pick <strong className="text-primary">your</strong> stack!
        </p>
      </div>
      <div className="flex justify-center pb-3">
        <Image
          src="/mainChevron.svg"
          width={40}
          height={40}
          alt="chevron"
          className="transition-all duration-300 delay-150 rotate-180"
        />
      </div>
    </div>
  )
}
