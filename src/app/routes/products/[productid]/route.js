import { Product } from "@/lib/model/product"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function PUT(req, res) {
    await mongoose.connect(process.env.CONNECTION_STRING)

    const _id = res.params.productid
    const payload = await req.json()

    let product = await Product.findById(_id)
    if (!product) { return NextResponse.json({ message: "Product not found" }, { status: 404 }) }

    product = await Product.findOneAndUpdate({_id}, payload)

    return NextResponse.json({ message: "Product updated successfuly", success: true, product })
}

export async function DELETE(req, res) {
    await mongoose.connect(process.env.CONNECTION_STRING)

    const id = res.params.productid

    let product = await Product.findById(id)
    if (!product) { return NextResponse.json({ message: "Product not found" }, { status: 404 }) }

    product = await Product.findByIdAndDelete(id)

    return NextResponse.json({ message: "Product deleted successfuly", success: true, product })
}

export async function GET(req, res) {
    await mongoose.connect(process.env.CONNECTION_STRING)

    const id = res.params.productid

    let product = await Product.findById(id)
    if (!product) { return NextResponse.json({ message: "Product not found" }, { status: 404 }) }

    product = await Product.findByIdAndUpdate(id)

    return NextResponse.json({ message: "Product Found", success: true, product })
}