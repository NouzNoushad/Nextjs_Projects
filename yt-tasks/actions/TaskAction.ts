/* eslint-disable react-hooks/exhaustive-deps */
import { useGlobalState } from "@/context/globalProvider"
import { Task } from "@/interface/task_interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"

export const TaskAction = (tasks: Task[]) => {

    const queryClient = useQueryClient()
    const { resetGTask, setGTasks, gTasks } = useGlobalState()

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const response = await fetch(`http://localhost:8020/delete_task_details/${id}`, {
                method: 'DELETE',
            })

            const data = await response.json()

            if(!response.ok) {
                throw new Error(data.error)
            }

            return data
        },
        onSuccess: (data) => {
            console.log('data', data)

            queryClient.invalidateQueries({queryKey: ['task']})

            window.location.reload()
        },
        onError: (error) => {
            console.log(error.message)
        }
    })

    useEffect(() => {
        resetGTask()
        setGTasks(tasks)
    }, [])

    return {
        gTasks,
        handleTaskDelete: deleteMutation.mutate,
    }
}