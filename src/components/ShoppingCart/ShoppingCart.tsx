import { ShoppingCartElement } from "./ShoppingCart.style";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShoppingCart = ({ isOpen, onClose }: ShoppingCartProps) => {
  return (
    <ShoppingCartElement open={isOpen}>
      <h1>Carrinho de compras</h1>
    </ShoppingCartElement>
  );
};
