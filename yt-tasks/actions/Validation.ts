import { TaskFormSchema, TaskState } from "@/lib/ValidationSchema"

export const TaskValidation = async (state: TaskState, formData: FormData) => {
    const validateFields = TaskFormSchema.safeParse({
        name: formData.get('name') as string,
        username: formData.get('username') as string,
    })

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
        }
    }
}