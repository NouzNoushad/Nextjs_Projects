'use client'

import { LinksType } from '@/lib/Constants'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function SidebarLinks() {
    const [selectedLink, setSelectedLink] = useState<LinksType>(LinksType.Products)


    const router = useRouter()

    const handleCatalogChange = (catalog: LinksType, path: string) => {
        setSelectedLink(catalog)
        router.push(path)
    }

    useEffect(() => {
        router.push('/')
    }, [router])
    return (
        <nav className='flex-1 overflow-y-hidden hover:overflow-y-auto mt-5'>
            <div className="px-2 py-3 space-y-3">
                {/* Products */}
                <button onClick={() => handleCatalogChange(LinksType.Products, "/")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full px-2 py-2 rounded-md ${selectedLink == LinksType.Products ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`text-[13.5px] font-normal group-hover:text-white ${selectedLink == LinksType.Products ? "text-white" : "text-gray-400"}`}>Products</span>
                </button>
                {/* Categories */}
                <button onClick={() => handleCatalogChange(LinksType.Categories, "/categories")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full px-2 py-2 rounded-md ${selectedLink == LinksType.Categories ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`text-[13.5px] font-normal group-hover:text-white ${selectedLink == LinksType.Categories ? "text-white" : "text-gray-400"}`}>Categories</span>
                </button>
                {/* Add Product */}
                <button onClick={() => handleCatalogChange(LinksType.AddProduct, "/add-product")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full px-2 py-2 rounded-md ${selectedLink == LinksType.AddProduct ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`text-[13.5px] font-normal group-hover:text-white ${selectedLink == LinksType.AddProduct ? "text-white" : "text-gray-400"}`}>Add Product</span>
                </button>
                {/* Edit Product */}
                <button onClick={() => handleCatalogChange(LinksType.EditProduct, "/edit-product")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full px-2 py-2 rounded-md ${selectedLink == LinksType.EditProduct ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`text-[13.5px] font-normal group-hover:text-white ${selectedLink == LinksType.EditProduct ? "text-white" : "text-gray-400"}`}>Edit Product</span>
                </button>
                {/* Add Category */}
                <button onClick={() => handleCatalogChange(LinksType.AddCategory, "/add-category")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full px-2 py-2 rounded-md ${selectedLink == LinksType.AddCategory ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`text-[13.5px] font-normal group-hover:text-white ${selectedLink == LinksType.AddCategory ? "text-white" : "text-gray-400"}`}>Add Category</span>
                </button>
                {/* Edit Category */}
                <button onClick={() => handleCatalogChange(LinksType.EditCategory, "/edit-category")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full px-2 py-2 rounded-md ${selectedLink == LinksType.EditCategory ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`text-[13.5px] font-normal group-hover:text-white ${selectedLink == LinksType.EditCategory ? "text-white" : "text-gray-400"}`}>Edit Category</span>
                </button>
            </div>
        </nav>
    )
}
