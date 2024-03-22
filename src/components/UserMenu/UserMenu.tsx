import { Button, ShoppingCart } from "..";
import { ShoppingCartButton, UserMenuElement } from "./UserMenu.style";
import ShoppingCartIcon from "../../assets/shoppingCart.svg";
import { useContext, useState } from "react";
import OrderContext from "../../context/OrderContext";

export const UserMenu = () => {
  const { hamburgerOrder } = useContext(OrderContext);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const token = false;

  const handleOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <UserMenuElement>
      {!token ? (
        <>
          <Button size="small" onClick={() => {}}>
            Cadastre-se
          </Button>
          <Button size="small" inverse onClick={() => {}}>
            Login
          </Button>
        </>
      ) : (
        <>
          <span>Ubirajara</span>
        </>
      )}
      <ShoppingCartButton onClick={handleOpen}>
        <img src={ShoppingCartIcon} alt="" />
      </ShoppingCartButton>
      <ShoppingCart
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </UserMenuElement>
  );
};
