"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, MessageCircle, Heart, Share2 } from "lucide-react"
import type { Product, ProductVariant } from "@/types/models"
import { useCart, getProductQuantityInCart } from "@/contexts/CartContext"
import CompactVariantSelector from "./CompactVariantSelector"

interface ProductDetailProps {
  product: Product
  onOrderClick: (product: Product) => void
}

export default function ProductDetail({ product, onOrderClick }: ProductDetailProps) {
  const { dispatch, state } = useCart()
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(() => {
    return product.variants.find((v) => v.isDefault) || product.variants[0]
  })

  const currentQuantity = getProductQuantityInCart(state.items, selectedVariant.id)

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: selectedVariant.id,
        productId: product.productId,
        name: `${product.name} (${selectedVariant.weight})`,
        price: selectedVariant.discountPrice || selectedVariant.price,
        image: product.images[0],
        stock: selectedVariant.stock,
      },
    })
  }

  const handleOrderClick = () => {
    onOrderClick(product)
  }

  const discountPercentage = selectedVariant.discountPrice
    ? Math.round(((selectedVariant.price - selectedVariant.discountPrice) / selectedVariant.price) * 100)
    : 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-card">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Pricing */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              {selectedVariant.discountPrice ? (
                <>
                  <span className="text-3xl font-bold text-primary">₹{selectedVariant.discountPrice}</span>
                  <span className="text-xl text-muted-foreground line-through">₹{selectedVariant.price}</span>
                  <Badge variant="destructive">{discountPercentage}% OFF</Badge>
                </>
              ) : (
                <span className="text-3xl font-bold text-primary">₹{selectedVariant.price}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">Stock: {selectedVariant.stock} units available</p>
          </div>

          {/* Variant Selector */}
          <div>
            <CompactVariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
              compact={false}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={addToCart}
              className="flex-1"
              disabled={!product.isAvailable || selectedVariant.stock === 0}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
              {currentQuantity > 0 && ` (${currentQuantity})`}
            </Button>
            <Button
              onClick={handleOrderClick}
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
              disabled={!product.isAvailable || selectedVariant.stock === 0}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Order Now
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          <Separator />

          {/* Product Details */}
          <div className="space-y-4">
            {product.nutritionFacts && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Nutrition Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.nutritionFacts}</p>
                </CardContent>
              </Card>
            )}

            {product.benefits && product.benefits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Health Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {product.usage && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Usage Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.usage}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
