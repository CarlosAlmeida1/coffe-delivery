import { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCarContext';

export const useCart = () => {
  return useContext(ShoppingCartContext);
};
