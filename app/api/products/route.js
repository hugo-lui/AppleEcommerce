import { NextResponse } from "next/server";

const computer = {"macbook-air": {"price": 1299.00, "stock": 1}, "macbook-pro": {"price": 2599.00, "stock": 1}, "imac": {"price": 1949.00, "stock": 1}};
const phone = {"iphone-14-pro": {"price": 1399.00, "stock": 1}, "iphone-14": {"price": 1099.00, "stock": 1}, "iphone-13": {"price": 849.00, "stock": 1}, "iphone-se": {"price": 579.00, "stock": 1}};
const items = {"computer": computer, "phone": phone};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const product = searchParams.get("product");
  const level = searchParams.get("level");
  const param = searchParams.get("param");

  return NextResponse.json(items[product][level][param]);
}

export async function POST(request) {
  
}

export async function PUT(request) {
  
}