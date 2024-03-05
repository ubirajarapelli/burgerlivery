import { Button } from "..";
import { ShoppingCartButton, UserMenuElement } from "./UserMenu.style";
import ShoppingCartIcon from "../../assets/shoppingCart.svg";

export const UserMenu = () => {
  const token = false;

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
      <ShoppingCartButton onClick={() => {}}>
        <img src={ShoppingCartIcon} alt="" />
      </ShoppingCartButton>
    </UserMenuElement>
  );
};
