import { Todo } from "@/app/interface/interface"
import { useGlobalState } from "@/context/globalProvider"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const AddTodoAction = () => {

    const queryClient = useQueryClient()
    const router = useRouter()

    const { id, resetTodoId, todo, setTodoData, resetTodoData } = useGlobalState()

    const todoMutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const base_url = 'http://localhost:8000'
            const url = id ? `${base_url}/update_todo/${id}` : `${base_url}/create_todo`
            const method = id ? "PUT" : "POST"

            const timeStamp = new Date().toISOString()
            const randomId = Math.floor(Math.random() * 4294967296)

            const todoId = id ? todo?.id ?? randomId : randomId
            const updatedTimeStamp = id ? todo?.updatedAt ?? timeStamp : timeStamp

            const title = formData.get('title') as string
            const description = formData.get('description') as string

            const todoModel: Todo = {
                id: todoId,
                title: title,
                description: description,
                updatedAt: updatedTimeStamp,
                createdAt: timeStamp,
            }

            const response = await fetch(url, {
                method,
                body: JSON.stringify(todoModel)
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

            resetTodoId()
            resetTodoData()

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

    // fetch todo
    const fetchTodo = async () => {
        if (id) {
            const response = await fetch(`http://localhost:8000/get_todo/${id}`)
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data)
            }

            const todo: Todo = data
            setTodoData(todo)

            return todo
        }
    }

    const { data: todoData, error: todoError, isLoading: todoLoading } = useQuery({
        queryKey: ['todo', id],
        queryFn: fetchTodo,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
        enabled: !!id
    })

    return {
        handleCreateTodo,
        isLoading: todoMutation.isPending,
        todoData,
        todoError,
        todoLoading,
    }
}