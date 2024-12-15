import { Session } from "next-auth";
import { useState } from "react";
import { BlogFormError } from "../lib/validationSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogFormValidation } from "./validations";
import { useRouter } from "next/navigation";

export const BlogFormAction = (session: Session | null) => {
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')
    const [errors, setErrors] = useState<Partial<Record<keyof BlogFormError, string[]>>>({})

    const queryClient = useQueryClient()
    const router = useRouter()

    const blogFormMutation = useMutation({
        mutationFn: async (formData: FormData) => {
            const response = await fetch('/api/blog', {
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
            console.log('///// data:', data.message)
            queryClient.invalidateQueries({ queryKey: ['blog'] })

            router.push('/')
        },
        onError: (error) => {
            console.log('Error: ', error)
        }
    })

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const response = await BlogFormValidation({}, formData, content)

        if (response?.errors) {
            setErrors(response.errors)
            return
        }

        if (content) {
            formData.append('content', content)
        }
        if (session?.user) {
            formData.append('user', session?.user?.name as string)
            formData.append('userImage', session?.user?.image as string)
        }

        blogFormMutation.mutate(formData)
    }

    return {
        category,
        content,
        setCategory,
        setContent,
        errors,
        handleFormSubmit,
        isLoading: blogFormMutation.isPending
    }
}