
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Plus, Minus, ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { Product, ProductVariant } from "@/types/models";
import CompactVariantSelector from "./CompactVariantSelector";

interface ProductPageProps {
  product: Product;
  onBack: () => void;
}

const ProductPage = ({ product, onBack }: ProductPageProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(() => {
    // Add defensive check for variants array
    if (!product.variants || product.variants.length === 0) {
      console.error('Product missing variants:', product);
      // Create a fallback variant
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
  const { dispatch, state } = useCart();

  const cartItem = state.items.find(item => item.id === selectedVariant.id);
  const currentCartQuantity = cartItem ? cartItem.quantity : 0;

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, Math.min(selectedVariant.stock, quantity + change));
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    for (let i = 0; i < quantity; i++) {
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
    }
  };

  const handleWhatsAppOrder = () => {
    const price = selectedVariant.discountPrice || selectedVariant.price;
    const message = `Hi! I want to order:

Product: ${product.name} (${selectedVariant.weight})
Quantity: ${quantity}
Price: ₹${price} x ${quantity} = ₹${price * quantity}

Please confirm availability and delivery details. Thank you!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-background p-4"
    >
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 gap-2"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
            
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variant Selector */}
            <CompactVariantSelector
              variants={product.variants || []}
              selectedVariant={selectedVariant}
              onVariantChange={(variant) => {
                setSelectedVariant(variant);
                setQuantity(1); // Reset quantity when variant changes
              }}
              compact={false}
            />

            {/* Stock Info */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Stock: {selectedVariant.stock} available
              </span>
              {currentCartQuantity > 0 && (
                <span className="text-sm text-primary font-medium">
                  {currentCartQuantity} in cart
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= selectedVariant.stock}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  Total: ₹{(selectedVariant.discountPrice || selectedVariant.price) * quantity}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={addToCart}
                className="flex-1 gap-2 h-12 sm:h-10"
                disabled={!product.isAvailable || selectedVariant.stock === 0}
              >
                <ShoppingCart size={16} />
                Add to Cart
              </Button>
              <Button
                variant="whatsapp"
                onClick={handleWhatsAppOrder}
                className="flex-1 gap-2 h-12 sm:h-10"
                disabled={!product.isAvailable || selectedVariant.stock === 0}
              >
                Order via WhatsApp
              </Button>
            </div>

            {/* Product Details Accordion */}
            <Accordion type="single" collapsible className="w-full">
              {product.benefits && (
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="text-muted-foreground">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              )}

              {product.usage && (
                <AccordionItem value="usage">
                  <AccordionTrigger>Usage Instructions</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{product.usage}</p>
                  </AccordionContent>
                </AccordionItem>
              )}

              {product.nutritionFacts && (
                <AccordionItem value="nutrition">
                  <AccordionTrigger>Nutrition Facts</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{product.nutritionFacts}</p>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPage;
