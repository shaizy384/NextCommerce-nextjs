import Link from "next/link"
import DeleteProduct from "./DeleteProduct"

export default function ProductList({ _id, name, price, company, category, color }) {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="h-12 w-12 flex-none rounded-full bg-gray-50" style={{ backgroundColor: `${color}` }} alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{company} - $ {price}</p>
                    </div>
                </div>
                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                    <div className="text-sm leading-6 text-gray-900 flex">
                        <Link href={`products/${_id}`} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 mx-1">Edit</Link>
                        <div>
                            <DeleteProduct id={_id} />
                        </div>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                        Category {category}
                    </p>
                </div>
            </li>
        </ul>
    )
}