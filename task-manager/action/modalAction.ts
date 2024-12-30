import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { TastFormValidation } from "./validation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { TaskFormError } from "@/lib/validationSchema"
import { useGlobalState } from "@/context/globalProvider"
import { Task } from "@prisma/client"

export const ModalAction = () => {

    const [completed, setCompleted] = useState(false)
    const [important, setImportant] = useState(false)
    const [errors, setErrors] = useState<Partial<Record<keyof TaskFormError, string[]>>>({})

    const { closeModal, id } = useGlobalState()

    const queryClient = useQueryClient()
    const router = useRouter()

    const taskMutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const response = await fetch('/api/task', {
                method: 'POST',
                body: formData
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data)
            }

            return data
        },
        onSuccess: (data) => {
            console.log(`//////// data: ${data.message}`)

            queryClient.invalidateQueries({ queryKey: ['task'] })

            closeModal()
            router.push('/')
        },
        onError: (error) => {
            console.log(`//////// errorsss: ${error.message}`)
        }
    })

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const response = await TastFormValidation({}, formData, completed, important)

        if (response?.errors) {
            setErrors(response.errors)
            return
        }

        formData.append('completed', completed.toString())
        formData.append('important', important.toString())

        taskMutation.mutate(formData)
    }

    const fetchTask = async () => {
        if (id) {
            const response = await fetch(`/api/task/${id}`)

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            const task: Task = data.task;

            return task
        }
    }

    const { data: task, error: taskError, isLoading: taskLoading } = useQuery({
        queryKey: ['task', id],
        queryFn: fetchTask,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        enabled: !!id
    })

    return {
        handleFormSubmit,
        setCompleted,
        setImportant,
        completed,
        important,
        errors,
        task,
        taskError,
        taskLoading,
    }
}