import React from 'react'
import TaskItems from './taskItems'
import { Task } from '@prisma/client'

export default async function Tasks() {
    const response = await fetch('http://localhost:3000/api/task')
    const data = await response.json()
    const tasks: Task[] = data.tasks
    console.log('/////////////// tasks: ', tasks.length)

    return (
        <TaskItems tasks={tasks} />
    )
}
