import {
  CartButton,
  HeaderContainer,
  HomeButton,
  LocationBadge,
} from './styles';
import { useNavigate } from 'react-router-dom';
import CoffeDeliveryLogo from '../../../../assets/logotipo.svg';
import { HouseSimple, MapPin, ShoppingCart } from 'phosphor-react';
import { useCart } from '../../../../hooks/useCart';

export function Header() {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <img src={CoffeDeliveryLogo} alt='Logotipo do coffe delivery' />

      <div>
        <LocationBadge title='Goioerê, PR'>
          <MapPin size={18} weight='fill' />
          <span>Goioerê, PR</span>
        </LocationBadge>

        <HomeButton
          title='
        Home'
          onClick={() => navigate('/')}
        >
          <HouseSimple size={18} weight='bold' />
        </HomeButton>

        <CartButton
          title='Carrinho'
          onClick={() => navigate('/checkout')}
          numbertoitemsatshopcart={cart.length}
        >
          <ShoppingCart size={18} weight='fill' />
        </CartButton>
      </div>
    </HeaderContainer>
  );
}
