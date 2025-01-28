'use client'

import React from 'react'
import { CompletedIcon, InProgressIcon, OnHoldIcon, OnReviewIcon, TasksIcon } from './Icons'
import { SidebarAction } from '@/actions/SidebarAction'
import { Task } from '@/interface/task_interface'
import { statusList } from '@/lib/TaskHelpers'

export default function SidebarStatus({ tasks }: { tasks: Task[] }) {
    const { onChangeStatus, status } = SidebarAction()
    return (
        <ul className='mt-8 space-y-4'>
            <li className={`py-2 px-2 rounded-lg ${status == 'tasks' ? 'bg-green' : 'bg-transparent'}`}><button onClick={() => onChangeStatus(tasks, 'tasks')} className='flex flex-row gap-3 w-full'>
                <TasksIcon className='size-6' />
                Tasks</button></li>
            <li className={`py-2 px-2 rounded-lg ${status == statusList[0] ? 'bg-green' : 'bg-transparent'}`}><button onClick={() => onChangeStatus(tasks, statusList[0])} className='flex flex-row gap-3 w-full'>
                <CompletedIcon className='size-6' />
                Completed</button></li>
            <li className={`py-2 px-2 rounded-lg ${status == statusList[1] ? 'bg-green' : 'bg-transparent'}`}><button onClick={() => onChangeStatus(tasks, statusList[1])} className='flex flex-row gap-3 w-full'>
                <InProgressIcon className='size-6' />
                In Progress</button></li>
            <li className={`py-2 px-2 rounded-lg ${status == statusList[2] ? 'bg-green' : 'bg-transparent'}`}><button onClick={() => onChangeStatus(tasks, statusList[2])} className='flex flex-row gap-3 w-full'>
                <OnReviewIcon className='size-6' />
                On Review</button></li>
            <li className={`py-2 px-2 rounded-lg ${status == statusList[3] ? 'bg-green' : 'bg-transparent'}`}><button onClick={() => onChangeStatus(tasks, statusList[3])} className='flex flex-row gap-3 w-full'>
                <OnHoldIcon className='size-6' />
                On Hold</button></li>
        </ul>
    )
}
