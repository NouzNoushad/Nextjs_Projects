'use client'

import { CatalogType } from '@/lib/Constants'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function CatalogLink() {
    const [showCatalog, setShowCatalog] = useState(true)
    const [selectedCatalog, setSelectedCatalog] = useState<CatalogType>(CatalogType.AddProduct)

    const router = useRouter()

    const handleShowCatalog = () => setShowCatalog(!showCatalog)

    const handleCatalogChange = (catalog: CatalogType, path: string) => {
        setSelectedCatalog(catalog)
        router.push(path)
    }

    useEffect(() => {
        router.push("/add-product")
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
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Products</span>
                </a>
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Categories</span>
                </a>
                <button onClick={() => handleCatalogChange(CatalogType.AddProduct, "/add-product")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full ${selectedCatalog == CatalogType.AddProduct ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`block w-1 h-1 group-hover:bg-white rounded-full ${selectedCatalog == CatalogType.AddProduct ? "bg-white" : "bg-gray-400"}`}></span>
                    <span className={`text-[13px] font-normal group-hover:text-white ${selectedCatalog == CatalogType.AddProduct ? "text-white" : "text-gray-400"}`}>Add Product</span>
                </button>
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Edit Product</span>
                </a>
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Products</span>
                </a>
                <button onClick={() => handleCatalogChange(CatalogType.AddCategory, "/add-category")} className={`nav-link group group-transition-colors group-duration-300 focus:outline-none focus:ring-0 w-full ${selectedCatalog == CatalogType.AddCategory ? "bg-primary-light" : "bg-transparent"}`}>
                    <span className={`block w-1 h-1 group-hover:bg-white rounded-full ${selectedCatalog == CatalogType.AddCategory ? "bg-white" : "bg-gray-400"}`}></span>
                    <span className={`text-[13px] font-normal group-hover:text-white ${selectedCatalog == CatalogType.AddCategory ? "text-white" : "text-gray-400"}`}>Add Category</span>
                </button>
                <a href="#" className='nav-link group group-transition-colors group-duration-300 focus:bg-primary-light'>
                    <span className='block w-1 h-1 bg-gray-400 group-focus:bg-white group-hover:bg-white rounded-full'></span>
                    <span className='text-[13px] font-normal'>Edit Category</span>
                </a>
            </div>
        </div>
    )
}
