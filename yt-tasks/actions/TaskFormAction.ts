import { TaskValidation } from "./Validation"
import { TaskFormError } from "@/lib/ValidationSchema"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { Task } from "@/interface/task_interface"
import { useGlobalState } from "@/context/globalProvider"
import { useState } from "react"

export const TaskFormAction = () => {
    const [errors, setErrors] = useState<Partial<Record<keyof TaskFormError, string[]>>>()
    const [file, setFile] = useState<File | null>(null)

    const { gTask, setGTask, setGCategory, setGPriority, setGStatus, setGDueDate } = useGlobalState()

    const searchParams = useSearchParams()
    const id = searchParams.get("id")

    const queryClient = useQueryClient()
    const router = useRouter()

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setFile(file)
        }
    }

    const taskMutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const response = await fetch('http://localhost:8020/create_task', {
                method: 'POST',
                body: formData,
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            return data
        },
        onSuccess: (data) => {
            console.log(`data: ${data}`)
            queryClient.invalidateQueries({ queryKey: ['user'] })

            router.push('/')
        },
        onError: (error) => {
            console.log(`Failed: ${error.message}`)
        }
    })

    const handleTaskSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const response = await TaskValidation({}, formData)

        if (response?.errors) {
            setErrors(response?.errors)
            return
        }

        if (gTask != null) {
            formData.append("category", gTask.category)

            const [year, month, day] = gTask.due_date.split('-')
            formData.append("due_date", `${day}/${month}/${year}`)
        }

        if (file) {
            formData.append("image", file)
        } else {
            formData.append("image", "")
        }

        formData.forEach((item) => {
            console.log('///////// formdate: ', item)
        })

        taskMutation.mutate(formData)
    }

    // get task by id
    const getTask = async () => {
        const response = await fetch(`http://localhost:8020/task_details/${id}`)
        const taskResponse = await response.json()
        if (!response.ok) {
            throw new Error(taskResponse.error)
        }

        const task: Task = taskResponse.data
        console.log('///////////////////// due date ', task.due_date)

        const formattedDate = task.due_date.toString().split('T')[0]

        const due_date = new Date().toISOString().split('T')[0]

        console.log(`/////////////////// due-date: ${due_date} d string ${formattedDate}`)
        setGCategory(task.category)
        setGPriority(task.priority)
        setGStatus(task.status)
        setGDueDate(due_date)
        setGTask(task)

        return task
    }

    const { data: task, error: taskError, isLoading: isTaskLoading } = useQuery({
        queryKey: ['task', id],
        queryFn: getTask,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        enabled: !!id
    })

    return {
        errors,
        handleTaskSubmit,
        handleImageUpload,
        file,
        isLoading: taskMutation.isPending,
        task,
        taskError,
        isTaskLoading,
        gTask,
        setGTask,
        setGCategory,
        setGPriority,
        setGStatus,
        setGDueDate,
    }
}