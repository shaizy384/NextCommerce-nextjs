"use client"
import { useRouter } from "next/navigation"

const DeleteProduct = ({ id }) => {
    const router = useRouter()

    const handleDelete = async () => {
        // console.log(process.env.HOST);
        let response = await fetch(`/routes/products/${id}`, {
            method: 'DELETE'
        })
        response = await response.json()
        alert(response.message)
        if (response.success) {
            router.push('/products')
            router.refresh()
        }
    }

    return (
        <>
            <button onClick={handleDelete} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 mx-1">Delete</button>
        </>
    )
}

export default DeleteProduct