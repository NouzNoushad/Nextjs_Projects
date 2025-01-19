import React from 'react'
import { CompletedIcon, InProgressIcon, OnHoldIcon, OnReviewIcon, TasksIcon } from './Icons'

export default function Sidebar() {
    return (
        <div className="w-1/5 h-full primary-color">
            <div className="px-5 py-5">
                <h1 className='text-green text-[1.4rem] font-[500]'>Task Manager</h1>
                <ul className='mt-8 space-y-4'>
                    <li className='py-2 px-2 rounded-lg bg-green'><a href="" className='flex flex-row gap-3'>
                        <TasksIcon className='size-6' />
                        Tasks</a></li>
                    <li className='py-2 px-2 rounded-lg bg-transparent'><a href="" className='flex flex-row gap-3'>
                        <CompletedIcon className='size-6' />
                        Completed</a></li>
                    <li className='py-2 px-2 rounded-lg bg-transparent'><a href="" className='flex flex-row gap-3'>
                        <InProgressIcon className='size-6' />
                        In Progress</a></li>
                    <li className='py-2 px-2 rounded-lg bg-transparent'><a href="" className='flex flex-row gap-3'>
                        <OnReviewIcon className='size-6' />
                        On Review</a></li>
                    <li className='py-2 px-2 rounded-lg bg-transparent'><a href="" className='flex flex-row gap-3'>
                        <OnHoldIcon className='size-6' />
                        On Hold</a></li>
                </ul>
            </div>
        </div>
    )
}
