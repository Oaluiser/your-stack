export default function Header() {
  return (
    <header className="flex justify-between items-center font-bold px-8 h-[5vh] my-[1vh]">
      <div>
        <p>
          <em className="text-primary not-italic">your</em>stack.com
        </p>
      </div>
      <div className="px-4 bg-primary rounded-full">
        <p>generate</p>
      </div>
    </header>
  )
}
