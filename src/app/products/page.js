import ProductList from "@/components/ProductList";
import Link from "next/link";

    const getProducts = async () => {
        const data = await fetch(`${process.env.HOST}/routes/products`, { cache: "no-store" })
        return await data.json()
    }
export default async function Products() {
        const products = await getProducts()
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