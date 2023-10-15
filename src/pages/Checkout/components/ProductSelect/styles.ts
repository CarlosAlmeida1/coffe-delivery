import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  position: relative;

  .info {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
      gap: 0.5rem;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      color: ${(propps) => propps.theme['base-subtitle']};
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 0.5rem;
    }

    .remove-button {
      padding: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      border-radius: 6px;

      background: ${(props) => props.theme['base-button']};

      color: ${(props) => props.theme['purple-dark']};

      text-transform: uppercase;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background: ${(props) => props.theme['base-hover']};
      }

      span {
        color: ${(props) => props.theme['base-text']};
      }
    }

    .cost {
      text-align: right;
      font-weight: 700;
      color: ${(props) => props.theme['purple']};
    }

    &::after {
      content: '';
      width: 100%;
      position: absolute;
      height: 1px;
      margin: -1.5rem 0;
      background: ${(props) => props.theme['base-hover']};
      bottom: 0;
    }
  }
`;
