import { createContext, useState } from "react";

type OrderContextProps = {
  appettizer: any;
  hamburger: any;
  combo: any;
  dessert: any;
  beverage: any;
  totalValue: number;
};

const OrderContext = createContext<OrderContextProps>({});

interface OrderContextProviderProps {
  children: React.ReactNode;
}

const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
  // const [appettizer, setAppettizer] = useState();
  const [hamburgerOrder, setHamburgerOrder] = useState();

  return (
    <OrderContext.Provider
      value={{
        hamburgerOrder,
        setHamburgerOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContextProvider };
export default OrderContext;
