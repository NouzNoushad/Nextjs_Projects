import { create } from "zustand"

type ProductsStore = {
    currentPage: number,
    setCurrentPage: (page: number) => void
}

export const useProductsStore = create<ProductsStore>((set) => ({
    currentPage: 1,
    setCurrentPage: (page) => set({ currentPage: page })
}))