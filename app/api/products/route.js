import { NextResponse } from "next/server";

const items = {"macbook-air": {"price": 1299, "stock": 1, "name": "M2 MacBook Air"}, "macbook-pro": {"price": 2599, "stock": 1, "name": "M2 MacBook Pro"}, "imac": {"price": 1949, "stock": 1, "name": "iMac"}, "iphone-14-pro": {"price": 1399, "stock": 1, "name": "iPhone 14 Pro"}, "iphone-14": {"price": 1099, "stock": 1, "name": "iPhone 14"}, "iphone-13": {"price": 849, "stock": 1, "name": "iPhone 13"}, "iphone-se": {"price": 579, "stock": 1, "name": "iPhone SE"}};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const product = searchParams.get("product");

  return NextResponse.json(items[product]);
}

export async function POST(request) {
  
}

export async function PUT(request) {
  
}

export async function DELETE(request) {

}