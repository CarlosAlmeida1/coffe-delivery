import styled from 'styled-components';

export const Container = styled.div`
  h2{
    color: ${(props) => props.theme['base-subtitle']};

  }

  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  

  .purchase-details {
    width: 100%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    stroke: ${(props) => props.theme['purple']};
    border-radius: 6px 44px;
    background: ${(props) => props.theme['base-card']};

    .prices {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
      justify-content: space-between;

      & span:nth-child(even) {
        text-align: right;
      }

      & span:nth-child(odd) {
        font-size: 0.875rem;
      }
      & span strong {
        font-weight: 700;
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    > button {
      margin-top: 1.5rem;
      padding: 0.75rem 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;

      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;

      background: ${(props) => props.theme['yellow']};
      color: ${(props) => props.theme['white']};
      text-transform: uppercase;
      cursor: pointer;

      transition: background-color 0.3s;

      &:hover {
        background: ${(props) => props.theme['yellow-dark']}

      &:disabled {
        background: ${(props) => props.theme['yellow']};
        cursor: not-allowed;
      }
    }

    // Desktop //
    @media (min-width: 1120px) {
      & {
        max-width: 28rem;
      }
    }
  }
`;
