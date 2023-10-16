import { Container, Form } from './styles';
import { ClientInfoForm } from './components/ClientInforForm';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ShoppingCart } from './components/ShoppingCart';

const checkoutValidationSchema = zod.object({
  street: zod.string().min(3),
  numberHouse: zod.string().min(1, 'Informe o número da residência'),
  complement: zod.string().optional(),
  district: zod.string(),
  city: zod.string().min(3),
  uf: zod.string().min(2),
});

export type CheckoutFormValues = zod.infer<typeof checkoutValidationSchema>;
export type PaymentMethod = 'cash' | 'credit' | 'debit';

export function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<
    PaymentMethod | undefined
  >();

  const methods = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutValidationSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      toast.error('Preencher corretamente o formulário de endereço');
    }
  }, [errors]);

  function handleChekout(data: CheckoutFormValues) {
    if (cart.length <= 0) {
      toast.warn('Carrinho vazio');
      return;
    }

    if (!paymentMethod) {
      toast.warn('Escolha um método de pagamento');
      return;
    }

    reset();
    clearCart();

    navigate('/success', {
      state: {
        paymentMethod,
        address: data,
      },
      replace: true,
    });
  }

  function handleSelectPaymentMethod(method: PaymentMethod) {
    setPaymentMethod(method);
  }

  return (
    <Container>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(handleChekout)}>
          <ClientInfoForm
            paymentMethod={paymentMethod}
            onSelectPaymentMethod={handleSelectPaymentMethod}
          />

          <ShoppingCart />
        </Form>
      </FormProvider>
    </Container>
  );
}
