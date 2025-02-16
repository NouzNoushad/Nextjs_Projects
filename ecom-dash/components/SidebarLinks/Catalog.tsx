'use client'

import { useGlobalState } from '@/context/GlobalContext'
import { LinksType } from '@/lib/Constants'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function CatalogLink() {
    const [showCatalog, setShowCatalog] = useState(true)
    const {selectedLink, setSelectedLink } = useGlobalState()

    const router = useRouter()

    const handleShowCatalog = () => setShowCatalog(!showCatalog)

    const handleCatalogChange = (catalog: LinksType, path: string) => {
        setSelectedLink(catalog)
        router.push(path)
    }

    useEffect(() => {
        router.push('/')
    }, [router])

    return (
        <div>
            <button onClick={handleShowCatalog} className="w-full px-2 py-2 transition-colors hover:bg-primary-light rounded-md flex items-center justify-between focus:outline-none focus:ring-0">
                <span className='text-sm font-medium'>Catalog</span>
                <span className='ml-auto'>
                    <svg
                        className={`w-4 h-4 transition-transform transform ${showCatalog ? "rotate-180" : "rotate-0"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            {/* Sub Nav */}
            <div className={`mt-1 px-4 space-y-1 transition-transform ${showCatalog ? "overflow-y-auto" : "hidden overflow-y-hidden"}`}>
                {/* Products */}
                <button onClick={() => handleCatalogChange(LinksType.Products, "/")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full ${selectedLink == LinksType.Products ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`block w-1 h-1 group-hover:bg-white rounded-full ${selectedLink == LinksType.Products ? "bg-white" : "bg-gray-400"}`}></span>
                    <span className={`text-[13px] font-normal group-hover:text-white ${selectedLink == LinksType.Products ? "text-white" : "text-gray-400"}`}>Products</span>
                </button>
                {/* Categories */}
                <button onClick={() => handleCatalogChange(LinksType.Categories, "/products/categories")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full ${selectedLink == LinksType.Categories ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`block w-1 h-1 group-hover:bg-white rounded-full ${selectedLink == LinksType.Categories ? "bg-white" : "bg-gray-400"}`}></span>
                    <span className={`text-[13px] font-normal group-hover:text-white ${selectedLink == LinksType.Categories ? "text-white" : "text-gray-400"}`}>Categories</span>
                </button>
                {/* Add Product */}
                <button onClick={() => handleCatalogChange(LinksType.AddProduct, "/products/add-product")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full ${selectedLink == LinksType.AddProduct ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`block w-1 h-1 group-hover:bg-white rounded-full ${selectedLink == LinksType.AddProduct ? "bg-white" : "bg-gray-400"}`}></span>
                    <span className={`text-[13px] font-normal group-hover:text-white ${selectedLink == LinksType.AddProduct ? "text-white" : "text-gray-400"}`}>Add Product</span>
                </button>
                {/* Edit Product */}
                <button onClick={() => handleCatalogChange(LinksType.EditProduct, "/products/edit-product")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full ${selectedLink == LinksType.EditProduct ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`block w-1 h-1 group-hover:bg-white rounded-full ${selectedLink == LinksType.EditProduct ? "bg-white" : "bg-gray-400"}`}></span>
                    <span className={`text-[13px] font-normal group-hover:text-white ${selectedLink == LinksType.EditProduct ? "text-white" : "text-gray-400"}`}>Edit Product</span>
                </button>
                {/* Add Category */}
                <button onClick={() => handleCatalogChange(LinksType.AddCategory, "/products/add-category")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full ${selectedLink == LinksType.AddCategory ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`block w-1 h-1 group-hover:bg-white rounded-full ${selectedLink == LinksType.AddCategory ? "bg-white" : "bg-gray-400"}`}></span>
                    <span className={`text-[13px] font-normal group-hover:text-white ${selectedLink == LinksType.AddCategory ? "text-white" : "text-gray-400"}`}>Add Category</span>
                </button>
                {/* Edit Category */}
                <button onClick={() => handleCatalogChange(LinksType.EditCategory, "/products/edit-category")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full ${selectedLink == LinksType.EditCategory ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`block w-1 h-1 group-hover:bg-white rounded-full ${selectedLink == LinksType.EditCategory ? "bg-white" : "bg-gray-400"}`}></span>
                    <span className={`text-[13px] font-normal group-hover:text-white ${selectedLink == LinksType.EditCategory ? "text-white" : "text-gray-400"}`}>Edit Category</span>
                </button>
            </div>
        </div>
    )
}
