import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ItemProps } from "./definition";

interface CartItem extends ItemProps {
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  add: (item: CartItem) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],
      add: (item: CartItem) =>
        set((state) => {
          const existingItem = state.cartItems.find(
            (itemInCart) => itemInCart.id === item.id
          );
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((itemInCart) =>
                itemInCart.id === item.id
                  ? {
                      ...itemInCart,
                      quantity: itemInCart.quantity + item.quantity,
                    }
                  : itemInCart
              ),
            };
          } else {
            return {
              cartItems: [...state.cartItems, item],
            };
          }
        }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
