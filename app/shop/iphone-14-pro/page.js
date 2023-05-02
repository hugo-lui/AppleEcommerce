import Image from "next/image";
import pictures from "../../../public/iPhone14Pro.json";

export default function BuyIPhone14Pro() {
    return (
        <div>
            <div className="pl-32">
                <p className="text-amber-600 pt-20">New</p>
                <h1 className="font-bold text-5xl pt-1">Buy iPhone 14 Pro</h1>
                <p className="pt-6">$58.29/mo. for 24 mo. or $1,399.00</p>
            </div>
        </div>
    );
}