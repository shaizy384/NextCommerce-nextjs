import { useState } from "react"

const ProductForm = ({ product, setProduct, handleSubmit, update, params }) => {
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    // ----------For uploading Image Start----------
    const [file, setFile] = useState('')
    const handleImage = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.set('file', file)
        const res = await fetch(`${process.env.HOST}/routes/upload/`, {
            method: 'POST',
            body: data
        })
        const json = await res.json()
        alert(json.message)
    }
    // ----------For uploading Image End----------

    const handleClick = () => {
        handleSubmit(setLoading)
    }

    return (
        <>
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Product name</label>
                    <div className="mt-2">
                        <input name="name" id="name" type="text" value={product.name} onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                {/* ----------For uploading Image Start---------- */}
                <div>
                    <label htmlFor="file" className="block text-sm font-medium leading-6 text-gray-900">Image</label>
                    <div className="mt-2">
                        <input name="file" id="file" type="file" onChange={(e) => setFile(e.target.files?.[0])} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                    <button type="submit" onClick={handleImage} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Upload
                    </button>
                </div>
                {/* ----------For uploading Image End---------- */}

                <div>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                    <div className="mt-2">
                        <input name="price" id="price" type="price" value={product.price} onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">Company</label>
                    <div className="mt-2">
                        <input name="company" id="company" type="company" value={product.company} onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                    <div className="mt-2">
                        <input name="category" id="category" type="category" value={product.category} onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">Color</label>
                    <div className="mt-2">
                        <input name="color" id="color" type="color" value={product.color} onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <button type="submit" onClick={handleClick} className={"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " + (loading && "cursor-not-allowed")} disabled={loading && true}>
                        {loading ?
                            <svg class="animate-spin h-5 w-5 m-0.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg> :
                            (update ? 'Update Product' : 'Add Product')
                        }
                    </button>
                </div>
            </form>
        </>
    )
}

export default ProductForm