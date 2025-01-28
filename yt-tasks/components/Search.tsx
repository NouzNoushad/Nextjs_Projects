'use client'

import { TaskAction } from '@/actions/TaskAction'
import { Task } from '@/interface/task_interface'
import React from 'react'

export default function Search({ tasks }: { tasks: Task[] }) {

    const { setSearchQuery } = TaskAction(tasks)
    return (
        <input type="text" placeholder='Search' className='px-3 py-2 rounded-md primary-color sm:min-w-[500px] min-w-full' onChange={(e) => setSearchQuery(e.target.value)} />
    )
}
