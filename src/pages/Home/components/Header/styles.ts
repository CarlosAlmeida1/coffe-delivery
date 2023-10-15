import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 6.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  position: sticky;
  top: 0;

  background: ${(props) => props.theme['background']};
  z-index: 9999;

  img {
    width: 5rem;
    height: 2.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const LocationBadge = styled.span`
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};

  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: 6px;

  @media (max-width: 600px) {
    span {
      display: none;
    }
`;

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const HomeButton = styled(Button)`
  border-radius: 50;
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
`;

interface CartButtonProps {
  numbertoitemsatshopcart: number;
}

export const CartButton = styled(Button)<CartButtonProps>`
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  &::after {
    content: '${(props) => props.numbertoitemsatshopcart}';
    width: 20px;
    height: 20px;
    border-radius: 50%;

    display: ${(props) =>
      props.numbertoitemsatshopcart === 0 ? 'none' : 'flex'};

    position: absolute;
    top: 24px;
    right: -8px;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['white']};

    justify-content: center;
    align-items: center;

    font-weight: bold;
    font-size: 0.75rem;
  }
`;
