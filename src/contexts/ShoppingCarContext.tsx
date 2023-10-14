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
  updateCountProduct: (productID: number, count: number) => void;
  deleteProductAtCart: (productID: number) => void;
  clearCart: () => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextData>(
  {} as ShoppingCartContextData
);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [loadLocalStorage, saveToLocalStorage] = useLocalStorage();
  const [cart, setCart] = useState(() => {
    const cartJSON = loadLocalStorage('@coffe-delivery:shop-cart');

    if (!cartJSON) return [] as FullCartList[];

    return cartJSON as FullCartList[];
  });

  function addProductToShopCart(product: Product, count: number) {
    const hasProductItemIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (hasProductItemIndex < 0) {
      const newList = [...cart, { product, count }];

      setCart(newList);
      saveToLocalStorage(newList, '@coffee-delivery:shop-cart');
      toast.success('Item adicionado ao carrinho');
    } else {
      const newList = cart.map((item) => {
        if (item.product.id === product.id) {
          const newCount = item.count + count;

          if (newCount > 99) {
            toast.warn('Quantidade máxima: 99');
            return { ...item, count: 99 };
          } else {
            toast.success('Item adicionado ao carrinho');
            return { ...item, count: newCount };
          }
        } else {
          return item;
        }
      });

      setCart(newList);
      saveToLocalStorage(newList, '@coffee-delivery:shop-cart');
    }
  }

  function updateCountProduct(productID: number, count: number) {
    const updateProduct = cart.map((item) => {
      return productID === item.product.id ? { ...item, count } : item;
    });

    setCart(updateProduct);
  }

  function deleteProductAtCart(productUD: number) {
    const newCartList = cart.filter((item) => item.product.id !== productUD);

    setCart(newCartList);
    localStorage.setItem(
      '@coffe-delivery:shop-cart',
      JSON.stringify(newCartList)
    );
  }

  function clearCart() {
    setCart([]);
    localStorage.removeItem('@coffe-delivery:shop-cart');
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addProductToShopCart,
        updateCountProduct,
        deleteProductAtCart,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
