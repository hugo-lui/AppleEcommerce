import { NextResponse } from "next/server";

export async function GET(request) {
  let items = {"MacBook Air": {price: 1299, stock: 1}, "MacBook Pro": {price: 2599, stock: 1}, "iMac": {price: 1949, stock: 1}};
  const { product } = request.body;
  return NextResponse.json(items.product);
}