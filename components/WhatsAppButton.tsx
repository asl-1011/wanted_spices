import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in your products. Can you help me?";
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        onClick={handleWhatsAppClick}
        variant="whatsapp"
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl gap-2 px-6"
      >
        <MessageCircle size={20} />
        WhatsApp
      </Button>
    </motion.div>
  );
};

export default WhatsAppButton;