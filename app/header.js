import Link from "next/link";

export default function Header() {
    return (
        <div className="text-center">
            <header className="p-2 bg-neutral-600 space-x-16">
                <Link className="text-gray-200" href="/">Home</Link>
                <Link className="text-gray-200" href="/mac">Mac</Link>
                <Link className="text-gray-200" href="/ipad">iPad</Link>
                <Link className="text-gray-200" href="/iphone">iPhone</Link>
                <Link className="text-gray-200" href="/watch">Watch</Link>
                <Link className="text-gray-200" href="/airpods">Airpods</Link>
                <Link className="text-gray-200" href="/cart">Cart</Link>
            </header>
        </div>
    )
}