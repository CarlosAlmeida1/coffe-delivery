import { useRef, useEffect, useState } from 'react';
import { ProductItemContainer } from './styles';
import ScrollReveal from 'scrollreveal';
import { formatCashToString } from '../../../../utils/formatCashToString';

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
  const [count, setCount] = useState(0);
  const [valueFormat, setValueFormat] = useState<number | string>(
    product.price
  );

  useEffect(() => {
    if (productRef.current) {
      ScrollReveal().reveal(productRef.current, {
        origin: 'bottom',
      });
    }
  }, []);

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
      </footer>
    </ProductItemContainer>
  );
}
