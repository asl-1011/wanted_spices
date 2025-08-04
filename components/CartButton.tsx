import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton = ({ onClick }: CartButtonProps) => {
  const { state } = useCart();

  return (
    <motion.div
      className="fixed top-4 right-4 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      <Button
        onClick={onClick}
        variant="default"
        size="lg"
        className="relative rounded-full shadow-lg hover:shadow-xl"
      >
        <ShoppingCart size={20} />
        {state.itemCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold"
          >
            {state.itemCount}
          </motion.span>
        )}
      </Button>
    </motion.div>
  );
};

export default CartButton;