import { NextResponse } from "next/server";

export async function GET(request) {
  let laptop = {"MacBook Air": {price: 1299.00, stock: 1}, "MacBook Pro": {price: 2599.00, stock: 1}, "iMac": {price: 1949.00, stock: 1}};
  let phone = {"iPhone 14 Pro": {price: 1399.00, stock: 1}, "iPhone 14": {price: 1099.00, stock: 1}, "iPhone 13": {price: 849.00, stock: 1}, "iPhone SE": {price: 579.00, stock: 1}};
  const { product } = request.body;
  return NextResponse.json(phone.product.price);
}