import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { ProductItemContainer } from './styles';
import ScrollReveal from 'scrollreveal';
import { formatCashToString } from '../../../../utils/formatCashToString';
import { ShoppingCart } from 'phosphor-react';
import { InputCount } from '../InputCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { useCart } from '../../../../hooks/useCart';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  isAvailable: boolean;
}

interface ProductItemProps {
  product: Product;
}

export function ProductList({ product }: ProductItemProps) {
  const productRef = useRef<HTMLAnchorElement>(null);
  const [count, setCount] = useState(1);
  const [valueFormat, setValueFormat] = useState<number | string>(
    product.price
  );

  const { addProductToShopCart } = useCart();

  useEffect(() => {
    if (productRef.current) {
      ScrollReveal().reveal(productRef.current, {
        origin: 'bottom',
      });
    }
  }, []);

  useEffect(() => {
    const newPrice = formatCashToString(product.price * count);
    setValueFormat(newPrice);
  }, [product.price, count]);

  function handleAddOneProduct() {
    const newCount = count + 1;

    if (newCount >= 50) {
      toast.warn('Quantidade máxima: 49');
      return;
    }

    setCount(newCount);
  }

  function handleAddProductAtTheShopCart() {
    const productItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
    };

    setCount(1);
    addProductToShopCart({ ...productItem }, count);
  }

  function handleRemoveOneProduct() {
    const newCount = count - 1;

    if (newCount <= 0) {
      toast.warn('Quantidade mínima: 1');
      return;
    }

    setCount(newCount);
  }

  function handleChangeProduct(countProduct: number) {
    const newCount = countProduct;

    if (newCount < 1 || newCount >= 50) {
      return;
    }

    setCount(newCount);
  }

  return (
    <ProductItemContainer ref={productRef}>
      <img src={product.image} alt={product.name} />

      <div className='badge-features'>
        {product.tags.map((tag) => (
          <span key={tag}>{tag.toLocaleUpperCase()}</span>
        ))}
      </div>

      <p className='name'>{product.name}</p>

      <span className='description'>{product.description}</span>

      <footer>
        <span>R$</span>
        <strong>
          {count === 0 ? formatCashToString(product.price) : valueFormat}
        </strong>

        <div className='actions'>
          <InputCount
            value={count}
            onAddProduct={handleAddOneProduct}
            onRemoveProduct={handleRemoveOneProduct}
            onChange={(e) => handleChangeProduct(Number(e.target.value))}
            min={1}
            max={50}
          />
          <ToastContainer />
        </div>

        <button className='buy-button' onClick={handleAddProductAtTheShopCart}>
          <ShoppingCart size={22} weight='fill' />
        </button>
      </footer>
    </ProductItemContainer>
  );
}
