import { createContext, useEffect, useState } from "react";
import CartItem from "../components/cart/CartItem";

export interface CartItem {
  id: number;
  img: string;
  price: number;
  servingSize: number;
  species: string;
  amount?: number;
}

interface ContextInterface {
  bagList: CartItem[];
  addToCarthandler: (item: CartItem) => void;
  openedCart: boolean;
  cartOpenHandler: () => void;
  removeFromCartHandler: (id: number) => void;
  decrementItemAmount: (id: number) => void;
  totalAmount: number;
}

export const MyContext = createContext<ContextInterface | undefined>(undefined);


  


export const MyContextProvider = ({ children }: any) => {
  

  const [openedCart, setOpenedCart] = useState(false);
  const [bagList, setBagList] = useState<CartItem[]>(JSON.parse(sessionStorage.getItem("bagList") as string)||[]);
  const [discount,setDiscount]=useState(sessionStorage.getItem("freedelivery"))
  useEffect(() => {
    console.log("bagList updated, persist state");
    sessionStorage.setItem("bagList", JSON.stringify(bagList));
  }, [bagList]);


  const incrementItemAmount = (itemId: number) => {
    const updatedBagList = bagList.map((item) => {
      if (item.id === itemId) {
        return { ...item, amount: (item.amount || 0) + 1 };
      }
      return item;
    });

    setBagList(updatedBagList);
  };

  const decrementItemAmount = (itemId: number) => {
    const updatedBagList = bagList.map((item) => {
      if (item.id === itemId) {
        const updatedAmount = (item.amount || 0) - 1;
        const newAmount = updatedAmount >= 1 ? updatedAmount : 1;
        return { ...item, amount: newAmount };
      }
      return item;
    });

    setBagList(updatedBagList);
  };

  const addToCarthandler = (item: CartItem) => {
    const existingItem = bagList.find((cartItem) => cartItem.id == item.id);

    if (existingItem) {
      incrementItemAmount(item.id);
    } else {
      setBagList([...bagList, { ...item, amount: 1 }]);
    }
  };

  const removeFromCartHandler = (id: number) => {
    const filteredBagList = bagList.filter((i) => i.id !== id);
    setBagList(filteredBagList);
  };

  //this method toggles whether cart is shown or not
  const cartOpenHandler = () => {
    setOpenedCart(!openedCart);
  };

  const totalAmount = bagList
    .map((i) => (i.amount ? i.amount * i.price : 0))
    .reduce((a, b) => a || 0 + b || 0, 0);

  return (
    <MyContext.Provider
      value={{
        totalAmount,
        decrementItemAmount,
        removeFromCartHandler,
        openedCart,
        cartOpenHandler,
        bagList,
        addToCarthandler,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
