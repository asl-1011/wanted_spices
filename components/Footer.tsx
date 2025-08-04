import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "919876543210";
  
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your spice products. Please share more details.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Spice Garden</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Premium Indian spices and tea sourced directly from farms. 
              Bringing authentic flavors to your kitchen since 2020.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Instagram size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Recipes</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Spices</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Tea & Coffee</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Herbs</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Gift Sets</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@spicegarden.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Spice Market, Kochi, Kerala 682001</span>
              </div>
            </div>
            
            <Button
              variant="whatsapp"
              className="mt-4 w-full gap-2"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/80">
            <p>&copy; 2024 Spice Garden. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Return Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;