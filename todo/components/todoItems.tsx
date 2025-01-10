'use client'

import { Todo } from '@/app/interface/interface'
import React from 'react'
import { DeleteIcon, EditIcon } from './svgs'
import { HomeTodoAction } from '@/action/homeTodoAction'
import { Loader2 } from 'lucide-react'

export default function TodoItems({ todos }: { todos: Todo[] }) {

    const { handleDelete, selectedId, isDeleteLoading } = HomeTodoAction()
    return (
        todos.map((todo) => (
            <div key={todo.id} className="border-2 border-[#751aba] rounded-md px-5 py-5 bg-white">
                <h2 className="text-[1.2rem] font-[600]">{todo.title}</h2>
                <p>{todo.description}</p>
                <div className="mt-3 flex flex-row items-center justify-end gap-2">
                    <EditIcon className="size-6" />
                    <button onClick={() => handleDelete(todo.id)}>
                        {
                            isDeleteLoading && selectedId == todo.id ? <Loader2 className='h-4 w-4 animate-spin' /> : <DeleteIcon className="size-6" />
                        }
                    </button>
                </div>
            </div>
        ))
    )
}
