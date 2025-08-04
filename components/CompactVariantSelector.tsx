import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ProductVariant } from "@/types/models";

interface CompactVariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant: ProductVariant;
  onVariantChange: (variant: ProductVariant) => void;
  compact?: boolean;
}

const CompactVariantSelector = ({ 
  variants, 
  selectedVariant, 
  onVariantChange,
  compact = false
}: CompactVariantSelectorProps) => {
  if (variants.length <= 1) {
    return (
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="text-xs">
          {selectedVariant.weight}
        </Badge>
        <span className="text-sm font-semibold text-primary">
          ₹{selectedVariant.discountPrice || selectedVariant.price}
        </span>
        {selectedVariant.discountPrice && (
          <span className="text-xs text-muted-foreground line-through">
            ₹{selectedVariant.price}
          </span>
        )}
      </div>
    );
  }

  if (compact) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 text-xs gap-1">
            {selectedVariant.weight}
            <span className="font-semibold">₹{selectedVariant.discountPrice || selectedVariant.price}</span>
            <ChevronDown size={12} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 bg-background border shadow-lg z-50">
          {variants.map((variant) => (
            <DropdownMenuItem
              key={variant.id}
              onClick={() => onVariantChange(variant)}
              className={`cursor-pointer ${
                selectedVariant.id === variant.id ? 'bg-primary/10' : ''
              }`}
              disabled={variant.stock === 0}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-sm">{variant.weight}</span>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-primary text-sm">
                    ₹{variant.discountPrice || variant.price}
                  </span>
                  {variant.discountPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      ₹{variant.price}
                    </span>
                  )}
                </div>
              </div>
              {variant.stock === 0 && (
                <Badge variant="destructive" className="text-xs ml-2">
                  Out of Stock
                </Badge>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Full variant selector for product page
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

export default CompactVariantSelector;