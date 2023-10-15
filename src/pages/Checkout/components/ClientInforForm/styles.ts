import styled from 'styled-components';

export const UserInfo = styled.section`
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  .user-address {
    width: 100%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};
  }

  .user-payment {
    width: 100%;
    padding: 2.5rem;
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-card']};
  }
`;

export const FormAddress = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 80px;
  grid-template-rows: repeat(6, 1fr);
  gap: 1rem 0.75rem;

  @media (min-width: 1120px) {
    grid-template-columns: 1fr 2fr 60px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'cep none none'
      'street street street'
      'numberHouse  complement complement'
      'district city uf';

    #cep {
      grid-area: cep;
    }

    #street {
      grid-area: street;
    }

    #numberHouse {
      grid-area: numberHouse;
    }

    #complement {
      grid-area: complement;
    }

    #district {
      grid-area: district;
    }

    #city {
      grid-area: city;
    }

    #uf {
      grid-area: uf;
    }
  }
`;

export const HeaderBase = styled.header`
  width: 100%;
  height: 2.75rem;
  display: flex;
  gap: 0.5rem;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const HeaderFormAddress = styled(HeaderBase)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`;

export const HeaderFormPayment = styled(HeaderBase)`
  svg {
    color: ${(props) => props.theme['purple']};
  }
`;

export const PaymentMethodButton = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.75rem;

  button {
    padding: 1rem 0.5rem 1rem 1rem;
    min-width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    cursor: pointer;

    svg {
      margin-right: 0.5rem;
      color: ${(props) => props.theme['purple-dark']};
    }

    &:not(.selected):hover {
      background: ${(props) => props.theme['base-hover']};
    }

    &:focus {
      outline: 2px solid ${(props) => props.theme['purple-dark']};
      background: ${(props) => props.theme['purple-light']};
    }
  }

  @media (min-width: 1120px) {
    flex-direction: row;
    align-items: flex-start;

    button {
      justify-content: flex-start;
    }
  }
`;
