import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)

        const products = await Product.find()
        return NextResponse.json({ message: "connected", success: true, products })
    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 500 })
    }
}

export async function POST(req, res) {
    await mongoose.connect(process.env.CONNECTION_STRING)

    const payload = await req.json()
    if (!payload.name || !payload.company || !payload.color || !payload.category || !payload.price) {
        return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
    }
    const product = new Product(payload)
    const data = await product.save()

    return NextResponse.json({ message: "Added", success: true, data }, { status: 200 })
}