import CoffeCup from '../../assets/hero-img.png';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import {
  BadgeCart,
  BadgeCoffe,
  BadgePackage,
  LandingContainer,
  StoreContainer,
} from './styles';

export function Home() {
  return (
    <>
      <LandingContainer>
        <img src={CoffeCup} alt='Copo de café' />

        <section>
          <div className='description'>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <div className='badges'>
            <BadgeCart>
              <ShoppingCart size={32} weight='fill' />
              Compra simples e segura
            </BadgeCart>

            <BadgePackage>
              <Package size={32} weight='fill' />
              Embalagem mantém o café intacto
            </BadgePackage>

            <BadgePackage>
              <Timer size={32} weight='fill' />
              Entrega rápida e rastreada
            </BadgePackage>

            <BadgeCoffe>
              <Coffee size={32} weight='fill' />O café chega fresquinho até você
            </BadgeCoffe>
          </div>
        </section>
      </LandingContainer>

      <StoreContainer>
        <h2>Nossos cafés</h2>
      </StoreContainer>
    </>
  );
}
