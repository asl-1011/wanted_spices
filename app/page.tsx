"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProductGrid from "@/components/ProductGrid"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"
import Cart from "@/components/Cart"
import CartButton from "@/components/CartButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import { CartProvider } from "@/contexts/CartContext"

export default function HomePage() {
  const [showCart, setShowCart] = useState(false)

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        {!showCart && (
          <>
            <Header />
            <main>
              <Hero />
              <ProductGrid />
              <About />
              <Testimonials />
            </main>
            <Footer />
            <CartButton onClick={() => setShowCart(true)} />
            <WhatsAppButton />
          </>
        )}

        {showCart && <Cart onBack={() => setShowCart(false)} />}
      </div>
    </CartProvider>
  )
}
