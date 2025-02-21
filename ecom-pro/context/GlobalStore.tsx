import { DiscountType } from "@/lib/Constants"
import { create } from "zustand"

type GlobalStore = {
    selectedFile: File | null
    imagePreview: string | null
    selectedStatus: string
    selectedCategory: string
    selectedTag: string
    selectedTemplate: string
    selectedName: string
    selectedDescription: string
    selectedPrice: string
    discountType: DiscountType
    selectedTaxClass: string
    selectedVATAmount: string
    selectedSKUNumber: string
    selectedBarcodeNumber: string
    selectedOnShelf: string
    selectedInWarehouse: string
    isBackorder: boolean
    isPhysical: boolean
    selectedMetaTitle: string,
    selectedMetaDescription: string,
    selectedMetaKeywords: string,
    setSelectedFile: (value: File) => void
    setImagePreview: (value: string) => void
    setSelectedStatus: (value: string) => void
    setSelectedTag: (value: string) => void
    setSelectedCategory: (value: string) => void
    setSelectedTemplate: (value: string) => void
    setSelectedName: (value: string) => void
    setSelectedDescription: (value: string) => void
    setSelectedPrice: (value: string) => void
    setDiscountType: (value: DiscountType) => void
    setSelectedTaxClass: (value: string) => void
    setSelectedVATAmount: (value: string) => void
    setSelectedSKUNumber: (value: string) => void
    setSelectedBarcodeNumber: (value: string) => void
    setSelectedOnShelf: (value: string) => void
    setSelectedInWarehouse: (value: string) => void
    setIsBackorder: (value: boolean) => void
    setIsPhysical: (value: boolean) => void
    setSelectedMetaTitle: (value: string) => void
    setSelectedMetaDescription: (value: string) => void
    setSelectedMetaKeywords: (value: string) => void
    resetForm: () => void
}

export const useGlobalStore = create<GlobalStore>((set) => ({
    selectedFile: null,
    imagePreview: '',
    selectedStatus: 'published',
    selectedCategory: '',
    selectedTag: '',
    selectedTemplate: 'default template',
    selectedOnShelf: '',
    selectedInWarehouse: '',
    selectedName: '',
    selectedDescription: '',
    selectedPrice: '',
    discountType: DiscountType.NoDiscount,
    selectedTaxClass: 'tax free',
    selectedVATAmount: '',
    selectedSKUNumber: '',
    selectedBarcodeNumber: '',
    isBackorder: false,
    isPhysical: false,
    selectedMetaTitle: '',
    selectedMetaDescription: '',
    selectedMetaKeywords: '',
    setSelectedFile: (value) => set({ selectedFile: value }),
    setImagePreview: (value) => set({ imagePreview: value }),
    setSelectedStatus: (value) => set({ selectedStatus: value }),
    setSelectedCategory: (value) => set({ selectedCategory: value }),
    setSelectedTag: (value) => set({ selectedTag: value }),
    setSelectedTemplate: (value) => set({ selectedTemplate: value }),
    setSelectedName: (value) => set({ selectedName: value }),
    setSelectedDescription: (value) => set({ selectedDescription: value }),
    setSelectedPrice: (value) => set({ selectedPrice: value }),
    setDiscountType: (value) => set({ discountType: value }),
    setSelectedTaxClass: (value) => set({ selectedTaxClass: value }),
    setSelectedVATAmount: (value) => set({ selectedVATAmount: value }),
    setSelectedSKUNumber: (value) => set({ selectedSKUNumber: value }),
    setSelectedBarcodeNumber: (value) => set({ selectedBarcodeNumber: value }),
    setSelectedOnShelf: (value) => set({ selectedOnShelf: value }),
    setSelectedInWarehouse: (value) => set({ selectedInWarehouse: value }),
    setIsBackorder: (value) => set({ isBackorder: value }),
    setIsPhysical: (value) => set({ isPhysical: value }),
    setSelectedMetaTitle: (value) => set({ selectedMetaTitle: value }),
    setSelectedMetaDescription: (value) => set({ selectedMetaDescription: value }),
    setSelectedMetaKeywords: (value) => set({ selectedMetaKeywords: value }),
    resetForm: () => set({
        selectedFile: null,
        imagePreview: '',
        selectedStatus: 'published',
        selectedCategory: '',
        selectedTag: '',
        selectedTemplate: 'default template',
        selectedOnShelf: '',
        selectedInWarehouse: '',
        selectedName: '',
        selectedDescription: '',
        selectedPrice: '',
        discountType: DiscountType.NoDiscount,
        selectedTaxClass: 'tax free',
        selectedVATAmount: '',
        selectedSKUNumber: '',
        selectedBarcodeNumber: '',
        isBackorder: false,
        isPhysical: false,
        selectedMetaTitle: '',
        selectedMetaDescription: '',
        selectedMetaKeywords: ''
    })
}))