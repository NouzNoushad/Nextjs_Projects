import { Todo } from "@/app/interface/interface"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const AddTodoAction = () => {

    const queryClient = useQueryClient()
    const router = useRouter()

    const todoMutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const url = 'http://localhost:8000/create_todo'

            const id = Math.floor(Math.random() * 4294967296)
            const timeStamp = new Date().toISOString()
            const title = formData.get('title') as string
            const description = formData.get('description') as string

            const todo: Todo = {
                id: id,
                title: title,
                description: description,
                updatedAt: timeStamp,
                createdAt: timeStamp,
            }

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(todo)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            return data
        },
        onSuccess: (data) => {
            console.log('data', data)
            queryClient.invalidateQueries({ queryKey: ['todo'] })

            router.push("/")
        },
        onError: (error) => {
            console.log('error', error.message)
        }
    })

    const handleCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        todoMutation.mutate(formData)
    }

    return {
        handleCreateTodo,
        isLoading: todoMutation.isPending,
    }
}