'use client'

import { formatDate } from '@/lib/TaskHelpers'
import Image from 'next/image'
import React from 'react'
import { CalendarIcon, DeleteIcon, EditIcon } from './Icons'
import { Task } from '@/interface/task_interface'
import { TaskAction } from '@/actions/TaskAction'

export default function Tasks({ tasks }: { tasks: Task[] }) {

    const { handleTaskDelete } = TaskAction()
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 ">
            {
                tasks && tasks.map((task, index) => (
                    <div key={index} className='bg-color rounded-md px-2 py-2 space-y-2 flex flex-col'>
                        <div className="w-full flex flex-row items-start justify-end gap-2">
                            <EditIcon className='size-3 text-blue-500' />
                            <button onClick={() => handleTaskDelete(task.id)}>
                                <DeleteIcon className='size-3 text-red-500' />
                            </button>
                        </div>
                        <div className="flex-1 space-y-2">
                            <h1>{task.name}</h1>
                            <p className='text-[0.7rem]'>{task.description}</p>
                            <div className="flex flex-row items-center gap-2">
                                <div className="text-[0.6rem] px-2 py-1 rounded-md text-green bg-[#20cf8918] inline-block">
                                    {task.category}
                                </div>
                                <div className="text-[0.6rem] px-2 py-1 rounded-md text-white bg-[#ffffff0e] inline-block">
                                    {task.priority}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <div className="text-[0.65rem] px-2 py-1 rounded-md primary-color flex flex-row items-center gap-1">
                                <CalendarIcon className='size-3' />
                                {formatDate(task.due_date)}</div>
                            <div className="flex flex-row items-center gap-1">
                                {
                                    task.assignee.username != "" ? <small className='text-[0.7rem]'>{task.assignee.username}</small> : null
                                }
                                <div className="h-[30px] w-[30px] rounded-full bg-slate-50">
                                    {task.assignee.image.file_path != "" ? <Image src={`http://localhost:8020/uploads/${task.assignee.image.filename}`} height={30} width={30} alt='profile' /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
