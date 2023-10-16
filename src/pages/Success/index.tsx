import { useEffect } from 'react';
import { CheckoutFormValues, PaymentMethod } from '../Checkout';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BadgeLocation,
  BadgePayment,
  BadgeTime,
  BorderGradient,
  Container,
} from './styles';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { paymentMethodLists } from '../../utils/paymentMethods';
import HeroImage from '../../assets/success-img.png';

interface SuccessLocationState {
  address: CheckoutFormValues;
  paymentMethod: PaymentMethod;
}

export function Success() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, [state]);

  if (!state) {
    return null;
  }

  const { address, paymentMethod } = state as SuccessLocationState;

  return (
    <Container>
      <section>
        <h1>Uhu! Pedido Confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <BorderGradient>
          <div className='success-mesage'>
            <BadgeLocation>
              <MapPin size={32} weight='bold' />
              <p>
                Entrega em {''}
                <strong>{`${address.street}, ${address.numberHouse}`}</strong>
                <br />
                {`${address.district} - ${address.city}, ${address.uf}`}
              </p>
            </BadgeLocation>

            <BadgeTime>
              <Timer size={32} weight='bold' />
              <p>Previsão de entrga</p>
              <strong>20 min - 30 min</strong>
            </BadgeTime>

            <BadgePayment>
              <CurrencyDollar size={32} weight='bold' />
              <p>Pagamento na entrega</p>
              <strong>{paymentMethodLists[paymentMethod]}</strong>
            </BadgePayment>
          </div>
        </BorderGradient>
      </section>

      <img src={HeroImage} alt='Entrgador na moto ' />
    </Container>
  );
}
