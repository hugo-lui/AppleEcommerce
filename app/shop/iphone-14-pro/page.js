"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import pictures from "../../../public/iPhone14Pro.json";

const ShopIPhone14Pro = () => {
    const [inStock, setStock] = useState(true);

    const handleClick = (e) => {
        console.log('hi')
    }

    useEffect(() => {
        async function getStock() {
            try{
                const response = await fetch("/api/products?product=phone&level=iphone-14-pro&param=stock");
                if(response.ok) {
                    const jsonResponse = await response.json();
                    setStock(jsonResponse > 0);
                }
                else {
                    console.log("Error")
                }
            }
            catch(error) {
                console.log(error);
            }
        }
        console.log();
        getStock();
    });

    return (
        <div>
            <div className="pl-96">
                <p className="text-amber-600 pt-16">New</p>
                <h1 className="font-bold text-5xl pt-1">Buy iPhone 14 Pro</h1>
                <p className="pt-6">$58.29/mo. for 24 mo. or $1,399.00</p>
                <Image className="rounded-2xl mt-3" width={1000} height={100} src={pictures.first} alt=""/>
                <Image className="rounded-2xl mt-3" width={1000} height={100} src={pictures.second} alt=""/>
                <Image className="rounded-2xl mt-3" width={1000} height={100} src={pictures.third} alt=""/>
                <button className={inStock ? "my-16 text-white bg-blue-600 rounded-md px-24 py-2" : "my-16 text-white bg-gray-300 rounded-md px-24 py-2"} onClick={handleClick} disabled={!inStock}>Add to Bag</button>
            </div>      
        </div>
    );
}

export default ShopIPhone14Pro;