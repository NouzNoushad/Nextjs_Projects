import React from 'react'
import { ArrowLeft, ArrowRight } from './svgs'

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {

    const getPaginationRange = () => {
        const range: (number | string)[] = []

        if (currentPage > 2) {
            range.push(1)
            if (currentPage > 3) {
                range.push('...')
            }
        }

        const start = Math.max(1, currentPage - 1)
        const end = Math.min(totalPages, currentPage + 1)

        for (let i = start; i <= end; i++) {
            range.push(i)
        }

        if (currentPage < totalPages - 1) {
            if (currentPage < totalPages - 2) {
                range.push('...')
            }
            range.push(totalPages)
        }

        return range;
    }

    const handlePageChange = (page: number | string) => {
        if (typeof page === 'number') {
            onPageChange(page)
        }
    }

    const paginationRange = getPaginationRange()

    return (
        <div className="my-8 flex flex-row items-center justify-center gap-1">
            <button onClick={() => currentPage > 1 && onPageChange(currentPage - 1)} className="px-2 py-2 w-[35px] h-[40px] rounded-md transition-all duration-300 hover:bg-gray-200 flex items-center justify-center"
                disabled={currentPage === 1}>
                <ArrowLeft className="size-4" />
            </button>

            {
                paginationRange.map((page, index) => (
                    <button onClick={() => handlePageChange(page)} key={index} className={`px-2 py-2 w-[35px] h-[40px] rounded-md transition-all duration-300 hover:bg-gray-100 text-[0.9rem] ${currentPage === page ? 'bg-gray-200' : 'bg-white'}`}>
                        {page}</button>
                ))
            }
            <button onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)} className="px-2 py-2 w-[35px] h-[40px] rounded-md transition-all duration-300 hover:bg-gray-200 flex items-center justify-center"
                disabled={currentPage === totalPages}>
                <ArrowRight className="size-4" />
            </button>
        </div>
    )
}
