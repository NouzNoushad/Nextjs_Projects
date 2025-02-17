'use client'

import React from 'react'

export default function OrderTable() {

    const items = Array.from({ length: 100 }, (_, i) => i + 1)

    return (
        <div className="w-full overflow-x-auto mt-4  h-[500px] overflow-y-auto scrollbar">
            <table className='w-full border-collapse relative'>
                <thead>
                    <tr className='sticky bg-white top-0 w-full border-b-[1px] border-dashed'>
                        <th className='min-w-[200px] text-start font-semibold text-[13px] uppercase py-4 text-gray-400'><span>Product</span></th>
                        <th className='min-w-[100px] font-semibold text-[13px] uppercase py-4 text-gray-400 text-end pr-2'><span>Qty remaining</span></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Orders */}
                    {
                        items.map((item, index) => (
                            <tr key={index} className={`${index !== 9 ? "border-b-[1px] border-dashed" : ""}`}>
                                <td className='py-4 flex items-center space-x-4'>
                                    <div className='h-11 w-11 bg-gray-100 rounded-md'></div>
                                    <div className="space-y-1">
                                        <div className='text-sm font-semibold'>{`Product ${item}`}</div>
                                        <p className='text-[13px] text-gray-400'>Price: $42.00</p>
                                        <h6 className='text-[13px] text-gray-400'>SKU: 025500060</h6>
                                    </div>
                                </td>
                                <td className='py-4 text-end pr-2'>
                                    <div className='text-sm font-semibold text-gray-500'>18</div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
