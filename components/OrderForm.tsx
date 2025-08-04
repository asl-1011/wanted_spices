import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, X } from "lucide-react";

import { Product } from "@/types/models";

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
  product: Product | null;
}

const OrderForm = ({ isOpen, onClose, onSubmit, product }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const validateForm = () => {
    const newErrors = { name: "", phone: "", address: "" };
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Delivery address is required";
    } else if (formData.address.length > 300) {
      newErrors.address = "Address must be less than 300 characters";
    }
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({ name: "", phone: "", address: "" });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="text-whatsapp" size={20} />
            Order via WhatsApp
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Product Summary */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex gap-3">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold text-sm">{product.name}</h3>
                <p className="text-primary font-bold">
                  ₹{product.variants?.[0]?.discountPrice || product.variants?.[0]?.price || product.basePrice || 0}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your full name"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="text-destructive text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <Label htmlFor="address">Delivery Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Enter complete delivery address with landmark and PIN code"
                rows={3}
                maxLength={300}
                className={errors.address ? "border-destructive" : ""}
              />
              <div className="flex justify-between items-center mt-1">
                {errors.address && (
                  <p className="text-destructive text-sm">{errors.address}</p>
                )}
                <p className="text-muted-foreground text-xs ml-auto">
                  {formData.address.length}/300
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="whatsapp"
                className="flex-1 gap-2"
              >
                <MessageCircle size={16} />
                Send to WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;