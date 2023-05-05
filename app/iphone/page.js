import Link from "next/link";

export default function IPhone() {
  return (
    <div>
      <div className="text-center">
            <header className="p-2 bg-neutral-100 text-black space-x-16  text-sm">
                <Link className="hover:text-blue-600" href="/shop/iphone-14-pro">iPhone 14 Pro</Link>
                <Link className="hover:text-blue-600" href="/shop/iphone-14">iPhone 14</Link>
                <Link className="hover:text-blue-600" href="/shop/iphone-13">iPhone 13</Link>
                <Link className="hover:text-blue-600" href="/shop/iphone-se">iPhone SE</Link>
            </header>
        </div>
    </div>
  );
}