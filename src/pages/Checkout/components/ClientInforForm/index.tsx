import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import {
  FormAddress,
  HeaderFormAddress,
  HeaderFormPayment,
  PaymentMethodButton,
  UserInfo,
} from './styles';
import { useState } from 'react';
import { InputDefault } from '../InputDefault';
import { PaymentMethod } from '../..';
import { toast } from 'react-toastify';
import { useFormContext } from 'react-hook-form';

interface ClientFormProps {
  paymentMethod: PaymentMethod | undefined;
  onSelectPaymentMethod: (method: PaymentMethod) => void;
}

export function ClientInfoForm({
  paymentMethod,
  onSelectPaymentMethod,
}: ClientFormProps) {
  const { setValue } = useFormContext();
  const [zipCode, setZipCode] = useState<string>('');

  async function handleLoadAddressAboutZipCode() {
    const zipCodeFormat = zipCode.replace(/[^\d]+/g, '');

    const address = await fetch(
      `http://viacep.com.br/ws/${zipCodeFormat}/json/`
    )
      .then((res) => res.json())
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((_) => {
        if (zipCodeFormat.length < 6) {
          toast.error('Endereço não encontrado');
        }
      });

    if (address) {
      setValue('street', address.logradouro);
      setValue('district', address.bairro);
      setValue('complement', address.complemento);
      setValue('city', address.localidade);
      setValue('uf', address.uf);
    }
  }

  return (
    <UserInfo>
      <h2>Complete seu pedido</h2>

      <div className='user-address'>
        <HeaderFormAddress>
          <MapPinLine size={22} weight='regular' />
          <div>
            <p>Endereço de entrega</p>

            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </HeaderFormAddress>

        <FormAddress>
          <InputDefault
            placeholder='CEP'
            gridArea='cep'
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            onBlur={() => handleLoadAddressAboutZipCode()}
          />

          <InputDefault
            registerName='street'
            placeholder='Rua'
            gridArea='street'
          />

          <InputDefault
            registerName='numberHouse'
            placeholder='Número'
            gridArea='numberHouse'
          />

          <InputDefault
            registerName='complement'
            placeholder='Complemento'
            gridArea='complement'
            optionLabel
          />

          <InputDefault
            registerName='district'
            placeholder='Bairro'
            gridArea='district'
          />

          <InputDefault
            registerName='city'
            placeholder='Cidade'
            gridArea='city'
          />

          <InputDefault
            registerName='uf'
            placeholder='UF'
            gridArea='uf'
            min={2}
            max={2}
          />
        </FormAddress>
      </div>

      <div className='user-payment'>
        <HeaderFormPayment>
          <CurrencyDollar size={22} weight='regular' />

          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </HeaderFormPayment>

        <PaymentMethodButton>
          <button
            type='button'
            className={paymentMethod === 'credit' ? 'selected' : ''}
            onClick={() => onSelectPaymentMethod('credit')}
          >
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </button>

          <button
            type='button'
            className={paymentMethod === 'debit' ? 'selected' : ''}
            onClick={() => onSelectPaymentMethod('debit')}
          >
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </button>

          <button
            type='button'
            className={paymentMethod === 'cash' ? 'selected' : ''}
            onClick={() => onSelectPaymentMethod('cash')}
          >
            <Money size={16} />
            DINHEIRO
          </button>
        </PaymentMethodButton>
      </div>
    </UserInfo>
  );
}
