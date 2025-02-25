import React from 'react'

export default function ProductsHeader() {
  return (
      <div className="flex items-center justify-between mb-10">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-md px-2 py-2">
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#888] group-hover:text-green-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
              </span>
              <span>
                  <input type="text" placeholder='Search Product' className='text-sm p-1 bg-transparent focus:outline-none focus:ring-0' />
              </span>
          </div>
          <div className="flex w-1/3 items-center justify-end space-x-3">
              <div className="relative w-1/2 ">
                  <select name="" id="" className='w-full px-2 py-3 appearance-none rounded-md bg-gray-100 focus:outline-none focus:ring-0 text-sm'>
                      <option value="">All</option>
                      <option value="">Published</option>
                      <option value="">Scheduled</option>
                      <option value="">Inactive</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                  </div>
              </div>
              <button className='bg-green-500 text-white px-5 py-3 rounded-md text-sm font-medium focus:outline-none foucs:ring-0 transition-colors hover:bg-green-600'>Add Product</button>
          </div>
      </div>
  )
}
