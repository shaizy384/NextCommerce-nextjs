"use client";
import ProductForm from "@/components/ProductForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Addproduct({ params }) {
    const router = useRouter()
    const [product, setProduct] = useState({ name: '', price: '', company: '', category: '', color: '' })

    const getProduct = async () => {
        let response = await fetch(`${process.env.HOST}/routes/products/${params.updateproduct}`, {
            method: 'GET',
        })
        response = await response.json()
        const { name, price, company, category, color } = response.product
        setProduct({ name, price, company, category, color })
    }

    useEffect(() => {
        getProduct()
        // eslint-disable-next-line
    }, [])

    const handleSubmit = async (setLoading) => {
        setLoading(true)
        let response = await fetch(`${process.env.HOST}/routes/products/${params.updateproduct}`, {
            method: 'PUT',
            body: JSON.stringify({ name: product.name, price: product.price, company: product.company, category: product.category, color: product.color })
        })
        response = await response.json()
        alert(response.message)
        if (response.success) {
            setProduct({ name: '', price: '', company: '', category: '', color: '' })
            router.push('/products')
            router.refresh()
        }
        setLoading(true)
    }

    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Update Product
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <ProductForm product={product} setProduct={setProduct} handleSubmit={handleSubmit} update="Update" />
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Go to the{' '}
                        <Link href="/products" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Products List
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}