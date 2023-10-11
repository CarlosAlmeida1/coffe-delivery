import { Outlet } from 'react-router-dom';
import { Header } from '../pages/Home/components/Header';
import { LayoutContainer } from './styles';

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Outlet />
      <Header />
    </LayoutContainer>
  );
}
