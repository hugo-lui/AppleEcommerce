"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import pictures from "../../../public/pictures.json";

const ShopIPhone14Pro = ({ params }) => {
    const [inStock, setStock] = useState(true);
    const [price, setPrice] = useState(0);
    const [name, setName] = useState("");

    const handleClick = (e) => {
        console.log(params.product);
    }

    useEffect(() => {
        async function getStock() {
            try{
                const response = await fetch(`/api/products?product=${params.product}`);
                if(response.ok) {
                    const jsonResponse = await response.json();
                    setStock(jsonResponse.stock > 0);
                    setPrice(jsonResponse.price);
                    setName(jsonResponse.name);
                }
                else {
                    console.log("Item not found.")
                }
            }
            catch(error) {
                console.log(error);
            }
        }
        getStock();
    }, []);

    return (
        <div>
            <div className="pl-96">
                <p className="text-amber-600 pt-16">New</p>
                <h1 className="font-bold text-5xl pt-1">Buy {name}</h1>
                <p className="pt-6">${Math.round((price / 24) * 100) / 100}/mo. for 24 mo. or ${price}</p>
                <Image className="rounded-2xl mt-3" width={1000} height={100} src={pictures[params.product].first} alt=""/>
                {pictures[params.product].second == null ? null : <Image className="rounded-2xl mt-3" width={1000} height={100} src={pictures[params.product].second} alt=""/>}
                {pictures[params.product].third == null ? null : <Image className="rounded-2xl mt-3" width={1000} height={100} src={pictures[params.product].third} alt=""/>}
                <button className={inStock ? "my-16 text-white bg-blue-600 rounded-md px-24 py-2" : "my-16 text-white bg-gray-300 rounded-md px-24 py-2"} onClick={handleClick} disabled={!inStock}>{inStock ? "Add to Bag" : "Out of Stock"}</button>
            </div>      
        </div>
    );
}

export default ShopIPhone14Pro;