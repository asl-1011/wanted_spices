export interface ProductVariant {
  id: string
  weight: string
  price: number
  discountPrice?: number
  stock: number
  isDefault?: boolean
}

export interface Product {
  productId: string
  name: string
  description: string
  category: string
  images: string[]
  basePrice: number
  variants: ProductVariant[]
  isAvailable: boolean
  tags?: string[]
  rating?: number
  reviewCount?: number
  nutritionFacts?: string
  benefits?: string[]
  usage?: string
  createdAt?: Date
}

export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  image: string
  stock: number
  quantity: number
}

export interface Category {
  id: string
  name: string
  count: number
}
