import { createContext, useState, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorege';
import { toast } from 'react-toastify';

interface ShoppingCartProviderProps {
  children: ReactNode;
}

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type FullCartList = {
  product: Product;
  count: number;
};

interface ShoppingCartContextData {
  cart: FullCartList[];
  addProductToShopCart: (product: Product, count: number) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextData>({
  cart: [],
  addProductToShopCart: () => {},
});

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [loadLocalStorage, saveToLocalStorage] = useLocalStorage();
  const [cart, setCart] = useState(() => {
    const cartJSON = loadLocalStorage('@coffe-delivery:shop-cart');

    if (!cartJSON) return [] as FullCartList[];

    return cartJSON as FullCartList[];
  });

  function addProductToShopCart(product: Product, count: number) {
    const hasProductIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (hasProductIndex !== -1) {
      const newList = [...cart];
      newList[hasProductIndex].count += count;

      if (newList[hasProductIndex].count > 49) {
        toast.warn('Quantidade máxima: 49');
        return;
      }

      setCart(newList);
      saveToLocalStorage(newList, '@coffe-delivery:shop-cart');
      toast.success('Item adicionado ao carrinho');
    } else {
      if (count > 49) {
        toast.warn('Quantidade máxima: 49');
        return;
      }

      const newItem = { product, count };
      const newList = [...cart, newItem];

      setCart(newList);
      saveToLocalStorage(newList, '@coffe-delivery:shop-cart');
      toast.success('Item adicionado ao carrinho');
    }
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addProductToShopCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
