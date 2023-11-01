import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req, res) {
    const data = await req.formData()
    const file = await data.get('file')
    if (!file) {
        return NextResponse.json({ message: "No image found" }, { status: 404 })
    }

    const byteData = await file.arrayBuffer()
    const buffer = Buffer.from(byteData)
    const path = `./src/uploads/${file.name}`
    await writeFile(path, buffer)

    return NextResponse.json({ message: "Image Uploaded", success: true, data:path })
}