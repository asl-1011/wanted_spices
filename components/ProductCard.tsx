import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { Product, ProductVariant } from "@/types/models";
import { useCart, getProductQuantityInCart } from "@/contexts/CartContext";
import CompactVariantSelector from "./CompactVariantSelector";

interface ProductCardProps {
  product: Product;
  onOrderClick: (product: Product) => void;
  onProductClick: (product: Product) => void;
  index?: number;
}

const ProductCard = ({ product, onOrderClick, onProductClick, index }: ProductCardProps) => {
  const { dispatch, state } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(() => {
    // Add defensive check for variants array
    if (!product.variants || product.variants.length === 0) {
      console.error('Product missing variants:', product);
      // Create a fallback variant from old product structure if needed
      return {
        id: product.productId,
        weight: "250g",
        price: product.basePrice || 0,
        stock: 50,
        isDefault: true
      };
    }
    return product.variants.find(v => v.isDefault) || product.variants[0];
  });
  
  const currentQuantity = getProductQuantityInCart(state.items, selectedVariant.id);
  const isOutOfStock = selectedVariant.stock === 0;

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: selectedVariant.id,
        productId: product.productId,
        name: `${product.name} (${selectedVariant.weight})`,
        price: selectedVariant.discountPrice || selectedVariant.price,
        image: product.images[0],
        stock: selectedVariant.stock
      }
    });
  };

  const handleOrderClick = () => {
    onOrderClick(product);
  };

  const handleProductClick = () => {
    onProductClick(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card 
        className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-card/95 cursor-pointer h-full flex flex-col"
        onClick={handleProductClick}
      >
        <div className="aspect-square overflow-hidden relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {selectedVariant.discountPrice && (
            <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-bold">
              SALE
            </div>
          )}
          {currentQuantity > 0 && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-bold">
              {currentQuantity} in cart
            </div>
          )}
        </div>
        
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="space-y-4 flex-1">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-foreground line-clamp-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <CompactVariantSelector
                variants={product.variants || []}
                selectedVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
                compact={true}
              />
              <Badge variant="secondary" className="text-xs">
                {product.category}
              </Badge>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-xs text-muted-foreground">
                Stock: {selectedVariant.stock}
              </span>
              {currentQuantity > 0 && (
                <span className="text-primary font-medium text-xs">
                  {currentQuantity} in cart
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                addToCart();
              }}
              className="flex-1 text-xs"
              disabled={!product.isAvailable || selectedVariant.stock === 0}
            >
              <ShoppingCart size={14} />
              Add
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleProductClick();
              }}
              className="text-xs"
            >
              <Eye size={14} />
            </Button>
            <Button
              variant="whatsapp"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleOrderClick();
              }}
              className="text-xs"
              disabled={!product.isAvailable || selectedVariant.stock === 0}
            >
              Order
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;