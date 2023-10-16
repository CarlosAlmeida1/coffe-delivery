import { useRef, useEffect, useState } from 'react';
import { ProductItemContainer } from './styles';
import ScrollReveal from 'scrollreveal';
import { formatCashToString } from '../../../../utils/formatCashToString';
import { ShoppingCart } from 'phosphor-react';
import { InputCount } from '../InputCount';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../../../../hooks/useCart';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  isAvaliable?: boolean;
}

interface ProductItemProps {
  product: Product;
}

export function ProductList({ product }: ProductItemProps) {
  const productRef = useRef<HTMLLIElement | null>(null);
  const [count, setCount] = useState(1);
  const [valueFormatted, setValueFormatted] = useState<number | string>(
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
    setValueFormatted(newPrice);
  }, [product.price, count]);

  function handleAddProductAtTheShopCart() {
    const productItem = {
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
    };

    addProductToShopCart({ ...productItem }, count);
    setCount(1);
  }

  function handleAddOneProduct() {
    const newCount = count + 1;

    if (newCount >= 50) {
      toast.warn('Quantidade máxima: 49');
      return;
    }

    setCount(newCount);
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

    if (newCount < 0 || newCount >= 50) {
      return;
    }

    setCount(newCount);
  }

  return (
    <ProductItemContainer ref={productRef}>
      <img src={product.image} alt={product.name} />

      <div className='badge-features'>
        {product.tags.map((tag: string) => (
          <span key={tag}>{tag.toUpperCase()}</span>
        ))}
      </div>

      <p className='name'>{product.name}</p>

      <span className='description'>{product.description}</span>

      <footer>
        <span>R$</span>
        <strong>
          {count === 0 ? formatCashToString(product.price) : valueFormatted}
        </strong>

        <div className='actions'>
          <InputCount
            value={count}
            onClickAddProduct={handleAddOneProduct}
            onClickRemoveProduct={handleRemoveOneProduct}
            onChange={(e) => handleChangeProduct(Number(e.target.value))}
            min={1}
            max={50}
          />
        </div>

        <button className='buy-button' onClick={handleAddProductAtTheShopCart}>
          <ShoppingCart size={22} weight='fill' />
        </button>
      </footer>
    </ProductItemContainer>
  );
}
