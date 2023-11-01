// "use client"
import ProductList from "@/components/ProductList";
import Link from "next/link";
// import { useEffect, useState } from "react";

    const getProducts = async () => {
        console.log('env',process.env.HOST);
        const data = await fetch(`${process.env.HOST}/routes/products`, { cache: "no-store" })
        return await data.json()
        // console.log(process.env.HOST);
    }
export default async function Products() {
        console.log(process.env.HOST);
        const products = await getProducts()
    // const [products, setProducts] = useState('')
    // const getProducts = async () => {
    //     const data = await fetch(`/routes/products`, { cache: "no-store" })
    //     const json = await data.json()
    //     setProducts(json)
    //     // console.log(process.env.HOST);
    // }
    // // console.log(process.env.HOST);
    // useEffect(() => {
    //     getProducts()
    //     // eslint-disable-next-line
    // }, [])
    return (
        <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
            <div className="mx-">
                <h1 className="text-3xl my-3">Products list</h1>
                {products?.products?.map(product => {
                    return <ProductList key={product._id} {...product} />
                })}
                <div className="mt-10">
                    <Link href={`/`} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 mx-1">&larr; Back to homepage</Link>
                </div>
            </div>
        </main>
    )
}