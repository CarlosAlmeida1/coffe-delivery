import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { formatCashToString } from '../../../../utils/formatCashToString';
import { useCart } from '../../../../hooks/useCart';
import { ProductSelect } from '../ProductSelect';

export function ShoppingCart() {
  const { cart } = useCart();

  const [sumTotalItems, setSumTotalItems] = useState(0);

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((acc, item) => {
        return acc + item.product.price * item.count;
      }, 0);
      setSumTotalItems(total);
    }
  }, [cart]);

  const custOfDelivery = 3.5;
  const custOfDeliveryFormattedToBR = formatCashToString(custOfDelivery);

  const sumTotalOfItensFormatted = formatCashToString(sumTotalItems);

  const priceFinal = sumTotalItems + custOfDelivery;
  const priceFinalFormatted = formatCashToString(priceFinal);

  const hasProductInShoppingCart = cart !== undefined && cart.length !== 0;

  return (
    <Container>
      <h2>Cafés Selecionados</h2>

      <div className='purchase-details'>
        {cart ? (
          cart.map((item) => (
            <ProductSelect
              product={item.product}
              countProduct={item.count}
              key={item.product.id}
            />
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}

        <div className='prices'>
          <span>Total de itens</span>
          <span>R$ {sumTotalOfItensFormatted}</span>
          <span>Taxa de entrega</span>
          <span>R$ {custOfDeliveryFormattedToBR}</span>
          <span>
            <strong>Total</strong>
          </span>
          <span>
            <strong>R$ {priceFinalFormatted}</strong>
          </span>
        </div>

        <button type='submit' disabled={!hasProductInShoppingCart}>
          <p>Confirmar Pedido</p>
        </button>
      </div>
    </Container>
  );
}
