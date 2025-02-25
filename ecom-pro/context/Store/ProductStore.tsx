import { create } from "zustand"

// const [showAction, setShowAction] = useState(false)
//     const [actionIndex, setActionIndex] = useState(-1)

type ProductsStore = {
    currentPage: number,
    showAction: boolean,
    actionIndex: number,
    setCurrentPage: (page: number) => void
    setAction: (index: number) => void
}

export const useProductsStore = create<ProductsStore>((set) => ({
    currentPage: 1,
    showAction: false,
    actionIndex: -1,
    setCurrentPage: (page) => set({ currentPage: page }),
    setAction: (index) => set((state) => ({
        actionIndex: index,
        showAction: state.actionIndex == index ? !state.showAction : true
    }))
}))