import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

export const TaskAction = () => {
    const [selectedId, setSelectedId] = useState('')

    const queryClient = useQueryClient()

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const response = await fetch(`/api/task/${id}`,
                {
                    method: 'DELETE'
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            return data
        },
        onSuccess: (data) => {
            console.log('///// data', data)

            queryClient.invalidateQueries({ queryKey: ['task'] })

            window.location.reload()
        },
        onError: (error) => {
            console.log('//// error:', error.message)
        }
    })

    const handleDelete = (id: string) => {
        setSelectedId(id)

        deleteMutation.mutate(id)
    }

    return {
        handleDelete: handleDelete,
        isLoading: deleteMutation.isPending,
        selectedId,
    }
}