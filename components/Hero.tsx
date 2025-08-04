import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/assets/hero-spices.jpg")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Premium Indian
          <span className="block text-accent-foreground">Spices & Tea</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
          Discover the finest quality cardamom, tea powder, turmeric, and traditional spices 
          sourced directly from Indian farms. Pure. Fresh. Authentic.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToProducts}
            className="text-lg px-8 py-3"
          >
            Shop Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
