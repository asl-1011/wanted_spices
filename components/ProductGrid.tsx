
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductPage from "./ProductPage";
import OrderForm from "./OrderForm";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { Product } from "@/types/models";

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderFormOpen(true);
  };

  const handleProductClick = (product: Product) => {
    setViewingProduct(product);
  };

  const handleOrderSubmit = (formData: any) => {
    if (!selectedProduct) return;
    
    const defaultVariant = selectedProduct.variants?.find(v => v.isDefault) || selectedProduct.variants?.[0];
    const price = defaultVariant?.discountPrice || defaultVariant?.price || selectedProduct.basePrice || 0;
    
    const message = `Hi, I want to order:

Product: ${selectedProduct.name}${defaultVariant ? ` (${defaultVariant.weight})` : ''} - ₹${price}
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}

Please confirm availability and delivery details. Thank you!`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsOrderFormOpen(false);
    setSelectedProduct(null);
  };

  // If viewing a specific product, show the product page
  if (viewingProduct) {
    return (
      <ProductPage
        product={viewingProduct}
        onBack={() => setViewingProduct(null)}
      />
    );
  }

  return (
    <section id="products" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Premium Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully selected spices and tea from the finest gardens across India. 
            Each product is tested for quality and freshness.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.name ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.name)}
              className="rounded-full"
            >
              {String(category.name)}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.productId}
              product={product}
              onOrderClick={handleOrderClick}
              onProductClick={handleProductClick}
              index={index}
            />
          ))}
        </div>
      </div>

      <OrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        onSubmit={handleOrderSubmit}
        product={selectedProduct}
      />
    </section>
  );
};

export default ProductGrid;
