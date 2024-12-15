import { BlogFormState, BlogValidationSchema } from "../lib/validationSchema"

export const BlogFormValidation = async (state: BlogFormState, formData: FormData, content: string) => {
    const validationFields = await BlogValidationSchema.safeParseAsync({
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        image: formData.get('image') as string,
        content: content,
    })

    if (!validationFields.success) {
        return {
            errors: validationFields.error.flatten().fieldErrors,
        }
    }
}