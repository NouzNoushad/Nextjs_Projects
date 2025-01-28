/* eslint-disable react-hooks/exhaustive-deps */
import { useGlobalState } from "@/context/globalProvider"
import { Task } from "@/interface/task_interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useEffect, useMemo, useState } from "react"
import { debounce } from "lodash"

export const TaskAction = (tasks: Task[]) => {

    const [searchQuery, setSearchQuery] = useState("")

    const queryClient = useQueryClient()
    const { setGTasks, gTasks, setSidebarStatus } = useGlobalState()

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const response = await fetch(`http://localhost:8020/delete_task_details/${id}`, {
                method: 'DELETE',
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            return data
        },
        onSuccess: (data) => {
            console.log('data', data)

            queryClient.invalidateQueries({ queryKey: ['task'] })

            window.location.reload()
        },
        onError: (error) => {
            console.log(error.message)
        }
    })

    const searchTasks = useMemo(() => debounce((tasks: Task[]) => {
        const searchList = tasks.filter((task) => {
            const taskName = task.name.trim().toLowerCase()
            const assigneeName = task.assignee.username.trim().toLowerCase()
            const query = searchQuery.trim().toLowerCase()

            if (taskName.includes(query)) {
                return true
            } else if (assigneeName.includes(query)) {
                return true
            } else {
                return false
            }
        })
        setGTasks(searchList)

    }, 300), [searchQuery])

    useEffect(() => {
        setSidebarStatus('tasks')
        searchTasks(tasks)
    }, [searchQuery])

    useEffect(() => {
        setGTasks(tasks)
    }, [])

    return {
        gTasks,
        handleTaskDelete: deleteMutation.mutate,
        setSearchQuery,
        searchTasks,
    }
}