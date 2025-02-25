'use client'

import { useProductsStore } from '@/context/Store/ProductStore'
import { Product } from '@/interface/ProductInterface'
import { LIMIT } from '@/lib/Constants'
import Image from 'next/image'
import React from 'react'

export default function ProductsTable({products}: {products: Product[]}) {
    const {currentPage} = useProductsStore()
    
    const paginatedItems = products.slice(
        (currentPage - 1) * LIMIT,
        currentPage * LIMIT
    )

  return (
      <table className='w-full border-collapse'>
          <thead>
              <tr className='border-b-[1px] border-dashed'>
                  <th className='min-w-[200px] text-start font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Product</span></th>
                  <th className='min-w-[100px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>SKU</span></th>
                  <th className='min-w-[70px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Qty</span></th>
                  <th className='min-w-[100px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Price</span></th>
                  <th className='min-w-[100px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Rating</span></th>
                  <th className='min-w-[100px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Status</span></th>
                  <th className='min-w-[70px] text-end font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Actions</span></th>
              </tr>
          </thead>
          <tbody>
              {/* Products */}
              {
                  paginatedItems.map((product, index) => (
                      <tr key={index} className={`${index !== 9 ? "border-b-[1px] border-dashed" : ""}`}>
                          <td className='py-4 flex items-center space-x-4'>
                              <div className='h-11 w-11 bg-gray-100 rounded-md'>
                                  <Image src={`http://localhost:8004/uploads/${product.thumbnail_name}`} height={100} width={100} alt='Thumbnail' className='h-full w-full rounded-md' />
                              </div>
                              <div className='text-sm font-semibold'>{product.name}</div>
                          </td>
                          <td className='py-4 text-end'>
                              <div className='text-sm font-semibold text-gray-500'>{product.sku_number}</div>
                          </td>
                          <td className='py- text-end'>
                              <div className='text-sm font-semibold text-gray-500'>{product.on_shelf}</div>
                          </td>
                          <td className='py-4 text-end'>
                              <div className='text-sm font-semibold text-gray-500'>{product.price}</div>
                          </td>
                          <td className='py-4 text-end'>
                              <div className='text-sm font-semibold'>5</div>
                          </td>
                          <td className='py-4 text-end'>
                              <div className='text-[11px] font-semibold bg-green-100 text-green-500 inline-block p-1 rounded-md'>{product.status}</div>
                          </td>
                          <td className='py-4 text-end'>
                              <div className='inline-flex items-center justify-end space-x-2 bg-gray-100 px-3 py-2 rounded-md'>
                                  <span className='text-xs font-medium'>Actions</span>
                                  <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                  </span>
                              </div>
                          </td>
                      </tr>
                  ))
              }
          </tbody>
      </table>
  )
}
