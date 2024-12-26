import { TaskFormState, TaskValidationSchema } from "@/lib/validationSchema";

export const TastFormValidation = async (state: TaskFormState, formData: FormData, compeleted: boolean, important: boolean) => {
    const validationFields = await TaskValidationSchema.safeParseAsync({
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        date: formData.get('date'),
        compeleted: compeleted,
        important: important,
    })

    if (!validationFields.success) {
        return {
            errors: validationFields.error.flatten().fieldErrors,
        }
    }
}