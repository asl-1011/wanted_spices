import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductVariant } from "@/types/models";

interface ProductVariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant;
  onVariantChange: (variant: ProductVariant) => void;
}

const ProductVariantSelector = ({ 
  variants, 
  selectedVariant, 
  onVariantChange 
}: ProductVariantSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Weight/Size
      </label>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
        {variants.map((variant) => (
          <Button
            key={variant.id}
            variant={selectedVariant.id === variant.id ? "default" : "outline"}
            size="sm"
            onClick={() => onVariantChange(variant)}
            className="relative h-auto p-2 sm:p-3 flex flex-col items-center min-w-[70px] sm:min-w-[80px] text-xs sm:text-sm"
          >
            <span className="font-medium">{variant.weight}</span>
            <div className="flex items-center gap-1 text-xs">
              <span className="font-semibold">
                ₹{variant.discountPrice || variant.price}
              </span>
              {variant.discountPrice && (
                <span className="line-through text-muted-foreground">
                  ₹{variant.price}
                </span>
              )}
            </div>
            {variant.stock <= 5 && variant.stock > 0 && (
              <Badge variant="destructive" className="absolute -top-1 -right-1 text-xs px-1 py-0">
                {variant.stock}
              </Badge>
            )}
            {variant.stock === 0 && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center rounded-md">
                <span className="text-xs text-muted-foreground font-medium">
                  Out of Stock
                </span>
              </div>
            )}
          </Button>
        ))}
      </div>
      
      {selectedVariant.stock <= 10 && selectedVariant.stock > 0 && (
        <p className="text-sm text-amber-600 dark:text-amber-400">
          Only {selectedVariant.stock} left in stock!
        </p>
      )}
    </div>
  );
};

export default ProductVariantSelector;