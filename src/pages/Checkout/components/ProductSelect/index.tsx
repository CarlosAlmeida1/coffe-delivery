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
      <div className='info'>
        <img src={product.image} alt='' />

        <div className='details'>
          <span>{product.name}</span>

          <div className='actions'>
            <InputCount
              value={count}
              onChange={(e) =>
                handleChangeProductAtTheCart(Number(e.target.value))
              }
              min={1}
              max={50}
              onClickAddProduct={handleAddOneProduct}
              onClickRemoveProduct={handleRemoveOneProduct}
            />

            <button
              type='button'
              className='remove-button'
              onClick={() => handleDeleteProductAtTheCart(product.id)}
            >
              <Trash size={16} weight='regular' />
              <span>remover</span>
            </button>
          </div>
        </div>
      </div>

      <div className='cost'>R$ {totalPrice}</div>
    </Container>
  );
}
