import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export const HomeTodoAction = () => {

    const [selectedId, setSelectedId] = useState(0)

    const queryClient = useQueryClient()

    const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
            const url = `http://localhost:8000/delete_todo/${id}`
            const response = await fetch(url, {
                method: 'DELETE',
            })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            return data
        },
        onSuccess: (data) => {
            console.log(data)

            queryClient.invalidateQueries({ queryKey: ['todo'] })

            window.location.reload()
        },
        onError: (error) => {
            console.log("error ", error)
        }
    })

    const handleDelete = (id: number) => {
        setSelectedId(id)

        deleteMutation.mutate(id)
    }

    return {
        handleDelete,
        selectedId,
        isDeleteLoading: deleteMutation.isPending,
    }
}