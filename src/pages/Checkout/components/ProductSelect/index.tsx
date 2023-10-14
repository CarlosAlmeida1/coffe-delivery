import { Trash } from 'phosphor-react';
import { InputCount } from '../../../Home/components/InputCount';
import { Container } from './styles';
import { useCart } from '../../../../hooks/useCart';
import { useState, useEffect } from 'react';
import { formatCashToString } from '../../../../utils/formatCashToString';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductSelectProps {
  product: Product;
  countProduct: number;
}

export function ProductSelect({ product, countProduct }: ProductSelectProps) {
  const { updateCountProduct, deleteProductAtCart } = useCart();

  const [totalPrice, setTotalPrice] = useState<string | number>();
  const [count, setCount] = useState(() => {
    if (countProduct) {
      return countProduct;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    const total = formatCashToString(product.price * count);

    setTotalPrice(total);
  }, [product.price, count]);

  function handleAddOneProduct() {
    const newCount = count + 1;

    if (newCount >= 50) {
      return;
    }
    setCount(newCount);
    updateCountProduct(product.id, newCount);
  }

  function handleRemoveOneProduct() {
    const newCount = count - 1;

    if (newCount <= 0) {
      return;
    }
    setCount(newCount);
    updateCountProduct(product.id, newCount);
  }

  function handleChangeProductAtTheCart(countOfProduct: number) {
    if (countOfProduct <= 0 || countOfProduct >= 50) {
      return;
    }

    setCount(countOfProduct);
    updateCountProduct(product.id, countOfProduct);
  }

  function handleDeleteProductAtTheCart(productID: number) {
    deleteProductAtCart(productID);
  }

  return (
    <Container key={product.id}>
      <img src={product.image} alt={product.name} />
      <div className='product-info'>
        <h3>{product.name}</h3>
        <span>{product.description}</span>
        <span>Preço: {formatCashToString(product.price)}</span>
      </div>
      <div className='product-count'>
        <InputCount
          count={count}
          onAdd={handleAddOneProduct}
          onRemove={handleRemoveOneProduct}
          onChange={handleChangeProductAtTheCart}
        />
        <span>Total: {totalPrice}</span>
        <button
          onClick={() => handleDeleteProductAtTheCart(product.id)}
          className='delete-button'
        >
          <Trash size={24} />
        </button>
      </div>
    </Container>
  );
}
