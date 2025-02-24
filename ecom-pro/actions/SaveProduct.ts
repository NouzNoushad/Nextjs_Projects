import { useGlobalStore } from "@/context/GlobalStore"
import { convertDiscountTypeToString } from "@/lib/Constants"
import { productValidation } from "./Validation"

export const SaveProductAction = () => {

    const { selectedFile, selectedStatus, selectedCategory, selectedTag, selectedTemplate, selectedName, selectedDescription, selectedPrice, discountType, selectedTaxClass, selectedVATAmount, selectedSKUNumber, selectedBarcodeNumber, selectedOnShelf, selectedInWarehouse, isBackorder, isPhysical, selectedMetaTitle, selectedMetaDescription, selectedMetaKeywords, variationColor, variationSize, variationMaterial, variationStyle, resetForm, setErrors } = useGlobalStore()

    const handleSaveProduct = async () => {

        const formData = new FormData()

        formData.append("thumbnail", selectedFile ? selectedFile : "")
        formData.append("status", selectedStatus)
        formData.append("category", selectedCategory)
        formData.append("tag", selectedTag)
        formData.append("template", selectedTemplate)
        formData.append("name", selectedName)
        formData.append("description", selectedDescription)
        formData.append("price", selectedPrice ? selectedPrice.toString() : "")
        formData.append("discount_type", convertDiscountTypeToString(discountType))
        formData.append("tax_class", selectedTaxClass)
        formData.append("vat_amount", selectedVATAmount)
        formData.append("sku_number", selectedSKUNumber)
        formData.append("barcode_number", selectedBarcodeNumber)
        formData.append("on_shelf", selectedOnShelf ? selectedOnShelf?.toString() : '')
        formData.append("on_warehouse", selectedInWarehouse ? selectedInWarehouse.toString() : '')
        formData.append("allow_backorder", isBackorder ? isBackorder.toString() : '')
        formData.append("in_physical", isPhysical ? isPhysical.toString() : '')
        formData.append("meta_title", selectedMetaTitle)
        formData.append("meta_description", selectedMetaDescription)
        formData.append("meta_keywords", selectedMetaKeywords)

        formData.append("color", variationColor)
        formData.append("size", variationSize)
        formData.append("material", variationMaterial)
        formData.append("style", variationStyle)


        console.log(`///////////// formdata: thumbnail: ${formData.get('thumbnail')} status: ${formData.get('status')}, cat: ${formData.get('category')}, tag: ${formData.get('tag')}, template: ${formData.get('template')}, name: ${formData.get('name')}, desc: ${formData.get('description')}, price: ${formData.get('price')}, discount: ${formData.get('discount_type')}, tax: ${formData.get('tax_class')}, vat: ${formData.get('vat_amount')}, sku: ${formData.get('sku_number')}, barcode: ${formData.get('barcode_number')}, shelf: ${formData.get('on_shelf')}, warehouse: ${formData.get('on_warehouse')}, backorder: ${formData.get('allow_backorder')}, physical: ${formData.get('in_physical')}, metatitle: ${formData.get('meta_title')}, metades: ${formData.get('meta_description')}, metakey: ${formData.get('meta_keywords')}, size: ${formData.get('size')}, color: ${formData.get('color')}, material: ${formData.get('material')}, style: ${formData.get('style')}`,)

        // validation
        const validation = await productValidation(formData)
        if(validation?.errors) {
            setErrors(validation.errors)
            return
        }

        resetForm()
    }

    return {
        handleSaveProduct,
    }
}