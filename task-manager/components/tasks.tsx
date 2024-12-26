'use client'

import React from 'react'
import { AddIcon, DeleteIcon, EditIcon } from './svgs'
import Model from './model'
import { useGlobalState } from '@/context/globalProvider'

export default function Tasks() {

    const { modal, openModal } = useGlobalState()
    return (
        <>
            {modal && <Model />}
            <div className="lg:w-5/6 w-full bg-panel rounded-lg lg:border-2 lg:border-[#282828] h-full">
                <div className="py-3 px-5">
                    <h1 className="relative font-bold before:absolute before:bottom-0 before:left-0 before:w-[40px] before:h-[0.2rem] before:rounded-lg before:bg-green-600 py-2">All Tasks</h1>
                    <div className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                        {
                            Array.from({ length: 3 }).map((item, index) => (
                                <div key={index} className="bg-card border-2 border-[#333] px-3 py-3 rounded-lg space-y-3">
                                    <h2>Attend Yoga Class</h2>
                                    <p className="text-[0.8rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente consequuntur beatae enim nulla accusamus debitis ipsam quibusdam provident omnis quisquam?</p>
                                    <div className="">
                                        <h3 className="text-[0.8rem]">27/10/2023</h3>
                                        <div className="mt-1 flex flex-row items-center justify-between">
                                            <button className="text-[0.7rem] rounded-full bg-green-600 px-2 py-1">Incomplete</button>
                                            <div className="flex flex-row items-center gap-2">
                                                <EditIcon className="size-4" />
                                                <DeleteIcon className="size-4" />
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
