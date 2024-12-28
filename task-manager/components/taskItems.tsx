'use client'

import React from 'react'
import { AddIcon, DeleteIcon, EditIcon } from './svgs'
import Model from './model'
import { useGlobalState } from '@/context/globalProvider'
import { Task } from '@prisma/client'
import { TaskAction } from '@/action/taskAction'
import { Loader2 } from 'lucide-react'

export default function TaskItems({ tasks }: { tasks: Task[] }) {

    const { modal, openModal } = useGlobalState()

    const { handleDelete, isLoading, selectedId } = TaskAction()

    return (
        <>
            {modal && <Model />}
            <div className="lg:w-5/6 w-full bg-panel rounded-lg lg:border-2 lg:border-[#282828] h-auto sm:h-full">
                <div className="py-3 px-5">
                    <h1 className="relative font-bold before:absolute before:bottom-0 before:left-0 before:w-[40px] before:h-[0.2rem] before:rounded-lg before:bg-green-600 py-2">All Tasks</h1>
                    <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                        {
                            tasks && tasks.map((task) => (
                                <div key={task.id} className="bg-card border-2 border-[#333] px-3 py-3 rounded-lg space-y-3">
                                    <h2 className='font-[600]'>{task.title}</h2>
                                    <p className="text-[0.8rem] text-ellipsis overflow-hidden" style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 5,
                                        WebkitBoxOrient: 'vertical',
                                        height: '100px'
                                    }}>{task.description}</p>
                                    <div className="">
                                        <h3 className="text-[0.75rem]">{task.date && new Date(task.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}</h3>
                                        <div className="mt-1 flex flex-row items-center justify-between">
                                            <button className={`text-[0.7rem] rounded-full ${task.completed ? 'bg-green-500' : 'bg-red-500'} px-2 py-1`}>{task.completed ? 'completed' : 'Incompleted'}</button>
                                            <div className="flex flex-row items-center gap-2">
                                                <EditIcon className="size-4" />
                                                <button onClick={() => handleDelete(task.id)}>
                                                    {isLoading && selectedId === task.id ? <Loader2 className="h-4 w-4 animate-spin"></Loader2> :
                                                        <DeleteIcon className="size-4" />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        <button onClick={openModal} className="border-[0.2rem] border-dashed border-[#333] px-3 py-3 rounded-lg space-y-3 flex items-center justify-center min-h-[200px]">
                            <div className="flex flex-row items-center gap-2">
                                <AddIcon className="size-4" />
                                <p className="text-[0.9rem]">Add New Task</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
