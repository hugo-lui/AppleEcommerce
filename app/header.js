import Link from "next/link";

export default function Header() {
    return (
        <div className="text-center">
            <header className="p-2 bg-neutral-600 space-x-16 text-gray-200">
                <Link href="/">Home</Link>
                <Link href="/mac">Mac</Link>
                <Link href="/ipad">iPad</Link>
                <Link href="/iphone">iPhone</Link>
                <Link href="/watch">Watch</Link>
                <Link href="/airpods">Airpods</Link>
                <Link href="/cart">Cart</Link>
            </header>
        </div>
    );
}