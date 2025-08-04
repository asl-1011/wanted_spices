import type { Product, Category } from "@/types/models"

export const products: Product[] = [
  {
    productId: "cardamom-premium",
    name: "Premium Green Cardamom",
    description:
      "Aromatic green cardamom pods sourced from the Western Ghats. Known for their intense fragrance and sweet-spicy flavor, perfect for both sweet and savory dishes.",
    images: ["/images/cardamom.jpg"],
    basePrice: 899,
    variants: [
      { id: "cardamom-100g", weight: "100g", price: 299, discountPrice: 249, stock: 25, isDefault: true },
      { id: "cardamom-200g", weight: "200g", price: 549, discountPrice: 459, stock: 20, isDefault: false },
      { id: "cardamom-500g", weight: "500g", price: 1299, discountPrice: 1099, stock: 15, isDefault: false },
      { id: "cardamom-1kg", weight: "1kg", price: 2399, discountPrice: 1999, stock: 10, isDefault: false },
    ],
    category: "Spice",
    isAvailable: true,
    nutritionFacts: "Rich in antioxidants, vitamin C, and essential oils. Contains cineole, terpinene, and limonene.",
    benefits: [
      "Aids in digestion and reduces bloating",
      "Natural breath freshener",
      "May help regulate blood pressure",
      "Rich in antioxidants that fight inflammation",
    ],
    usage: "Use 2-3 pods for tea, 4-5 pods for rice dishes. Crush lightly before use to release maximum flavor.",
    createdAt: new Date("2024-01-15"),
  },
  {
    productId: "black-pepper-tellicherry",
    name: "Tellicherry Black Pepper",
    description:
      "Premium black peppercorns from Tellicherry region of Kerala. Large, bold peppercorns with robust flavor and intense heat.",
    images: ["/images/pepper.jpg"],
    basePrice: 649,
    variants: [
      { id: "pepper-100g", weight: "100g", price: 199, discountPrice: 179, stock: 30, isDefault: true },
      { id: "pepper-250g", weight: "250g", price: 449, discountPrice: 399, stock: 25, isDefault: false },
      { id: "pepper-500g", weight: "500g", price: 799, discountPrice: 699, stock: 20, isDefault: false },
      { id: "pepper-1kg", weight: "1kg", price: 1449, discountPrice: 1299, stock: 15, isDefault: false },
    ],
    category: "Spice",
    isAvailable: true,
    nutritionFacts: "High in piperine, vitamin K, iron, and manganese. Contains antioxidant properties.",
    benefits: [
      "Enhances nutrient absorption",
      "Natural anti-inflammatory properties",
      "Aids in digestion",
      "May boost metabolism",
    ],
    usage: "Grind fresh for maximum potency. Use 1/4 tsp for curries, sprinkle on salads and soups.",
    createdAt: new Date("2024-01-20"),
  },
  {
    productId: "turmeric-powder-organic",
    name: "Organic Turmeric Powder",
    description:
      "Pure, organic turmeric powder with high curcumin content. Sourced from certified organic farms in Tamil Nadu.",
    images: ["/images/turmeric.jpg"],
    basePrice: 299,
    variants: [
      { id: "turmeric-100g", weight: "100g", price: 89, discountPrice: 79, stock: 50, isDefault: true },
      { id: "turmeric-250g", weight: "250g", price: 189, discountPrice: 169, stock: 40, isDefault: false },
      { id: "turmeric-500g", weight: "500g", price: 349, discountPrice: 299, stock: 30, isDefault: false },
      { id: "turmeric-1kg", weight: "1kg", price: 649, discountPrice: 549, stock: 25, isDefault: false },
    ],
    category: "Spice",
    isAvailable: true,
    nutritionFacts: "Rich in curcumin, vitamin C, vitamin B6, iron, potassium, and manganese.",
    benefits: [
      "Powerful anti-inflammatory properties",
      "Natural antioxidant",
      "Supports immune system",
      "May help with joint health",
    ],
    usage: "Mix 1/2 tsp in warm milk for golden milk. Use in curries, rice dishes, and smoothies.",
    createdAt: new Date("2024-01-18"),
  },
  {
    productId: "cloves-whole",
    name: "Whole Cloves",
    description:
      "Aromatic whole cloves with intense flavor and medicinal properties. Perfect for both culinary and therapeutic use.",
    images: ["/images/cloves.jpg"],
    basePrice: 449,
    variants: [
      { id: "cloves-50g", weight: "50g", price: 129, discountPrice: 119, stock: 35, isDefault: true },
      { id: "cloves-100g", weight: "100g", price: 229, discountPrice: 199, stock: 30, isDefault: false },
      { id: "cloves-250g", weight: "250g", price: 499, discountPrice: 449, stock: 20, isDefault: false },
      { id: "cloves-500g", weight: "500g", price: 899, discountPrice: 799, stock: 15, isDefault: false },
    ],
    category: "Spice",
    isAvailable: true,
    nutritionFacts: "Rich in eugenol, vitamin K, vitamin C, and fiber. Contains antimicrobial properties.",
    benefits: [
      "Natural antiseptic and antibacterial",
      "Aids in dental health",
      "May help regulate blood sugar",
      "Rich in antioxidants",
    ],
    usage: "Use 2-3 cloves in rice dishes. Steep in tea for digestive benefits. Store in airtight container.",
    createdAt: new Date("2024-01-22"),
  },
  {
    productId: "masala-tea-powder",
    name: "Special Masala Tea Powder",
    description:
      "Authentic Indian masala tea blend with cardamom, cinnamon, ginger, and cloves. Ready to brew premium chai.",
    images: ["/images/tea-powder.jpg"],
    basePrice: 399,
    variants: [
      { id: "tea-250g", weight: "250g", price: 149, discountPrice: 129, stock: 40, isDefault: true },
      { id: "tea-500g", weight: "500g", price: 279, discountPrice: 249, stock: 35, isDefault: false },
      { id: "tea-1kg", weight: "1kg", price: 499, discountPrice: 449, stock: 30, isDefault: false },
      { id: "tea-2kg", weight: "2kg", price: 899, discountPrice: 799, stock: 20, isDefault: false },
    ],
    category: "Tea",
    isAvailable: true,
    nutritionFacts: "Contains natural antioxidants, caffeine, and essential oils from spices.",
    benefits: ["Boosts energy and alertness", "Rich in antioxidants", "Aids in digestion", "May help boost immunity"],
    usage: "Boil 1 tsp with milk and water. Add sugar to taste. Simmer for 3-4 minutes for best flavor.",
    createdAt: new Date("2024-01-25"),
  },
]

export const categories: Category[] = [
  { id: "all", name: "All", count: products.length },
  { id: "spice", name: "Spice", count: products.filter((p) => p.category === "Spice").length },
  { id: "tea", name: "Tea", count: products.filter((p) => p.category === "Tea").length },
  { id: "herbs", name: "Herbs", count: products.filter((p) => p.category === "Herbs").length },
]

// Helper functions for working with products
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.productId === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery),
  )
}

export const getFeaturedProducts = (limit = 4): Product[] => {
  return products
    .filter((product) => product.isAvailable)
    .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
    .slice(0, limit)
}

export const getProductsOnSale = (): Product[] => {
  return products.filter((product) => product.isAvailable && product.variants.some((variant) => variant.discountPrice))
}
