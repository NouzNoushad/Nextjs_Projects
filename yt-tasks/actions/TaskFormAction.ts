import { useEffect, useState } from "react"
import { TaskValidation } from "./Validation"
import { TaskFormError } from "@/lib/ValidationSchema"
import { categories } from "@/lib/TaskHelpers"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const TaskFormAction = () => {
    const [errors, setErrors] = useState<Partial<Record<keyof TaskFormError, string[]>>>()
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [selectedDate, setSelectedDate] = useState('')
    const [file, setFile] = useState<File | null>(null)

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

        formData.append("category", selectedCategory)

        const [year, month, day] = selectedDate.split('-')
        formData.append("due_date", `${day}/${month}/${year}`)

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

    useEffect(() => {
        const date = new Date().toISOString().split('T')[0]
        setSelectedDate(date)
    }, [])

    return {
        errors,
        handleTaskSubmit,
        handleImageUpload,
        setSelectedCategory,
        setSelectedDate,
        selectedCategory,
        selectedDate,
        file,
        isLoading: taskMutation.isPending,
    }
}