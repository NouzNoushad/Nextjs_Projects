import { z } from "zod";

// product validation
export const ProductFormValidation = z.object({
    name: z.string().min(2, { message: "Product name is required" }),
    price: z.coerce.number().min(1, { message: "Product base price is required" }),
    tax_class: z.string().min(2, { message: "Product tax class is required" }),
    sku_number: z.string().min(2, { message: "SKU is required" }),
    barcode_number: z.string().min(2, { message: "Product barcode is required" }),
    on_shelf: z.coerce.string().refine((value) => Number(value) > 0, { message: "Shelf quantity must be greater than zero" }),
    on_warehouse: z.coerce.number().min(1).optional(),
    allow_backorder: z.enum(["true", "false"]).optional(),
    in_physical: z.enum(["true", "false"]).optional(),
    description: z.string().optional(),
    vat_amount: z.coerce.number().optional(),
    status: z.string().optional(),
    category: z.string().optional(),
    tag: z.string().optional(),
    template: z.string().optional(),
    discount_type: z.string().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    color: z.string().optional(),
    size: z.string().optional(),
    material: z.string().optional(),
    style: z.string().optional(),
    thumbnail: z.instanceof(File).optional(),
})

export type ProductFormError = {
    [Key in keyof z.infer<typeof ProductFormValidation>]?: string[]
}