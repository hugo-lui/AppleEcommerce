import Link from "next/link";
import Image from "next/image";
import FourPhones from "../public/assets/FourPhones.JPG";
import Watch from "../public/assets/WatchUltraHome.JPG";
import iPad from "../public/assets/iPadHome.JPG";
import Airpods from "../public/assets/AirpodsHome.JPG";
import MacBook from "../public/assets/MacbookHome.JPG";

export default function Home() {
  return (
    <div>
      <div className="bg-black text-white text-center">
        <h1 className="pt-10 font-bold text-4xl">iPhone 14 Pro</h1>
        <h2 className="pt-2 text-2xl">Pro. Beyond.</h2>
        <div className="p-4">
          <Link href="/iphone" className="text-blue-400 text-lg mr-4">Learn more &gt;</Link>
          <Link href="/shop/iphone-14-pro" className="text-blue-400 text-lg">Buy &gt;</Link>
        </div>
        <div className="block m-auto w-1/2"><Image src={FourPhones} alt="FourPhones"/></div>
      </div>
      <div className="grid grid-cols-2 text-center text-xl">
        <div className="m-2 bg-white text-black">
          <h1 className="pt-8 text-2xl font-bold">Watch Ultra</h1>
          <h2 className="">Pioneering engineering.</h2>
          <div className="p-4">
            <Link href="/watch" className="text-blue-400 text-lg mr-4">Learn more &gt;</Link>
            <Link href="/" className="text-blue-400 text-lg">Buy &gt;</Link>
          </div>
          <div className="block m-auto w-1/2"><Image src={Watch} alt="WatchUltraHome"/></div>
        </div>
        <div className="m-2 bg-black text-white">
          <h1 className="pt-8 text-2xl font-bold">MacBook Pro</h1>
          <h2 className="">Supercharged by M2 Pro.</h2>
          <div className="p-4">
            <Link href="/mac" className="text-blue-400 text-lg mr-4">Learn more &gt;</Link>
            <Link href="/shop/macbook-pro" className="text-blue-400 text-lg">Buy &gt;</Link>
          </div>
          <div className="block m-auto w-1/2"><Image src={MacBook} alt="MacBookHome"/></div>
        </div>
        <div className="m-2 bg-black text-white">
          <h1 className="pt-8 text-2xl font-bold">Airpods Pro 2</h1>
          <h2 className="">Wireless. Effortless. Magical</h2>
          <div className="p-4">
            <Link href="/airpods" className="text-blue-400 text-lg mr-4">Learn more &gt;</Link>
            <Link href="/" className="text-blue-400 text-lg">Buy &gt;</Link>
          </div>
          <div className="block m-auto w-1/2"><Image src={Airpods} alt="AirpodsHome"/></div>
        </div>
        <div className="m-2 bg-white text-black">
          <h1 className="pt-8 text-2xl font-bold">iPad</h1>
          <h2 className="">Lovable. Drawable. Magical.</h2>
          <div className="p-4">
            <Link href="/ipad" className="text-blue-600 text-lg mr-4">Learn more &gt;</Link>
            <Link href="/" className="text-blue-600 text-lg">Buy &gt;</Link>
          </div>
          <div className="block m-auto w-1/2"><Image src={iPad} alt="iPadHome"/></div>
        </div>
      </div>
    </div>
  );
}