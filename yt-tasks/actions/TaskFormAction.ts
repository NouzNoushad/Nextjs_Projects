
import { TaskValidation } from "./Validation"
import { TaskFormError } from "@/lib/ValidationSchema"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { Task } from "@/interface/task_interface"
import { categories, priorities, statusList } from "@/lib/TaskHelpers"
import { useState } from "react"

export const TaskFormAction = () => {
    const due_date = new Date().toISOString().split('T')[0]

    const [errors, setErrors] = useState<Partial<Record<keyof TaskFormError, string[]>>>()
    const [file, setFile] = useState<File | null>(null)
    const [category, setCategory] = useState<string>(categories[0])
    const [dueDate, setDueDate] = useState<string>(due_date)
    const [priority, setPriority] = useState<string>(priorities[0])
    const [status, setStatus] = useState<string>(statusList[0])

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

            const base_url = 'http://localhost:8020'
            const url = id ? `${base_url}/update_task_details/${id}` : `${base_url}/create_task`
            const method = id ? "PUT" : "POST"

            const response = await fetch(url, {
                method: method,
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

        formData.append("category", category)
        formData.append("priority", priority)
        formData.append("status", status)

        const [year, month, day] = dueDate.split('-')
        formData.append("due_date", `${day}/${month}/${year}`)

        if (file) {
            formData.append("image", file)
        } else {
            formData.append("image", "")
        }

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
    
        setCategory(task?.category ?? '')
        setPriority(task.priority)
        setStatus(task.status)
        setDueDate(task?.due_date.toString().split('T')[0] ?? "")

        return task
    }

    const { data: task, error: taskError, isLoading: isTaskLoading } = useQuery({
        queryKey: ['task', id],
        queryFn: getTask,
        staleTime: 10 * 60 * 5,
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
        selectedCategory: category,
        selectedPriority: priority,
        selectedStatus: status,
        selectedDueDate: dueDate,
        setDueDate,
        setCategory,
        setStatus,
        setPriority,
    }
}