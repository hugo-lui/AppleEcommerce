import Link from "next/link"
import Image from "next/image"
import FourPhones from "../public/assets/FourPhones.JPG"

export default function Home() {
  return (
    <div>
      <div className="bg-black text-white text-center">
        <h1 className="pt-10 font-bold text-4xl">iPhone 14 Pro</h1>
        <h2 className="pt-2 text-2xl">Pro. Beyond.</h2>
        <div className="p-4">
          <Link href="/iphone" className="text-blue-400 text-lg mr-4">Learn more &gt;</Link>
          <Link href="/" className="text-blue-400 text-lg">Buy &gt;</Link>
        </div>
        <div className="block m-auto w-1/2"><Image src={FourPhones} alt="FourPhones"/></div>
      </div>
      <div className="grid grid-cols-2">
        <div className="m-2 bg-black"><h1 className="text-white font-bold">Watch Ultra</h1></div>
        <div className="m-2 bg-white"><h1 className="text-black font-bold">iPad</h1></div>
        <div className="m-2 bg-black"><h1 className="text-white font-bold">MacBook Pro</h1></div>
        <div className="m-2 bg-black"><h1 className="text-white font-bold">Airpods Pro 2</h1></div>
      </div>
    </div>
  )
}