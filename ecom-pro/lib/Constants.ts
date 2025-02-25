export enum LinksType { Products, Categories, AddProduct, EditProduct, AddCategory, EditCategory }
export enum TabState { General, Advanced }
export enum DiscountType { NoDiscount, Percentage, FixedPrice }
export enum AutomationType { Manual, Automatic }

export const LIMIT = 10

export const convertDiscountTypeToString = (type: DiscountType): string => {
    switch (type) {
        case DiscountType.NoDiscount:
            return "no discount"
        case DiscountType.Percentage:
            return "percentage"
        case DiscountType.FixedPrice:
            return "fixed price"
        default:
            return "no discount"
    }
}